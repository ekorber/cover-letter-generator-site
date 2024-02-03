function PrimaryButton({ onClick, className, children }) {
  return (
    <button onClick={() => {if (onClick) {onClick()}}} className={`h-16 rounded-lg bg-gradient-to-b from-blue-400 to-blue-500 text-slate-100 font-medium shadow-lg ${className}`}>{children}</button>
  );
}

export default PrimaryButton;