import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(to bottom, ${({fromColor}) => fromColor}, ${({toColor}) => toColor});

  &:hover {
    background: linear-gradient(to bottom, ${({hoverFromColor}) => hoverFromColor}, ${({hoverToColor}) => hoverToColor});
  }
`;

function PrimaryButton({ onClick,
  type='button',
  fromColor='rgb(59 130 246)',
  toColor='rgb(29 78 216)',
  hoverFromColor='rgb(29 78 216)',
  hoverToColor='rgb(30 58 138)',
  className,
  children }) {
  return (
    <Button onClick={() => {if (onClick) {onClick()}}}
            type={type}
            fromColor={fromColor} 
            toColor={toColor} 
            hoverFromColor={hoverFromColor}
            hoverToColor={hoverToColor}
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</Button>
  );
}

export default PrimaryButton;