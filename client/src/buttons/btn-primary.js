function PrimaryButton({ className, children }) {
  return (
    <button className={`h-16 rounded-lg w-full text-white ${className}`}>{children}</button>
  );
}

export default PrimaryButton;