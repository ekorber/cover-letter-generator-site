import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import BlueButton from "../components/buttons/btn-blue";
import PurpleButton from "../components/buttons/btn-purple";
import RedButton from "../components/buttons/btn-red";
import UserContext from "../contexts/UserContext";
import { API_USER_PROFILE_UPDATE } from "../apiRoutes";
import MobileMenu from "../components/menus/mobile-menu";
import ToastContext from "../contexts/ToastContext";

function ProfileSettingsPage() {
  const { userData, setUserData } = useContext(UserContext)
  const { setToastVisible, setToastMessage, setToastTheme } = useContext(ToastContext)
  const [profile, setProfile] = useState({
    fname: '',
    lname: '',
    email: '',
    phoneNumber: '',
    website: '',
  })

  useEffect(() => {
    // Load in user data at start
    setProfile(userData.defaultSettings)
  }, [])

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
    axios.post(API_USER_PROFILE_UPDATE, profile)
    .then(function (response) {
      //Update contexts upon successful submission
      setUserData(response.data)
      setToastMessage('Updates Saved Successfully')
      setToastTheme('success')
      setToastVisible(true)
    })
    .catch(function (error) {
      console.error(error);
      setToastMessage('Error: Updates could not be saved')
      setToastTheme('danger')
      setToastVisible(true)
    });
  }

  return (
    <>
      <MobileMenu />
      <div className="flex flex-col xl:flex-row xl:gap-10 mt-12">
        <div className="w-full xl:flex-end max-w-xl p-5 mx-auto xl:ml-auto xl:mr-0">
          <h1 className="font-bold text-center text-2xl mb-5">Default Settings</h1>
          <p className="text-center text-md mb-12 xl:mb-5">These are the defaults used to populate your templates, when generating a cover letter.</p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <label>First Name <input
                type="text"
                name="fname"
                maxLength={100}
                className="w-full p-2 border-2 border-slate-200 shadow-inner"
                value={profile.fname}
                onChange={handleChange} /></label>
            
            <label>Last Name <input
                type="text"
                name="lname"
                maxLength={100}
                className="w-full p-2 border-2 border-slate-200 shadow-inner"
                value={profile.lname}
                onChange={handleChange} /></label>

            <label>Email* <input
                type="email"
                name="email"
                maxLength={100}
                className="w-full p-2 border-2 border-slate-200 shadow-inner"
                value={profile.email}
                onChange={handleChange} /></label>
            
            <label>Phone Number <input
                type="tel"
                name="phoneNumber"
                maxLength={50}
                className="w-full p-2 border-2 border-slate-200 shadow-inner"
                value={profile.phoneNumber}
                onChange={handleChange} /></label>
            
            <label>Website <input
                type="url"
                name="website"
                maxLength={200}
                className="w-full p-2 border-2 border-slate-200 shadow-inner"
                value={profile.website}
                onChange={handleChange} /></label>

            <p className="text-center text-sm mt-6">*You can safely change the default 'Email' setting without it 
            changing the email used to login. To change your login email, see the Account Management options.</p>

            <BlueButton type="submit" className='mt-2'>Save Settings</BlueButton>
          </form>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-xl p-5 mx-auto xl:mr-auto xl:ml-0">
          <h1 className="font-bold text-center text-2xl mt-12 xl:mt-0 mb-5 xl:mb-22">Account Management</h1>
          <PurpleButton>Change Account Email</PurpleButton>
          <PurpleButton>Change Account Password</PurpleButton>
          <RedButton>Delete Account</RedButton>
        </div>
      </div>
    </>
  );
}

export default ProfileSettingsPage;