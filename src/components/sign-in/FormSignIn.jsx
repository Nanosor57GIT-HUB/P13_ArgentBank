import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../pages/Spinner";


const FormSignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error("You made a mistake in your credentials", {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message-error",
      });
    }
    if (user) {
      navigate("/dashboard");
    }
    if (user && isSuccess) {
      toast.success("Welcome to your account ...");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));

 if (isLoading) {
    return <Spinner />;
  }

  };

 

  return (
    <div>
      <div className="main bg-dark-sign">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon-content"></i>
          <h1>Sign In</h1>
          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button
              type="submit"
              className="sign-in-button"
              value="enterDashboard"
            >
              Sign In
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default FormSignIn;

// steve@rogers.com
// password456
