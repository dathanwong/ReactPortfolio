import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import MyResume from '../images/DathanWongResume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import '../components/style.css';

const Resume = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

   
    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
      }

    return (
        <>
        <div className="row justify-content-center">
            <div className=" col-sm-12 col-md-10 col-lg-10 col-xl-6 text-xl-right">
            <Document
                file={MyResume}
                onLoadSuccess={removeTextLayerOffset}
            >
                <Page pageNumber={1} 
                renderTextLayer={false}/>
            </Document>
            </div>
            <div className=" col-sm-12 col-md-10 col-lg-10 col-xl-6 text-xl-left">
            <Document
                file={MyResume}
                onLoadSuccess={removeTextLayerOffset}
            >
                <Page pageNumber={2} 
                renderTextLayer={false}/>
            </Document>
            </div>
        </div>
        </>
    );
}
 
export default Resume;