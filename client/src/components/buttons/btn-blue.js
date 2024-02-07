import { blue500, blue700, blue900 } from "../../colors";
import PrimaryButton from "./btn-primary";

function BlueButton({ onClick, to, type='button', className, children}) {
  return (
    <PrimaryButton onClick={() => {if (onClick) {onClick()}}}
            to={to}
            type={type}
            fromColor={blue500}
            toColor={blue700}
            hoverFromColor={blue700}
            hoverToColor={blue900}
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</PrimaryButton>
  );
}

export default BlueButton;