import PrimaryButton from "./btn-primary";

function BlueButton({ onClick, type='button', className, children}) {
  return (
    <PrimaryButton onClick={() => {if (onClick) {onClick()}}}
            type={type}
            className={`h-16 rounded-lg text-slate-100 font-medium shadow-lg ${className}`}>{children}</PrimaryButton>
  );
}

export default BlueButton;