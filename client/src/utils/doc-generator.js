import { Document, Packer, Paragraph, TextRun } from 'docx'
import { saveAs } from 'file-saver';

export function generateWordDocument(body, filename) {
    // Seperate template body into paragraph parts
    const parts = body.split(/\r?\n/)

    // Create Paragraph objects, containing the previous parts
    const paragraphs = []
    parts.forEach(element => {
        paragraphs.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: element.trim(),
                        size: "12pt",
                    }),
                ]
            })
        )
    });

    // Create the Word document object, and place the paragraph objects inside
    const doc = new Document({
        sections: [{
        children: [
            ...paragraphs,
        ],
        }],
    });
    
    // Generate the actual Word document
    Packer.toBlob(doc).then(blob => {
        // Save the document using FileSaver
        saveAs(blob, filename);
    });
}