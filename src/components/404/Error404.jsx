import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <div className="noPage">
        <p className="erreur404">404</p>
        <img
          className="logo-image-404"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <p className="paragraphe404">
          Whoops! The page you requested does not exist.
        </p>
        <NavLink className="nav404" to={"/"}>
          Return to the home page
        </NavLink>
      </div>
    </div>
  );
};

export default Error404;
