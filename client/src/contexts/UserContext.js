import { useState, useEffect, createContext } from "react";
import axios from 'axios';
import { API_USER_PROFILE } from '../apiRoutes'

export const defaultUserData = {
    defaultSettings: {
        fname: '',
        lname: '',
        email: '',
        phoneNumber: '',
        website: '',
    }
}

const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(defaultUserData);
  
    useEffect(() => {
        axios.post(API_USER_PROFILE)
        .then(function(response) {
          setUserData(response.data)
        })
        .catch(function(error) {
          console.error(error);
        })
    }, [])

    return (
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    );
};

export default UserContext;