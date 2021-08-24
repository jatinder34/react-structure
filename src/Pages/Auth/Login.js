import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { doLogin } from "../../redux/auth/action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = ({ doLogin, auth }) => {
  let history = useHistory();
  
  /**
   * Handle login for submit
   * @param {{email: string, password:string}} params
   */
  const handleLoginSubmit = async params => {
    await doLogin(params);
  };
  useEffect(() => {
    if(auth.isLogin){
      localStorage.setItem('_reactStructureToken',auth.data.token)
      history.push('/dashboard')
    }
  }, [auth, history])
  return (
    <section className="page-login vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-0 pt-3 pt-xl-0 mt-xl-n5">
              <Formik
                initialValues={{
                  email: "",
                  password: ""
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .email("Email is invalid")
                    .required("Email is required"),
                  password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Password is required")
                })}
                onSubmit={fields => {
                  handleLoginSubmit(fields);
                }}
                render={({ errors, status, touched }) => (
                  <Form>
                    <h3 className="fw-normal mb-3 pb-3">Log in</h3>
                    {auth.error ? (
                      <div className="alert alert-danger text-capitalize" role="alert">
                        {auth.error}
                      </div>
                    ) : null}

                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        type="text"
                        autoComplete="off"
                        className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                      />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      <small className="text-muted">Use this email : eve.holt@reqres.in</small>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        autoComplete="off"
                        className={"form-control" + (errors.password && touched.password ? " is-invalid" : "")}
                      />
                      <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      <small className="text-muted">Use this password : cityslicka</small>
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-primary btn-lg" type="submit" disabled={auth.loading ? true : false}>
                        {auth.loading ? <i className="fa fa-spinner fa-spin" /> : ""} Login
                      </button>
                    </div>
                  </Form>
                )}
              />
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

const mapStateToProps = ({ auth }) => ({
  auth
});
const mapDispatcherToProps = {
  doLogin
};
export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(Login);
