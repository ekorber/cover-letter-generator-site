import { createContext, useState } from "react";
import Toast from "../components/toast";

const ToastContext = createContext()

export const ToastContextProvider = ({ children }) => {

    const [toastVisible, setToastVisible] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [toastTheme, setToastTheme] = useState('')
    const [timerAmount, setTimerAmount] = useState(3000)
  
    function showToast(message='', theme='', timeout=3000) {
        setToastMessage(message)
        setToastTheme(theme)
        setTimerAmount(timeout)
        setToastVisible(timeout)
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast message={toastMessage} isVisible={toastVisible} onClose={() => setToastVisible(false)} theme={toastTheme} timeout={timerAmount} />
        </ToastContext.Provider>
    );
};

export default ToastContext;