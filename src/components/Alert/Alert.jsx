import "../Alert/alert.css";

const Alert = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};
export default Alert;
