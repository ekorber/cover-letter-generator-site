import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PrimaryButton from "../components/buttons/btn-primary";

function TemplateEditorPage() {

  const [template, setTemplate] = useState({
    id: '',
    tname: '',
    variables: [
      {
        varName: '',
        varValue: '',
      },
      {
        varName: '',
        varValue: '',
      },
    ],
    body: '',
  })

  function handleAddVariableInput() {
    const newTemplate = {...template}
    newTemplate.variables.push({
      varName: '',
      varValue: '',
    })
    setTemplate(newTemplate);
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setTemplate(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleVariableChange(e, index) {
    const { name, value } = e.target;
    const newTemplate = {...template}

    if (name === 'varName') {
      newTemplate.variables[index].varName = value
    } else if (name === 'varValue') {
      newTemplate.variables[index].varValue = value
    }
    
    console.log(newTemplate)
    setTemplate(newTemplate)
  }

  function handleSubmit(e) {
    e.preventDefault()

    //Server submission here
    axios.post('/users/submit-template', template)
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.error(error);
    });
  }

  return (
    <>
      <div className="m-5">
        <Link to="/dashboard"><PrimaryButton className='mb-4 w-56'>Back to Dashboard</PrimaryButton></Link>  
      </div>
      <div className="w-full max-w-xl p-5 mx-auto">
          <h1 className="font-bold text-center text-2xl mb-7">Edit Template</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <label>Template Name (Job or Industry)<input
                required
                type="text"
                name="tname"
                className="w-full p-2 border-2 border-slate-200 shadow-inner"
                value={template.tname}
                onChange={handleChange} /></label>
            
            {template.variables.map((variable, index) => (
              <div key={index} className="flex gap-3">
                <input
                  required
                  type="text"
                  name="varName"
                  className="w-full p-2 border-2 border-slate-200 shadow-inner"
                  value={variable.varName.value}
                  onChange={(e) => handleVariableChange(e, index)}/>
                <input
                  type="text"
                  name="varValue"
                  className="w-full p-2 border-2 border-slate-200 shadow-inner"
                  value={variable.varValue.value}
                  onChange={(e) => handleVariableChange(e, index)}/>
              </div>
            ))}

            <PrimaryButton type="button" onClick={handleAddVariableInput}>+</PrimaryButton>
              
            <label>Template Text <textarea
              required
              rows={10}
              type="text"
              name="body"
              className="w-full p-2 border-2 border-slate-200 shadow-inner"
              value={template.body}
              onChange={handleChange} /></label>

            <PrimaryButton type="submit" className='mt-2'>Save Template</PrimaryButton>
          </form>
        </div>
    </>
  );
}

export default TemplateEditorPage;