import { createContext, useState } from "react";
import Toast from "../components/toast";

const ToastContext = createContext()

export const ToastContextProvider = ({ children }) => {

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastTheme, setToastTheme] = useState('');
  
    return (
        <ToastContext.Provider value={{ toastVisible, setToastVisible, toastMessage, setToastMessage, toastTheme, setToastTheme }}>
            {children}
            <Toast message={toastMessage} isVisible={toastVisible} onClose={() => setToastVisible(false)} theme={toastTheme} />
        </ToastContext.Provider>
    );
};

export default ToastContext;