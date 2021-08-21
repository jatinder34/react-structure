import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
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
                  alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
                }}
                render={({ errors, status, touched }) => (
                  <Form>
                    <h3 className="fw-normal mb-3 pb-3">Log in</h3>

                    <div className="form-group mb-3">
                      <label htmlFor="email">Email</label>
                      <Field
                        name="email"
                        type="text"
                        autoComplete="off"
                        className={"form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                      />
                      <ErrorMessage name="email" component="div" className="invalid-feedback" />
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
                    </div>

                    <div className="pt-1 mb-4">
                      <button className="btn btn-primary btn-lg" type="submit">
                        Login
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

export default Login;
