import { NavLink } from "react-router-dom";

const SpotifyHome = ({ to, className, children }) => {
  return (
    <NavLink to={to} className={className}>
      <i className={className}></i>
      <p className={className}></p>
      {children}
    </NavLink>
  );
};
export default SpotifyHome;
