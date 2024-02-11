import React, { useEffect } from 'react';
import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 30px 40px;
  color: #fff;
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

const Toast = ({ message, isVisible, onClose, showCloseButton=false, theme='' }) => {

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000) // Toast disappears after 3 seconds
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  //Set background color
  let backgroundColor = ''
  
  if (theme === 'success') {
    backgroundColor = 'bg-green-600'
  } else {
    backgroundColor = 'bg-black'
  }

  // Render based on visibility
  if (isVisible) {
    return (
        <ToastContainer className={backgroundColor}>
          {message}
          {showCloseButton && <CloseButton onClick={onClose}>X</CloseButton>}
        </ToastContainer>
      )
  } else {
    return null
  }

};

export default Toast;
