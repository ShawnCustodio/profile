import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdfUrl }) => {
  return (
    <Document file={pdfUrl}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFViewer;