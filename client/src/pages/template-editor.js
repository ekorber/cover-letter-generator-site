import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import PrimaryButton from "../components/buttons/btn-primary";
import { red500, red700, red900 } from '../colors';

function TemplateEditorPage() {

  const [template, setTemplate] = useState({
    id: '',
    tname: '',
    variables: [
      {
        id: uuidv4(),
        varName: '',
        varValue: '',
      },
      {
        id: uuidv4(),
        varName: '',
        varValue: '',
      },
    ],
    body: '',
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setTemplate(prevState => ({
      ...prevState,
      variables:[...prevState.variables],
      [name]: value,
    }))
  }

  function addVariableInput() {
    setTemplate((prevState) => ({
      ...prevState,
      variables: [...prevState.variables, {
        id: uuidv4(),
        varName: '',
        varValue: '',
      }]
    }));
  };

  function removeVariableInput(id) {
    setTemplate((prevState) => ({
      ...prevState,
      variables: prevState.variables.filter(variable => variable.id !== id)
    }));
  }

  function handleVariableChange(e, id) {
    const { name, value } = e.target;
    
    if (name === 'varName') {
      setTemplate((prevState) => ({
        ...prevState,
        variables: prevState.variables.map(variable =>
          variable.id === id ? { ...variable, varName: value } : variable
        )
      }));
    } else if (name === 'varValue') {
      setTemplate((prevState) => ({
        ...prevState,
        variables: prevState.variables.map(variable =>
          variable.id === id ? { ...variable, varValue: value } : variable
        )
      }));
    }
  };

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
            
            {template.variables.map((item) => (
              <div key={item.id} className="flex gap-3">
                <input
                  required
                  type="text"
                  name="varName"
                  className="w-full p-2 border-2 border-slate-200 shadow-inner"
                  value={item.varName.value}
                  onChange={(e) => handleVariableChange(e, item.id)}/>
                <input
                  type="text"
                  name="varValue"
                  className="w-full p-2 border-2 border-slate-200 shadow-inner"
                  value={item.varValue.value}
                  onChange={(e) => handleVariableChange(e, item.id)}/>
                <PrimaryButton onClick={() => removeVariableInput(item.id)} fromColor={red500} toColor={red700} hoverFromColor={red700} hoverToColor={red900} className='w-36'>X</PrimaryButton>
              </div>
            ))}

            <PrimaryButton type="button" onClick={addVariableInput}>Add Variable</PrimaryButton>
              
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