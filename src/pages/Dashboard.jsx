import React from 'react';
import DashboardBody from "../components/userDashboard/DashboardBody";
import Footer from "../components/index/Footer";
import DashboardHeader from '../components/userDashboard/DashboardHeader';

const Dashboard = () => {

    return (
      <div>
        <DashboardHeader/>
        <DashboardBody /> 
        <Footer />
      </div>
    );
};

export default Dashboard;