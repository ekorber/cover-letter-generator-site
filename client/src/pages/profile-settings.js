import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import PrimaryButton from "../components/buttons/btn-primary";
import { red500, red700, purple600, purple800 } from '../colors';

function ProfileSettingsPage() {

  const [profile, setProfile] = useState({
    fname: '',
    lname: '',
    email: '',
    phoneNumber: '',
    website: '',
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setProfile(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    //Server submission here
    axios.post('/users/update-settings', profile)
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
        <h1 className="font-bold text-center text-2xl mb-5">Default Settings</h1>
        <p className="text-center text-md mb-12">These are the defaults used to populate your templates, when generating a cover letter.</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          
          <label>First Name <input
              type="text"
              name="fname"
              className="w-full p-2 border-2 border-slate-200 shadow-inner"
              value={profile.fname}
              onChange={handleChange} /></label>
          
          <label>Last Name <input
              type="text"
              name="lname"
              className="w-full p-2 border-2 border-slate-200 shadow-inner"
              value={profile.lname}
              onChange={handleChange} /></label>

          <label>Email* <input
              type="email"
              name="email"
              className="w-full p-2 border-2 border-slate-200 shadow-inner"
              value={profile.email}
              onChange={handleChange} /></label>
          
          <label>Phone Number <input
              type="tel"
              name="phoneNumber"
              className="w-full p-2 border-2 border-slate-200 shadow-inner"
              value={profile.phoneNumber}
              onChange={handleChange} /></label>
          
          <label>Website <input
              type="url"
              name="website"
              className="w-full p-2 border-2 border-slate-200 shadow-inner"
              value={profile.website}
              onChange={handleChange} /></label>

          <p className="text-center text-sm mt-6">*You can safely change the default 'Email' setting without it 
          changing the email used to login. To change your login email, see Account Management options below.</p>

          <PrimaryButton type="submit" className='mt-2'>Save Settings</PrimaryButton>
        </form>
      </div>
      <h1 className="font-bold text-center text-2xl mt-12 mb-5">Account Management</h1>
      <div className="flex flex-col gap-4 max-w-xl p-5 mx-auto">
        <PrimaryButton fromColor={purple600} toColor={purple800} >Change Account Email</PrimaryButton>
        <PrimaryButton fromColor={purple600} toColor={purple800} >Change Account Password</PrimaryButton>
        <PrimaryButton fromColor={red500} toColor={red700} >Delete Account</PrimaryButton>
      </div>
    </>
  );
}

export default ProfileSettingsPage;