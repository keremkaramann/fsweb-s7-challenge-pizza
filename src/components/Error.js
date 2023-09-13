import React from "react";
import { NavLink } from "react-router-dom";
import "./css/error.css";
const Error = () => {
  return (
    <div className="matrix-error-container">
      <div className="matrix-error-message">
        <h1>Error 404</h1>
        <p>Agent Smith says: The page you are looking for does not exist.</p>
        <NavLink className="nav-error" to="/" data-glitch="Explore">
          Take the Blue Pill and go back to the Matrix
        </NavLink>
      </div>
    </div>
  );
};
export default Error;
