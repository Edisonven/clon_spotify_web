import "../Button/button.css";

const Button = ({ children, className, onClick, disabled, style }) => {
  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
