import { UserContextProvider } from "./UserContext";
import { TemplateContextProvider } from "./TemplateContext";
import CoverLetterHistoryContext from "./CoverLetterHistoryContext";

function MultiContextProvider({ children }) {
    return (  
        <UserContextProvider>
            <TemplateContextProvider>
                <CoverLetterHistoryContext>
                    {children}
                </CoverLetterHistoryContext>
            </TemplateContextProvider>
        </UserContextProvider>
    );
}

export default MultiContextProvider;