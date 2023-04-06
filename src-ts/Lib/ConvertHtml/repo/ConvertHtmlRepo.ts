import HtmlToPdf from 'html-pdf-node';
import fs from 'fs';
import UnableToGeneratePdfException from '../exception/UnableToGeneratePdfException';

export default class ConvertHtmlRepo {
    /**
     * convert html to pdf
     * @param filePath 
     * @param outPath 
     */
    async convert(filePath: string, outPath: string): Promise<void> {
        try {
            const data = fs.readFileSync(filePath, 'utf8');

            //
            const ConvertPdf = () => {
                return new Promise((res, rej) => {
                    HtmlToPdf.generatePdf({ content: data }, { format: 'A4', printBackground: true }, (err, pdfBuffer) => {
                        if (err) {
                            rej(err)
                        } else {
                            res(pdfBuffer);
                        }
                    });
                });
            }

            //  converting html to pdf
            const buffer = await ConvertPdf();
            
            //  not success  
            if (!buffer) throw new UnableToGeneratePdfException('unknown');

            //  write file
            fs.writeFileSync(outPath, <string>buffer);

        } catch (error) { 
            throw new UnableToGeneratePdfException(error.message);
        }
    }
}
