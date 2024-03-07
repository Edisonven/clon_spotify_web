import React from "react";
import { NavLink } from "react-router-dom";

const SpotifyHome = ({ to, className, children, style }) => {
  const defaultStyle = {
    width: "max-content",
  };
  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <NavLink to={to} className={className} style={mergedStyle}>
      <i className={className}></i>
      <p className={className}></p>
      {children}
    </NavLink>
  );
};
export default SpotifyHome;
