import { UserContextProvider } from "./UserContext";
import { TemplateContextProvider } from "./TemplateContext";
import { CoverLetterHistoryContextProvider } from "./CoverLetterHistoryContext";

function MultiContextProvider({ children }) {
    return (  
        <UserContextProvider>
            <TemplateContextProvider>
                <CoverLetterHistoryContextProvider>
                    {children}
                </CoverLetterHistoryContextProvider>
            </TemplateContextProvider>
        </UserContextProvider>
    );
}

export default MultiContextProvider;