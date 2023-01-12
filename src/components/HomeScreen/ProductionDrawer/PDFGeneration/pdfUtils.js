import {theme} from "../../../../Theme";
import logo from "../../../../assets/img/VFS-white-long.png";
import {formatDate} from "../../../../utils";
import Values from "values.js";

const headerFontSize = 24;
export const pdfXMargin = 10;
export const topYMargin = 35;
export const bottomYMargin = 7;
export const spacingAfterText = 5;
export const spacingAfterHeader = 7;

export function setHeaderStyle(doc) {
    doc.setFontSize(headerFontSize)
    doc.setTextColor(theme.palette.primary.main)
    doc.setFont(undefined, 'bold')
}

export function setProductionHeaderStyle(doc) {
    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.setTextColor(theme.palette.primary.main)
}

export function setZoneStyle(doc) {
    zoneAndNoteStyle(doc)
}

export function setNoteStyle(doc) {
    zoneAndNoteStyle(doc)
}

function zoneAndNoteStyle(doc) {
    doc.setFontSize(12)
    doc.setFont(undefined, 'normal')
    doc.setTextColor(theme.palette.primary.dark)
}

export function setUpPdfPage(doc) {
    // Fill the entire page with blue
    doc.setFillColor(theme.palette.primary.main);
    doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

    // Cut out middle with white (to create border)
    doc.setFillColor("#FFFFFF");
    doc.rect(1, 1, doc.internal.pageSize.width - 2, doc.internal.pageSize.height - 2, 'F');

    // Create header rectangle
    doc.setFillColor(theme.palette.primary.main);
    doc.rect(0, 0, doc.internal.pageSize.width, 20, 'F');

    doc.setFontSize(22)
    doc.setTextColor("#FFFFFF")
    doc.setFont(undefined, "normal")
    doc.text('Parking Assignment', 140, 13); // TODO: possibly align right

    let img = new Image()
    img.src = logo
    doc.addImage(img,'png', 5, 3, 41, 15)

    doc.setFontSize(12)
    doc.setTextColor(theme.palette.primary.light)
    let date = new Date()
    doc.text(formatDate(date, false).toString(), doc.internal.pageSize.width - 10, 25, {align: "right"})
    doc.setTextColor(theme.palette.primary.main)
}

export function createFooter(doc) {
    // create footer with pagination
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
        doc.setPage(i)
        doc.setFontSize(10)
        doc.setTextColor(theme.palette.primary.main)
        doc.setFont(undefined, "normal")
        doc.text(`Page ${i} of ${doc.getNumberOfPages()}`,
            doc.internal.pageSize.width/2,
            doc.internal.pageSize.height-3,
            {align: "center"})
    }
}

export function drawZoneBoxes(doc, zone, initialZoneYValue, totalZoneHeight, docWidth) {
    if (totalZoneHeight > 0) {
        doc.setLineWidth(0.5)
        doc.setDrawColor(zone.color)
        doc.rect(
            pdfXMargin - 1,
            initialZoneYValue+1,
            docWidth -18,
            totalZoneHeight);
        let tintedZoneColor = new Values(zone.color).tint(75).hexString()
        doc.setFillColor(tintedZoneColor)
        doc.rect(
            pdfXMargin - 0.5,
            initialZoneYValue+1.5,
            docWidth -19,
            totalZoneHeight - 1, 'F');
    }
}

// returns a new pdfYValue
export function printStalls(doc, zone, stallXPosition, stallDataManager, pdfYValue) {
    for (let i = 0; i < zone.stallIDs.length; i++) {
        let stallName = stallDataManager.getStallByID(zone.stallIDs[i]).name.toUpperCase()
        let stallNameWithSpaceWidth = doc.getTextDimensions(`${stallName}  `).w
        if (stallNameWithSpaceWidth + stallXPosition < 210) { // manually set margin
            doc.text(`${stallName}  `, stallXPosition, pdfYValue)
            stallXPosition += stallNameWithSpaceWidth
        } else {
            pdfYValue += spacingAfterText
            stallXPosition = pdfXMargin
            doc.text(stallName, stallXPosition, pdfYValue)
            stallXPosition += stallNameWithSpaceWidth
        }
    }
    return pdfYValue
}