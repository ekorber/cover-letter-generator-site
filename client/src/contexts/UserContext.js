import { createContext } from "react";

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

export default UserContext;