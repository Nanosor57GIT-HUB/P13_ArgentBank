import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { firstName } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout()); 
    dispatch(reset());
    navigate("/"); 
  };

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

            
              <span style={{ fontWeight: "700", color: "#751a8b" }}>{firstName}</span>
        
          </Link>

          <button
            type="submit"
            className="main-nav-item "
            value={"exitDashboard"}
            onClick={onLogout}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
