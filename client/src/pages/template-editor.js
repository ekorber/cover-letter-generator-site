import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import PrimaryButton from "../components/buttons/btn-primary";
import { red500, red700, red900, green500, green700, green900 } from '../colors';
import TrashIcon from "../components/svg/trash-icon";

function TemplateEditorPage() {

  const [template, setTemplate] = useState({
    id: uuidv4(),
    tname: 'My New Template...',
    variables: [
      {
        id: uuidv4(),
        varName: 'First Name',
        varValue: '',
      },
      {
        id: uuidv4(),
        varName: 'Last Name',
        varValue: '',
      },
      {
        id: uuidv4(),
        varName: 'Email',
        varValue: '',
      },
      {
        id: uuidv4(),
        varName: 'Phone Number',
        varValue: '',
      },
      {
        id: uuidv4(),
        varName: 'Website',
        varValue: '',
      },
    ],
    body: `[First Name] [Last Name]
[Phone Number]
[Email]
[Website]

[Current Date]
  
To whom it may concern,
  
I am pleased to be applying for the [Position] position at [Company]. My experience with ... seems to nicely match what you’re looking for from an applicant. Additionally, I have experience using ... and am very well familiar with ...
  
Thank you for taking the time to review my application. I’d love to have an opportunity to chat about the work being done at [Company] and about the people taking part in it. Feel free to reach out to me if you have any questions or would like to get in touch.
    
Best Regards,
[First Name] [Last Name]`,
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setTemplate(prevState => ({
      ...prevState,
      variables:[...prevState.variables],
      [name]: value,
    }))
  }

  function addVariableInput(name='', value='') {
    setTemplate((prevState) => ({
      ...prevState,
      variables: [...prevState.variables, {
        id: uuidv4(),
        varName: name,
        varValue: value,
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
          <h1 className="font-bold text-center text-2xl -mt-5 mb-10">Edit Template</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <label className="font-light">Template Name (Job or Industry)<input
                required
                type="text"
                name="tname"
                className="w-full mt-3 p-2 font-normal border-2 border-slate-200 shadow-inner"
                value={template.tname}
                onChange={handleChange} /></label>
            
            {template.variables.length > 0 ? <div className="flex gap-3 mt-8 -mb-1">
              <p className="text-center w-full font-light pr-6">Variable Names</p>
              <p className="text-center w-full font-light pr-20">Default Values</p>
            </div> : <div className="mb-5"></div>}
            

            {template.variables.map((item) => (
              <div key={item.id} className="flex gap-3">
                <input
                  required
                  type="text"
                  name="varName"
                  className="w-full p-2 border-2 border-slate-200 shadow-inner"
                  placeholder="(Required)"
                  value={item.varName}
                  onChange={(e) => handleVariableChange(e, item.id)}/>
                <input
                  type="text"
                  name="varValue"
                  className="w-full p-2 border-2 border-slate-200 shadow-inner"
                  placeholder="(Optional)"
                  value={item.varValue}
                  onChange={(e) => handleVariableChange(e, item.id)}/>
                <PrimaryButton  onClick={() => removeVariableInput(item.id)} 
                                fromColor={red500}
                                toColor={red700}
                                hoverFromColor={red700}
                                hoverToColor={red900}
                                className='w-36'>
                                  <TrashIcon className='mx-auto' width={27} height={27} />
                                </PrimaryButton>
              </div>
            ))}

            <PrimaryButton className='mb-10' type="button" onClick={addVariableInput} fromColor={green500} toColor={green700} hoverFromColor={green700} hoverToColor={green900}>Add Variable</PrimaryButton>

            <label className="font-light">Template Body <textarea
              required
              rows={10}
              type="text"
              name="body"
              className="w-full font-normal mt-3 p-2 border-2 border-slate-200 shadow-inner"
              value={template.body}
              onChange={handleChange} /></label>

            <p className="text-center -mt-1 mb-10 underline decoration-dotted italic text-sm">The variables [Current Date], [Company] and [Position] are available by default.</p>

            <PrimaryButton type="submit" className='mt-5 mb-7'>Save Template</PrimaryButton>
          </form>
        </div>
    </>
  );
}

export default TemplateEditorPage;