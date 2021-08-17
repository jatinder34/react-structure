import React from "react";

const Login = () => {
  return (
    <section className="page-login vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-0 pt-3 pt-xl-0 mt-xl-n5">
              <form>
                <h3 className="fw-normal mb-3 pb-3">Log in</h3>

                <div className="form-outline mb-4">
                  <input placeholder="Email address" type="email" className="form-control form-control-lg" autocomplete="off" />
                </div>

                <div className="form-outline mb-4">
                  <input placeholder="Password" type="password" className="form-control form-control-lg" autocomplete="off" />
                </div>

                <div className="pt-1 mb-4">
                  <button className="btn btn-primary btn-lg" type="button">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block ">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/img3.jpg"
              alt="Login"
              className="w-100 vh-100 left-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
