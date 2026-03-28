const fs = require('fs');
const PDFParser = require('pdf2json');
const pdfParser = new PDFParser(this, 1);
pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError));
pdfParser.on('pdfParser_dataReady', pdfData => {
  console.log(pdfParser.getRawTextContent().replace(/\r\n/g, '\n'));
});
pdfParser.loadPDF('Surya Presenta Origen (1).pdf');
