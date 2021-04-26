import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { PostAComment } from '../../store/actions';

const validationScheme = yup.object().shape({
    content : yup.string().required("Comments can't be empty!").max(500,"Comments must contain up to 500 characters!").min(1,"Comments can't be empty!")
})

const CommentsComponent = ({movieId}) => {

    const dispatch = useDispatch()

    const addComment = (values, { resetForm }) => {
        resetForm()
        dispatch(PostAComment(movieId,values.content))
    }

    return (
        <div style={{marginTop: 50,marginLeft: 40}}>
            <h3> User comments: </h3>
            <Formik initialValues={{content: ''}} validationSchema={validationScheme} onSubmit={addComment}>
                <Form className="ui form">
                    <div className="field">
                        <label htmlFor="content"> Add a comment: </label>
                        <Field type="text" name="content" placeholder="Comment content.." style={{width: 520,height: 40}} />
                        <ErrorMessage name="content">
                            {msg => <div style={{ color: 'red' }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                    <button type="submit" className="ui primary small button"> Comment </button>
                </Form>
            </Formik>
        </div>
    );

}

export default CommentsComponent;