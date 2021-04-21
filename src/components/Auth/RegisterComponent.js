import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../store/actions";

const validationSheme = yup.object().shape({
  ime: yup.string().max(40).required('Name required!'),
  email: yup.string().required("Username is required!"),
  pass: yup.string().required("Password is required!").min(8,'Password too short!'),
  pass2: yup.string().required("Password is required!").oneOf([yup.ref('pass'),null],'Passwords dont match!').min(8,'Password too short!'),
});

const RegisterComponent = () => {

  const dispatch = useDispatch();
  const { push } = useHistory();

  const onRegisterFormSubmit = (values, { resetForm }) => {
    resetForm();
    const user = { username: values.email, password: values.pass, password2: values.pass2 }
    dispatch(RegisterUser({user, registerCallback: () => push('/') }))
  }

  return (
    <div className="ui very padded raised container segment" style={{ width: 650, height: 550, overflow: "hidden" }}>
      <h3 style={{ marginLeft: 200, float: "left", marginBottom: 60 }}>
        {" "}
        Register form:{" "}
      </h3>
      <br />
      <br />
      <hr />

      <Formik 
        initialValues={{ ime: "", email: "", pass: "", pass2: ""}}
        onSubmit={onRegisterFormSubmit}
        validationSchema={validationSheme}>
        <Form className="ui form" style={{ marginLeft: 140 }}>
          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="ime"> Ime i prezime: </label>
            <div style={{ float: "left" }}>
              <Field type="text" name="ime" placeholder="Ime i prezime.." style={{ width: 260 }}/>
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
                style={{ width: 260 }} />
            </div>

            <div style={{ float: "left", marginLeft: 15 }}>
              <ErrorMessage name="email">
                {(msg) => <div style={{ color: "red" }}> {msg} </div>}
              </ErrorMessage>
            </div>
          </div>

          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="pass"> Password: </label>
            <div style={{ float: "left" }}>
              <Field
                type="password"
                name="pass"
                placeholder="Password.."
                style={{ width: 260 }}/>
            </div>
            <div style={{ float: "left", marginLeft: 15 }}>
              <ErrorMessage name="pass">
                {(msg) => <div style={{ color: "red" }}> {msg} </div>}
              </ErrorMessage>
            </div>
          </div>

          <div className="field" style={{ overflow: "hidden" }}>
            <label htmlFor="pass2"> Re-enter password: </label>
            <div style={{ float: "left" }}>
              <Field
                type="password"
                name="pass2"
                placeholder="Re-enter Password.."
                style={{ width: 260 }}/>
            </div>
            <div style={{ float: "left", marginLeft: 15 }}>
              <ErrorMessage name="pass2">
                {(msg) => <div style={{ color: "red" }}> {msg} </div>}
              </ErrorMessage>
            </div>
          </div>

          <br />
          <button
            type="submit"
            className="ui primary button"
            style={{ marginLeft: 10 }}>
            {" "}
            Register user{" "}
          </button>
          <Link to="" className="ui red button" style={{marginLeft: 10}}>
            {" "} Cancel {" "}
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterComponent;
