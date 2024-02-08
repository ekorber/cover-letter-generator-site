import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(to bottom, ${({fromcolor}) => fromcolor}, ${({tocolor}) => tocolor});

  &:hover {
    background: linear-gradient(to bottom, ${({hoverfromcolor}) => hoverfromcolor}, ${({hovertocolor}) => hovertocolor});
  }
`;

function PrimaryButton({onClick, to='', type='button', fromColor, toColor, hoverFromColor, hoverToColor, className, children }) {
  return (
    <>
      {to ? 
        <Button onClick={() => {if (onClick) {onClick()}}}
          type={type}
          fromcolor={fromColor} 
          tocolor={toColor} 
          hoverfromcolor={hoverFromColor}
          hovertocolor={hoverToColor}
          className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}><Link to={to}>{children}</Link></Button>
        :
        <Button onClick={() => {if (onClick) {onClick()}}}
              type={type}
              fromcolor={fromColor} 
              tocolor={toColor} 
              hoverfromcolor={hoverFromColor}
              hovertocolor={hoverToColor}
              className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</Button>
      }
    </>
  );
}

export default PrimaryButton;