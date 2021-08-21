import React from "react";

const Loader = ({ children }) => {
  return (
    <>
      {children}
      <div className="loader">
        <div className="loader-content">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
