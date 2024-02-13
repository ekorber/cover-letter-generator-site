import React, { useEffect } from 'react';
import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 32px 42px;
  color: #fff;
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 0.15), 0 5px 10px 5px rgb(0 0 0 / 0.15);
  border-radius: 5px;
  z-index: 1000;
`;

const CloseButton = styled.button`
  margin-left: 15px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const Toast = ({ message, isVisible, onClose, showCloseButton=false, theme, timeout }) => {

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, timeout)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  //Set background color
  let background = ''
  
  if (theme === 'success') {
    background = 'bg-gradient-to-b from-green-500 to-green-700 border-green-700'
  } else if (theme === 'danger') {
    background = 'bg-gradient-to-b from-red-500 to-red-700 border-red-700'
  } else {
    background = 'bg-gradient-to-b from-slate-800 to-black border-black'
  }

  // Render based on visibility
  if (isVisible) {
    return (
        <ToastContainer className={background}>
          <p>{message}</p>
          {showCloseButton && <CloseButton onClick={onClose}>X</CloseButton>}
        </ToastContainer>
      )
  } else {
    return null
  }

};

export default Toast;
