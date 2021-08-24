import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Commons/Header";
import Sidebar from "../Commons/Sidebar";

const DashboardLayout = ({ children }) => {
  let history = useHistory();
  useEffect(
    () => {
      if (!localStorage.getItem("_reactStructureToken")) {
        history.push("/");
      }
    },
    [history]
  );
  return (
    <>
      <div className="page-content">
        <Sidebar />
        <aside className="main-content">
          <Header />
          <div className="content">
            {children}
          </div>
        </aside>
      </div>
    </>
  );
};

export default DashboardLayout;
