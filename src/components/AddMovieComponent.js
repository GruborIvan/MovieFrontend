import React, { useEffect } from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, GetGenres } from '../store/actions/index'
import * as yup from 'yup';
import { genreSelector } from '../store/selectors/MovieSelector';
import OmdbAddComponent from './movieExtras/OmdbAddComponent';

const validationSheme = yup.object().shape({
    title: yup.string().min(5, 'Too short title').max(50, 'Too long title').required('Required'),
    description: yup.string().min(5, 'Too short description').max(200, 'Too long description').required('Required'),
    genre: yup.string().required('Genre required').notOneOf(['------'],'Select genre'),
});

const AddMovieComponent = () => {

    const dispatch = useDispatch();
    const genreChoices = useSelector(genreSelector);
    let selectedPic = null

    useEffect(() => {
        dispatch(GetGenres());  // eslint-disable-next-line
    },[]) 

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        const formData = new FormData()
        Object.keys(values).forEach(key => {
            formData.append(key,values[key])
        })
        formData.append('image',selectedPic)
        dispatch(addMovie(formData));
    }

    return (<div style={{overflow: 'hidden', backgroundColor: 'black', height: 1000}}>
        <div className="ui raised padded centered container segment" style={{ width: 500, left: 50, marginTop: 40, float: 'left' }}>
            <h3 style={{marginLeft: 170, color: 'blue'}}> Add new movie: </h3>

            <Formik
                initialValues={{ title: '', description: '', genre: '' }}
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
                        <label htmlFor="description"> Description: </label>
                        <div style={{ float: 'left' }}>
                            <Field type="text" name="description" placeholder="Movie description" style={{width: 280}} />
                        </div>
                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="description">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{ overflow: 'hidden' }}>
                        <label htmlFor="genre"> Movie genre: </label>
                        
                        <div style={{ float: 'left' }}>
                            <Field as="select" name="genre" placeholder="Movie genre.." style={{width: 280}} >
                                <option key={'-1'}> ------ </option>
                                {genreChoices.map(genre => (<option key={genre.genre_name} value={genre.id}> {genre.genre_name} </option>) )}
                            </Field>
                        </div>

                        <div style={{ float: 'left', marginLeft: 15 }}>
                            <ErrorMessage name="genre">
                                {msg => <div style={{ color: 'red' }}> {msg} </div>}
                            </ErrorMessage>
                        </div>
                    </div>

                    <div className="field" style={{overflow: 'hidden', width: 220}}>
                        <label htmlFor="image"> Movie image: </label>
                        <div style={{float: 'left'}}>
                            <input name="image" className="ui button" type="file" accept="image/*" onChange={(e) => selectedPic = e.target.files[0]} />
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
