import React from 'react';
import { Link } from 'react-router-dom';

const FormSignIn = () => {

  
    return (
      <div>
        <div className="main bg-dark-sign">  
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon-content"></i>
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <Link to="/dashboard" className="link-sign-in"> 
                <button className="sign-in-button">Sign In</button>
              </Link> 
            </form>
          </section>
          </div>
      </div>
      
    );
};

export default FormSignIn;