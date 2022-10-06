import React from 'react';
import { Link } from 'react-router-dom';



const DashboardHeader = () => {

  
    return (
      <div>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="#">
            <img
              className="main-nav-logo-image"
              src="./img/argentBankLogo.png"
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div className='out'>
            <Link className="main-nav-item nav-name" to="./profil">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        </nav>
      </div>
    );
};

export default DashboardHeader;