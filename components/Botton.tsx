interface ButtonProps {
  lable: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}

const Botton: React.FC<ButtonProps> = ({
  lable,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2 
      ${fullWidth ? "bg-white" : "bg-sky-500"} 
      ${secondary ? "text-black" : "text-white"} 
      ${secondary ? "border-black" : "border-sky-500"} 
      ${large ? "text-xl" : "text-base"} 
      ${large ? "px-5 py-3" : "px-4 py-2"} 
      ${outline ? "bg-transparent" : ""} 
      ${outline ? "border-white" : ""} 
      ${outline ? "text-white" : ""} 

      `}
    >
      {lable}
    </button>
  );
};

export default Botton;
