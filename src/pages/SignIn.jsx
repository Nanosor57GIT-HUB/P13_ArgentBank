import React from 'react';
import Header from "../components/index/Header";
import FormSignIn from "../components/sign-in/FormSignIn";
import Footer from "../components/index/Footer";

const SignIn = () => {
    return (
      <div>
        <Header />
        <FormSignIn />
        <Footer />        
      </div>
    );
};

export default SignIn;