import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { LogIn } from "../store/actions";
import { Link, useHistory } from "react-router-dom";

const validationSheme = yup.object().shape({
  email: yup.string().required("Username is required!"),
  pass: yup.string().required("Password is required!"),
});

const LogInComponent = () => {

  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') != null) {
      push('/movies')
    } // eslint-disable-next-line
  },[])

  const onFormSubmit = (values, { resetForm }) => {
    resetForm();
    localStorage.setItem("token", "");
    const credentials = { username: values.email, password: values.pass };
    dispatch(LogIn({ credentials, loginCallback: () => push("/movies") }));
  };

  return (
    <div
      className="ui very padded raised container segment"
      style={{ width: 650, height: 550, overflow: "hidden" }}>
      <h3 style={{ marginLeft: 200, float: "left", marginBottom: 60 }}>
        {" "}
        Log in form:{" "}
      </h3>
      <Link to="/register" className="ui inverted green button" style={{ float: "left", marginLeft: 100 }}>
        <i className="user icon"></i>
        Register user
      </Link>
      <br />
      <br />
      <hr />
      <Formik
        onSubmit={onFormSubmit}
        validationSchema={validationSheme}
        initialValues={{ email: "", pass: "" }}>
        <Form className="ui form" style={{ marginLeft: 140 }}>
          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="email"> Title: </label>
            <div style={{ float: "left" }}>
              <Field
                type="text"
                name="email"
                placeholder="Email address.."
                style={{ width: 260 }}
              />
            </div>

            <div style={{ float: "left", marginLeft: 15 }}>
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red" }}> {msg} </div>}
              </ErrorMessage>
            </div>
          </div>

          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="pass"> Title: </label>
            <div style={{ float: "left" }}>
              <Field
                type="password"
                name="pass"
                placeholder="Password.."
                style={{ width: 260 }}
              />
            </div>
            <div style={{ float: "left", marginLeft: 15 }}>
              <ErrorMessage name="pass">
                {(msg) => <div style={{ color: "red" }}> {msg} </div>}
              </ErrorMessage>
            </div>
          </div>

          <br />
          <button
            type="submit"
            className="ui inverted blue button"
            style={{ marginLeft: 80 }}
          >
            {" "}
            Log In{" "}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInComponent;
