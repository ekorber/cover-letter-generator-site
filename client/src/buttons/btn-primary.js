function PrimaryButton({ onClick, className, children }) {
  return (
    <button onClick={() => {if (onClick) {onClick()}}} className={`h-16 rounded-lg ${className}`}>{children}</button>
  );
}

export default PrimaryButton;