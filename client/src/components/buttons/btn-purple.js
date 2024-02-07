import { purple600, purple700, purple800, purple950 } from "../../colors";
import PrimaryButton from "./btn-primary";

function PurpleButton({ onClick, to, type='button', className, children}) {
  return (
    <PrimaryButton onClick={() => {if (onClick) {onClick()}}}
            to={to}
            type={type}
            fromColor={purple600}
            toColor={purple700}
            hoverFromColor={purple800}
            hoverToColor={purple950}
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</PrimaryButton>
  );
}

export default PurpleButton;