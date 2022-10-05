import React from "react";
import { Link } from "react-router-dom";


const DashboardHeader = () => {


  return (
    <div>
      <nav className="main-nav">
        <div className=" logo-dashBoard">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </div>

        <div className="out">
          <Link className="main-nav-item nav-name" to="./profil">
            <i className="fa fa-user-circle"></i>

            
              <span style={{ fontWeight: "700", color: "#751a8b" }}>Tony</span>
        
          </Link>

<Link to="/">
          <button
            type="submit"
            className="main-nav-item "
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
