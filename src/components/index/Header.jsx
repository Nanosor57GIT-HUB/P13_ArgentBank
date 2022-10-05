import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {



    return (
      <div>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src="./img/argentBankLogo.png"
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            <Link className="main-nav-item-sign" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    );
};

export default Header;