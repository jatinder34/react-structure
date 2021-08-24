import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const AuthLayout = ({ children }) => {
  let history = useHistory();
  useEffect(
    () => {
      if (localStorage.getItem("_reactStructureToken")) {
        history.push("/dashboard");
      }
    },
    [history]
  );
  return <>{children}</>;
};

export default AuthLayout;
