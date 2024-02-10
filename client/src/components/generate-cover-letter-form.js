import { useEffect, useState } from "react"
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver';
import BlueButton from "./buttons/btn-blue"
import RedButton from "./buttons/btn-red"

function GenerateCoverLetterForm({ template, closeModal }) {

    const [inputValues, setInputValues] = useState([
        {
            id: uuidv4(),
            varName: 'Position',
            varValue: '',
        },
        {
            id: uuidv4(),
            varName: 'Company',
            varValue: '',
        },
    ])

    useEffect(() => {
        const newValues = [...inputValues, ...template.variables]
        setInputValues(newValues)
    }, [])

    function handleChange(e, id) {
        const { value } = e.target;

        setInputValues(prevState => (
            prevState.map(item => (
                item.id === id ? {...item, varValue:value} : item
            ))
        ))
    }

    function handleSubmission(e) {
        e.preventDefault()

        let coverLetterBody = template.body
        let position = ''
        let company = ''

        // Get formatted date
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()
        const day = now.getDate()
        let formattedMonth = ''

        switch (month) {
            case 0: formattedMonth = 'January'; break;
            case 1: formattedMonth = 'February'; break;
            case 2: formattedMonth = 'March'; break;
            case 3: formattedMonth = 'April'; break;
            case 4: formattedMonth = 'May'; break;
            case 5: formattedMonth = 'June'; break;
            case 6: formattedMonth = 'July'; break;
            case 7: formattedMonth = 'August'; break;
            case 8: formattedMonth = 'September'; break;
            case 9: formattedMonth = 'October'; break;
            case 10: formattedMonth = 'November'; break;
            case 11: formattedMonth = 'December'; break;
        }

        //Replace standard placeholders
        coverLetterBody = coverLetterBody.replace('[Current Date]', `${formattedMonth} ${day}, ${year}`)

        //Replace variable placeholders with their respective values
        inputValues.forEach(element => {

            if (element.varName === 'Company') {
                company = element.varValue
            }

            if (element.varName === 'Position') {
                position = element.varValue
            } 

            const regexPattern = `\\[${element.varName}\\]`
            const regex = new RegExp(regexPattern, "g");
            coverLetterBody = coverLetterBody.replace(regex, element.varValue)
        })

        // Seperate template body into paragraph parts
        const parts = coverLetterBody.split(/\r?\n/)

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
            saveAs(blob, `Cover Letter - ${company} - ${position}.docx`);
        });
        
        closeModal()
    }

    function cancelSubmission() {
        closeModal()
    }

    return (
        <>
            <p className="p-3">Generate Cover Letter for "{template.tname}"</p>

            <form onSubmit={handleSubmission}>
                {inputValues.map((item) => (
                    <label className="font-light">{item.varName}<input
                        required
                        type="text"
                        className="w-full mt-1 mb-5 p-2 font-normal border-2 border-slate-200 shadow-inner"
                        name={item.varName}
                        value={item.varValue}
                        onChange={(e) => handleChange(e, item.id)}
                        /></label>
                ))}
                <BlueButton type="submit" className='w-60 mr-5'>Save & Download</BlueButton>
                <RedButton onClick={cancelSubmission} className='w-60'>Cancel</RedButton>
            </form>
        </>
    );
}

export default GenerateCoverLetterForm;