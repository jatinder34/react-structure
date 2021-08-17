import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AppRoutes from "./Components/AppRoutes";
import AuthLayout from "./Components/Layouts/AuthLayout";
import Login from "./Pages/Auth/Login";
import "./assets/scss/style.scss";
import Dashboard from "./Pages/Dashboard";
import DashboardLayout from "./Components/Layouts/DashboardLayout";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <AppRoutes exact path="/" Layout={AuthLayout} Component={Login} />
          <AppRoutes exact path="/dashboard" Layout={DashboardLayout} Component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
