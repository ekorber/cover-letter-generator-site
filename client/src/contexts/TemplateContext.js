import { createContext, useState } from "react";

const TemplateContext = createContext()

export const TemplateContextProvider = ({ children }) => {

    const [templates, setTemplates] = useState([]);
  
    return (
        <TemplateContext.Provider value={{ templates, setTemplates }}>
            {children}
        </TemplateContext.Provider>
    );
};

export default TemplateContext;