import { UserContextProvider } from "./UserContext";
import { TemplateContextProvider } from "./TemplateContext";
import { CoverLetterHistoryContextProvider } from "./CoverLetterHistoryContext";
import { ToastContextProvider } from "./ToastContext";

function MultiContextProvider({ children }) {
    return (  
        <UserContextProvider>
            <TemplateContextProvider>
                <CoverLetterHistoryContextProvider>
                    <ToastContextProvider>
                        {children}
                    </ToastContextProvider>
                </CoverLetterHistoryContextProvider>
            </TemplateContextProvider>
        </UserContextProvider>
    );
}

export default MultiContextProvider;