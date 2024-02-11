import { useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import BlueButton from "./buttons/btn-blue"
import RedButton from "./buttons/btn-red"
import { API_USER_HISTORY_COVER_LETTERS_SUBMIT } from "../apiRoutes";
import CoverLetterHistoryContext from "../contexts/CoverLetterHistoryContext";
import { getFormattedCurrentDate } from "../utils/format-date";
import { generateWordDocument } from "../utils/doc-generator";

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

    const { coverLetterHistory, setCoverLetterHistory } = useContext(CoverLetterHistoryContext)

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

        // Replace Current Date placeholder
        const currentDate = getFormattedCurrentDate()
        coverLetterBody = coverLetterBody.replace('[Current Date]', currentDate)

        // Replace variable placeholders with their respective values
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

        generateWordDocument(coverLetterBody, `Cover Letter - ${company} - ${position}.docx`)

        // Create history object for submission
        const historyObject = {
            id: uuidv4(),
            position: position,
            company: company,
            dateCreated: currentDate,
            body: coverLetterBody,
        }

        // Server submission
        axios.post(API_USER_HISTORY_COVER_LETTERS_SUBMIT, historyObject)
        .then(function (response) {
            setCoverLetterHistory([...coverLetterHistory, historyObject])
        })
        .catch(function (error) {
            console.error(error);
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