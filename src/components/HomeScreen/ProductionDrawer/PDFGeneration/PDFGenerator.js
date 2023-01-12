import jsPDF from "jspdf";
import {theme} from "../../../../Theme";
import domtoimage from 'dom-to-image';
import {formatDate} from "../../../../utils";
import {
    bottomYMargin,
    createFooter, drawZoneBoxes,
    pdfXMargin, printStalls,
    setHeaderStyle,
    setNoteStyle,
    setProductionHeaderStyle,
    setUpPdfPage,
    setZoneStyle, spacingAfterHeader, spacingAfterText, topYMargin
} from "./pdfUtils";

class PDFGenerator {

    constructor(stallDataManager, displayMap, displayStalls, notes) {
        this.stallDataManager = stallDataManager
        this._displayMap = displayMap;
        this._displayStalls = displayStalls;
        this._notes = notes;
        this.pdfYValue = 30; // should we put this in utils file?
        this.docWidth = 0;
        this.docHeight = 0;
        this.main()
    }


    filterNode(node) {
        function checkForClassname(node) {
            let result = false
            node.classList.forEach((className) => {
                // exclude "leaflet-tile" which is causing an issue with getting a png
                if ([
                    "leaflet-tile-loaded",
                    "leaflet-tile-pane",
                    "leaflet-tile-container",
                    "leaflet-pane",
                    "leaflet-map-pane",
                    "leaflet-overlay-pane",
                ].includes(className.toLowerCase())) {
                    result = true
                }
            })
            return result
        }

        if (node instanceof Text) {
            return true;
        }
        if (checkForClassname(node)) {
            return true
        }
        return [
            "div",
            "path",
            "p",
            "svg",
            "g",
        ].includes(node.tagName.toLowerCase()) || /^h[123456]$/i.test(node.tagName);
    }

    main() {
        if (this.displayMap) {
            const node = document.getElementById("map-preview-container");
            console.log(node)
            domtoimage.toPng(node, {filter: this.filterNode}).then((dataUrl) => {
                let img = new Image()
                img.src = encodeURI(dataUrl.toString())
                this.downloadPDF(img)
            }).catch((e) => {
                console.log(e)
            })
        } else {
            this.downloadPDF()
        }
    }

