import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const validationSheme = yup.object().shape({
    email: yup.string().required('Username is required!'),
    pass: yup.string().required('Password is required!'),
});

const LogInComponent = () => {

    const onFormSubmit = (values,{resetForm}) => {
        resetForm();
        //console.log(values);
    };

    return (
        <div className="ui very padded container segment" style={{ width: 650, height: 550 }}>
            <h3> Log in form: </h3> 
            <hr/><br/>
            <Formik
            onSubmit={onFormSubmit}
            validationSchema={validationSheme}
            initialValues={{email: '', pass: ''}}>
                <Form className="ui form">

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="email"> Title: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" name="email" placeholder="Email address.." />
                        </div>

                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="email">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>


                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="pass"> Title: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="password" name="pass" placeholder="Password.." />
                        </div>
                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="pass">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <button type="submit" className="ui primary button"> Log In </button>

                </Form>
            </Formik>
        </div>
    );
}

export default LogInComponent;