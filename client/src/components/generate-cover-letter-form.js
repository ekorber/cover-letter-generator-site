import { useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import BlueButton from "./buttons/btn-blue"
import RedButton from "./buttons/btn-red"
import { API_USER_HISTORY_COVER_LETTERS_SUBMIT } from "../apiRoutes";
import CoverLetterHistoryContext from "../contexts/CoverLetterHistoryContext";
import { getFormattedCurrentDate } from "../utils/format-date";
import { generateWordDocument } from "../utils/doc-generator";
import ToastContext from "../contexts/ToastContext";

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
    const { setToastVisible, setToastMessage, setToastTheme } = useContext(ToastContext)

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

    function handleSubmission(submissionType) {

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

        //Only download if the proper submit button is pressed
        if (submissionType === 'save-and-download')
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
            setToastMessage('Cover letter successfully created')
            setToastTheme('success')
            setToastVisible(true)
        })
        .catch(function (error) {
            console.error(error);
            setToastMessage('Error: Cover letter could not be sent to server')
            setToastTheme('danger')
            setToastVisible(true)
        });
        
        closeModal()
    }

    function cancelSubmission() {
        closeModal()
    }

    return (
        <>
            <p className="mb-4 text-center font-semibold">Generate Cover Letter for "{template.tname}"</p>

            <form className="w-full lg:max-w-4xl">
                {inputValues.map((item) => (
                    <label className="font-light">{item.varName}<input
                        required
                        type="text"
                        className="w-full lg:max-w-4xl mt-1 mb-5 p-2 font-normal border-2 border-blue-200 shadow-inner"
                        name={item.varName}
                        value={item.varValue}
                        onChange={(e) => handleChange(e, item.id)}
                        /></label>
                ))}
                <div className="flex flex-col lg:flex-row gap-4 mt-1 lg:mt-5">
                    <BlueButton onClick={() => handleSubmission('save-and-download')} className='w-full'>Save & Download</BlueButton>
                    <BlueButton onClick={() => handleSubmission('save-no-download')} className='w-full'>Save Without Downloading</BlueButton>
                    <RedButton onClick={cancelSubmission} className='w-full'>Cancel</RedButton>
                </div>
            </form>
        </>
    );
}

export default GenerateCoverLetterForm;