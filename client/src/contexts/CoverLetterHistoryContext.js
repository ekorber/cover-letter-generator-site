import { useState, createContext } from "react";

const CoverLetterHistoryContext = createContext()

export const CoverLetterHistoryContextProvider = ({ children }) => {

    const [coverLetterHistory, setCoverLetterHistory] = useState([]);
  
    return (
        <CoverLetterHistoryContext.Provider value={{ coverLetterHistory, setCoverLetterHistory }}>
            {children}
        </CoverLetterHistoryContext.Provider>
    );
};

export default CoverLetterHistoryContext;