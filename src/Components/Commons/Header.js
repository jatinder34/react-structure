import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem("_reactStructureToken");
    history.push("/");
  };
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <div className="logout">
          <a onClick={handleLogout} href="/" className="text-decoration-none">
            <i className="fa fa-sign-out"/> Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
