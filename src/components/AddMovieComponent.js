import React, { useEffect } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, GetGenres } from '../store/actions/index'
import * as yup from 'yup';
import { genreSelector } from '../store/selectors/MovieSelector';
import OmdbAddComponent from './movieExtras/OmdbAddComponent';

const validationSheme = yup.object().shape({
    title: yup.string().min(5, 'Too short title').max(50, 'Too long title').required('Required'),
    descr: yup.string().min(5, 'Too short description').max(200, 'Too long description').required('Required'),
    img: yup.string().required('Movie image required'),
    genre: yup.string().required('Genre required')
});

const AddMovieComponent = () => {

    const dispatch = useDispatch();
    const genreChoices = useSelector(genreSelector);

    useEffect(() => {
        dispatch(GetGenres());  // eslint-disable-next-line
    },[]) 

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        let newMovie = { title: values.title, description: values.descr, imageurl: values.img, genre: [parseInt(values.genre)] };
        dispatch(addMovie(newMovie));
    }

    return (<div style={{overflow: 'hidden', backgroundColor: 'black', height: 1000}}>
        <div className="ui raised padded centered container segment" style={{ width: 500, left: 50, marginTop: 40, float: 'left' }}>
            <h3 style={{marginLeft: 170, color: 'blue'}}> Add new movie: </h3>

            <Formik
                initialValues={{ title: '', descr: '', img: '', genre: '' }}
                onSubmit={onFormSubmit}
                validationSchema={validationSheme}>
                <Form className="ui form" style={{marginLeft: 100,marginTop: 30}}>

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="title"> Title: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" name="title" placeholder="Movie title.." style={{width: 280}} />
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
                            <Field type="text" name="descr" placeholder="Movie description" style={{width: 280}} />
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
                            <Field type="text" name="img" placeholder="Movie photo url.." style={{width: 280}} />
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
                            <Field as="select" name="genre" placeholder="Movie genre.." style={{width: 280}} >
                                {genreChoices.map(genre => (<option key={genre.genre_name} value={genre.id}> {genre.genre_name} </option>) )}
                            </Field>
                        </div>

                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="genre">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <br/>
                    <button type="submit" className="ui inverted blue button"> Add Movie </button>
                    <button type="reset" className="ui red button"> Clear form </button>

                </Form>
            </Formik>
        </div>
        <div className="ui raised padded centered container segment" style={{ width: 500, left: 140, marginTop: 40,float: 'left'}}>
            <OmdbAddComponent/>
        </div>
    </div>
    );

};

export default AddMovieComponent;
