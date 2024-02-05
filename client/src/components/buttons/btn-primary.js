import styled from 'styled-components'

const Button = styled.button`
  background: linear-gradient(to bottom, ${({fromColor}) => fromColor}, ${({toColor}) => toColor});
`;

function PrimaryButton({ onClick, type='button', fromColor='rgb(59 130 246)', toColor='rgb(29 78 216)', className, children }) {
  return (
    <Button onClick={() => {if (onClick) {onClick()}}}
            type={type}
            fromColor={fromColor} 
            toColor={toColor} 
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</Button>
  );
}

export default PrimaryButton;