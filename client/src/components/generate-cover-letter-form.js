import { useEffect, useState } from "react"
import BlueButton from "./buttons/btn-blue"
import RedButton from "./buttons/btn-red"

function GenerateCoverLetterForm({ template, closeModal }) {

    const [inputValues, setInputValues] = useState([])

    useEffect(() => {
        setInputValues(template.variables)
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
        console.log('Submitted')
        console.log(inputValues)
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