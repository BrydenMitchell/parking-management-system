import React, {useState} from 'react';
import Dialog from "@mui/material/Dialog";
import PDFGenerator from "./PDFGenerator";
import GenerateReportOptions from "./GenerateReportOptions";
import MapPreview from "./MapPreview";

function GeneratePDFModal(props) {

    const [showMapPreview, setShowMapPreview] = useState(false)
    const [showMap, setShowMap] = useState(false)
    const [listStalls, setListStalls] = useState(false)
    const [reportNotes, setReportNotes] = useState("")

    const getModalSize = () => {
        if (showMapPreview) {
            return "lg"
        }
        return "sm"
    }

    const downloadPDF = (showMap, listStalls, reportNotes) => {
        new PDFGenerator(
            props.stallDataManager,
            showMap,
            listStalls,
            reportNotes,
        )
    }

    const handleDownloadClick = (showMap, listStalls, reportNotes) => {
        setShowMap(showMap)
        setListStalls(listStalls)
        setReportNotes(reportNotes)
        if (showMap) {
            setShowMapPreview(true)
        } else {
            downloadPDF(showMap, listStalls, reportNotes)
        }
    }

    const handleDownloadWithMap = () => {
        downloadPDF(showMap, listStalls, reportNotes)
    }

    return (
        <Dialog open={props.open} onClose={props.onClose} fullWidth={true} maxWidth={getModalSize().toString()}>
            {!showMapPreview ?
                <GenerateReportOptions download={handleDownloadClick} onClose={props.onClose}/>:
                <MapPreview stallDataManager={props.stallDataManager} onClose={props.onClose} download={handleDownloadWithMap}/>
            }
        </Dialog>

    );
}

export default GeneratePDFModal