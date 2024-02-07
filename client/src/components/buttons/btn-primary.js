import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(to bottom, ${({fromColor}) => fromColor}, ${({toColor}) => toColor});

  &:hover {
    background: linear-gradient(to bottom, ${({hoverFromColor}) => hoverFromColor}, ${({hoverToColor}) => hoverToColor});
  }
`;

function PrimaryButton({onClick, to='', type='button', fromColor, toColor, hoverFromColor, hoverToColor, className, children }) {
  return (
    <>
      {to ? 
          <Link to={to}>
            <Button onClick={() => {if (onClick) {onClick()}}}
              type={type}
              fromColor={fromColor} 
              toColor={toColor} 
              hoverFromColor={hoverFromColor}
              hoverToColor={hoverToColor}
              className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</Button>
          </Link>
        :
        <Button onClick={() => {if (onClick) {onClick()}}}
              type={type}
              fromColor={fromColor} 
              toColor={toColor} 
              hoverFromColor={hoverFromColor}
              hoverToColor={hoverToColor}
              className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</Button>
      }
    </>
  );
}

export default PrimaryButton;