    downloadPDF(img = null) {
        const doc = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "letter"
        });

        this.docWidth = doc.internal.pageSize.width
        this.docHeight = doc.internal.pageSize.height

        setUpPdfPage(doc)

        if (this.displayMap) {
            this.addMapToPDF(doc, img)
        }

        if (this.displayStalls) {
            this.addStallsToPDF(doc)
        }

        if (this.notes !== "") {
            this.addNotesToPDF(doc)
        }

        createFooter(doc)

        // keep for testing, comment out for deployment
        // const pdfURL = doc.output("bloburl");
        // window.open(pdfURL, "_blank");

        // use for deployment
        let date = new Date()
        let formattedDate = formatDate(date, false).replace(/\s/g, "");
        doc.save(`parking_assignment-${formattedDate}.pdf`)
    }

    addPdfPage(doc) {
        doc.addPage()
        setUpPdfPage(doc)
        this.pdfYValue = topYMargin; // restart at the top of the page
    }

    addMapToPDF(doc, img) {
        setHeaderStyle(doc)
        doc.text('Map', pdfXMargin, this.pdfYValue);
        this.pdfYValue += 10
        doc.addImage(img, 'png', pdfXMargin, topYMargin, 220, 137);
        this.pdfYValue += 110
    }

    calculateZoneTotalHeight(doc, zone, initialZoneYValue) {
        let stallXPosition = pdfXMargin
        let totalZoneHeight = 0
        for (let k = 0; k < zone.stallIDs.length; k++) {
            let stallName = this.stallDataManager.getStallByID(zone.stallIDs[k]).name.toUpperCase()
            let stallNameWithSpaceWidth = doc.getTextDimensions(`${stallName}  `).w
            if (stallNameWithSpaceWidth + stallXPosition < 210) { // manually set margin
                stallXPosition += stallNameWithSpaceWidth
            } else {
                this.pdfYValue += spacingAfterText
                stallXPosition = pdfXMargin
                stallXPosition += stallNameWithSpaceWidth
            }
            // Get the final Zone Y-value from the last stall
            if (k === zone.stallIDs.length - 1) {
                // finalZoneYValue = this.pdfYValue
                totalZoneHeight = this.pdfYValue - initialZoneYValue // pdfYValue stores the bottom Y value of the zone
            }
        }
        return totalZoneHeight
    }

    addStallsToPDF(doc) {
        setHeaderStyle(doc)
        doc.text('Stalls', pdfXMargin, this.pdfYValue) // there will always be room, no need to check
        this.pdfYValue += spacingAfterHeader
        doc.setFont(undefined, 'normal')

        // Iterate through productions
        // TODO: catch case where prod has no zones
        for (let j = 0; j < this.stallDataManager.productions.length; j++) {
            let production = this.stallDataManager.productions[j]
            if (production.isDisplaying === true) {

                // If there is room for the Production Name, print it
                let productionNameHeight = doc.getTextDimensions(production.name).h
                if (productionNameHeight < (this.docHeight - (this.pdfYValue + 5))) {
                    setProductionHeaderStyle(doc)
                    doc.text(production.name, pdfXMargin, this.pdfYValue)
                } else {
                    this.addPdfPage(doc)
                    setProductionHeaderStyle(doc)
                    doc.text(production.name, pdfXMargin, this.pdfYValue)
                }
                this.pdfYValue += spacingAfterText

                // Iterate through zones
                setZoneStyle(doc)
                for (let i = 0; i < production.zoneManager.zones.length; i++) {
                    let zone = production.zoneManager.zones[i]
                    if (zone.isDisplaying){
                        let initialZoneYValue = this.pdfYValue
                        this.pdfYValue += spacingAfterText // for calculating pagination spacing including Zone header
                        let initialStallsYValue = this.pdfYValue

                        // Calculate height for Stalls box
                        let totalZoneHeight = this.calculateZoneTotalHeight(doc, zone, initialZoneYValue)

                        // Check for room on the page for the zone
                        let stallXPosition = pdfXMargin
                        if (totalZoneHeight < (this.docHeight - (this.pdfYValue + bottomYMargin))) {
                            this.pdfYValue = initialZoneYValue
                            doc.text(`Zone: ${zone.name} (${zone.stallCount} Stalls)`, pdfXMargin, this.pdfYValue)
                            this.pdfYValue += spacingAfterText

                            // If zone has stalls, draw boxes
                            if (zone.stallIDs.length > 0) {
                                drawZoneBoxes(doc, zone, initialZoneYValue, totalZoneHeight, this.docWidth)
                            }

                            // Print the Stalls on top of boxes
                            stallXPosition = pdfXMargin
                            this.pdfYValue = initialStallsYValue
                            doc.setTextColor(theme.palette.primary.dark)
                            this.pdfYValue  = printStalls(doc, zone, stallXPosition, this.stallDataManager, this.pdfYValue)
                        } else {
                            this.addPdfPage(doc)
                            initialZoneYValue = this.pdfYValue
                            doc.text(`Zone: ${zone.name} (${zone.stallCount} Stalls)`, pdfXMargin, this.pdfYValue)
                            this.pdfYValue += spacingAfterText

                            // If zone has stalls, draw boxes
                            if (zone.stallIDs.length > 0) {
                                drawZoneBoxes(doc, zone, initialZoneYValue, totalZoneHeight, this.docWidth)
                            }

                            // Print the Stalls on top of boxes
                            stallXPosition = pdfXMargin
                            this.pdfYValue = printStalls(doc, zone, stallXPosition, this.stallDataManager, this.pdfYValue)
                        }

                        // If zone has no stalls, add zone spacing break
                        if (zone.stallIDs.length > 0) {
                            this.pdfYValue += 10
                        } else {
                            this.pdfYValue += 5
                        }
                    }

                }

                // If it is the last Production, add larger spacing break
                if (j !== this.stallDataManager.productions.length-1) {
                    this.pdfYValue += 5
                } else {
                    this.pdfYValue += 10
                }
            }
        }
    }

    addNotesToPDF(doc) {
        setHeaderStyle(doc)
        doc.text('Notes', pdfXMargin, this.pdfYValue)
        this.pdfYValue += spacingAfterHeader

        setNoteStyle(doc)
        let splitNotes = doc.splitTextToSize(this.notes, this.docWidth - (2 * pdfXMargin));
        for (let i = 0; i < splitNotes.length; i++) {
            // if there is room, print it
            if (doc.getTextDimensions(splitNotes[i]).h < (this.docHeight - (this.pdfYValue + bottomYMargin))) {
                doc.text(splitNotes[i], pdfXMargin, this.pdfYValue,
                    { maxWidth: this.docWidth - 20})
                this.pdfYValue += spacingAfterText
            } else {
                this.addPdfPage(doc)
                doc.text(splitNotes[i], pdfXMargin, this.pdfYValue,
                    { maxWidth: this.docWidth - 20})
                this.pdfYValue += spacingAfterText
            }
        }
    }

    get displayMap() {
        return this._displayMap;
    }

    set displayMap(value) {
        this._displayMap = value;
    }

    get displayStalls() {
        return this._displayStalls;
    }

    set displayStalls(value) {
        this._displayStalls = value;
    }

    get notes() {
        return this._notes;
    }

    set notes(value) {
        this._notes = value;
    }
}

export default PDFGenerator