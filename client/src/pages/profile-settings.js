import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import PrimaryButton from "../buttons/btn-primary";

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
      <Link to="/dashboard"><PrimaryButton className='mb-4 w-28'>Dashboard</PrimaryButton></Link>
      <div className="w-full max-w-xl p-5 mx-auto">
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

          <label>Email <input
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

          <PrimaryButton type="submit" className='mt-4'>Save Settings</PrimaryButton>
        </form>
      </div>
    </>
  );
}

export default ProfileSettingsPage;