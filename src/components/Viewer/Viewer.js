import React, {useState} from "react";
import {Document, Page} from "react-pdf/dist/umd/entry.webpack";
import myFile from "./lorem-ipsum.pdf";

const Viewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ width: '595px' }}>
            <Document
                file={myFile}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}

export default Viewer;
