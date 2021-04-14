import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addMovie } from '../store/actions/index'
import * as yup from 'yup';

const validationSheme = yup.object().shape({
    title: yup.string().min(5, 'Too short title').max(15, 'Too long title').required('Required'),
    descr: yup.string().min(5, 'Too short description').max(200, 'Too long description').required('Required'),
    img: yup.string().required('Movie image required'),
    genre: yup.string().required('Genre required')
});

const AddMovieComponent = () => {

    const dispatch = useDispatch();

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        let newMovie = { title: values.title, description: values.descr, imageurl: values.img, genre: values.genre };
        dispatch(addMovie(newMovie));
    }

    return (
        <div style={{ width: 500, marginLeft: 50, marginTop: 40 }}>
            <h4> Form for adding new movies: </h4>

            <Formik
                initialValues={{ title: '', descr: '', img: '', genre: '' }}
                onSubmit={onFormSubmit}
                validationSchema={validationSheme}>
                <Form className="ui form">

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="title"> Title: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" name="title" placeholder="Movie title.." />
                        </div>
                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="title">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="descr"> Description: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" name="descr" placeholder="Movie description" />
                        </div>
                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="descr">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="img"> Image url: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" name="img" placeholder="Movie photo url.." />
                        </div>
                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="img">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="genre"> Movie genre: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" list="lst" name="genre" placeholder="Movie genre.." />
                            <datalist id="lst">
                                <option> Drama </option>
                                <option> Comedy </option>
                                <option> Action </option>
                                <option> Horror </option>
                                <option> Thriller </option>
                                <option> Documentary </option>
                            </datalist>

                        </div>
                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="genre">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <button type="submit" className="ui primary button"> Add Movie </button>
                    <button type="reset" className="ui red button"> Clear form </button>

                </Form>
            </Formik>
        </div>
    );

};

export default AddMovieComponent;
