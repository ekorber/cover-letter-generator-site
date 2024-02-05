import React, { useState } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const TooltipMessage = styled.div`
    background-color: black;
    color: white;
    padding: 8px;
    border-radius: 4px;
    text-align: right;

    //Position the tooltip
    position: absolute;
    bottom: 105%;
    right: 105%;
    z-index: 1;             /* Ensure tooltip is on top */
    white-space: nowrap;    /* Prevents the text from wrapping */
`;

function Tooltip({ children, message }) {

  const [show, setShow] = useState(false);

  return (
    <TooltipContainer 
        onMouseEnter={() => {console.log('Enter'); setShow(true)}}
        onMouseLeave={() => {console.log('Exit'); setShow(false)}}
        style={{ position: 'relative', display: 'inline-block' }}
    >
        {children}
        {show && <TooltipMessage>{message}</TooltipMessage>}
    </TooltipContainer>
  );
};

export default Tooltip;
