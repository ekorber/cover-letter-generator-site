import { green500, green700, green900 } from "../../colors";
import PrimaryButton from "./btn-primary";

function GreenButton({ onClick, to, type='button', className, children}) {
  return (
    <PrimaryButton onClick={() => {if (onClick) {onClick()}}}
            to={to}
            type={type}
            fromColor={green500} 
            toColor={green700} 
            hoverFromColor={green700}
            hoverToColor={green900}
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</PrimaryButton>
  );
}

export default GreenButton;