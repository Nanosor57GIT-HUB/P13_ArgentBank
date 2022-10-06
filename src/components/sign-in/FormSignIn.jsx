import React, { useState } from "react";


const FormSignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault()

const response = await fetch("http://localhost:3001/api/v1/user/login", {
  method: 'POST',
  headers: {
    'content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),

});

const data = await response.json()
console.log(data);
if (data.status === 200) {
localStorage.setItem('token', data.user)
    alert('login successFull')
  window.location.href = 'user'
 } else {
  alert('Please check your userName or password') 
 }

  }

  return (
    <div>
      <div className="main bg-dark-sign">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon-content"></i>
          <h1>Sign In</h1>
          <form onSubmit={loginUser}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                autoComplete="off"
                type="email"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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


