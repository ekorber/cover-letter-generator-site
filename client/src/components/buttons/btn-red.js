import { red500, red700, red900 } from "../../colors";
import PrimaryButton from "./btn-primary";

function RedButton({ onClick, to, type='button', className, children}) {
  return (
    <PrimaryButton onClick={() => {if (onClick) {onClick()}}}
            to={to}
            type={type}
            fromColor={red500} 
            toColor={red700} 
            hoverFromColor={red700}
            hoverToColor={red900}
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</PrimaryButton>
  );
}

export default RedButton;