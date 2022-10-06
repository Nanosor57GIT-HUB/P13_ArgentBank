import React from "react";
import UpdateProfil from './UpdateProfil';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { profile } from "../../features/auth/authSlice";

const DashboardBody = () => {

 const dispatch = useDispatch();

const { firstName, lastName } = useSelector((state) => state.auth);

 useEffect(() => {
   dispatch(profile());
 }, [dispatch, firstName, lastName]);

    return (
      <div>
        <main
          className="bg-dark-user"
        >
          <div className="header">
            <h1 className="welcome-name">
              Welcome back
              <br />
              <span>
                {firstName} {lastName} !
              </span>
            </h1>
          </div>

          <UpdateProfil />

          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      </div>
    );
};

export default DashboardBody;
