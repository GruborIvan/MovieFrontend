import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
// import * as yup from "yup";

const RegisterComponent = () => {
  return (
    <div
      className="ui very padded raised container segment"
      style={{ width: 650, height: 550, overflow: "hidden" }}
    >
      <h3 style={{ marginLeft: 200, float: "left", marginBottom: 60 }}>
        {" "}
        Register form:{" "}
      </h3>
      <br />
      <br />
      <hr />

      <Formik initialValues={{ ime: "", email: "", pass: "" }}>
        <Form className="ui form" style={{ marginLeft: 140 }}>
          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="ime"> Ime i prezime: </label>
            <div style={{ float: "left" }}>
              <Field
                type="text"
                name="ime"
                placeholder="Ime i prezime.."
                style={{ width: 260 }}
              />
            </div>

            <div style={{ float: "left", marginLeft: 15 }}>
              <ErrorMessage name="ime">
                {(msg) => <div style={{ color: "red" }}> {msg} </div>}
              </ErrorMessage>
            </div>
          </div>

          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="email"> E-mail address: </label>
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
            className="ui primary button"
            style={{ marginLeft: 10 }}
          >
            {" "}
            Register user{" "}
          </button>
          <Link to="" className="ui red button" style={{marginLeft: 10}}>
            {" "}
            Cancel{" "}
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterComponent;
