import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { fetchMovieFromOmdbAPI } from '../../store/actions';

const validationScheme = yup.object().shape({
    title: yup.string().min(5, 'Too short title').max(50, 'Too long title').required('Required'),
    releaseYr : yup.number().min(1940,'Movie year too old!').max(2022,'This movie is not yet released!').required('Required!')
})

const OmdbAddComponent = () => {

    const dispatch = useDispatch()

    const onFormSubmit = (values, { resetForm }) => {
        resetForm();
        const params = { t: values.title, y: values.releaseYr }
        dispatch(fetchMovieFromOmdbAPI(params))
    }

    return (<div>
        <h3 style={{marginLeft: 120, color: 'blue'}}> Add new movie from OMDB API: </h3>

        <Formik initialValues={{title: '', releaseYr: 0}}
                validationSchema={validationScheme}
                onSubmit={onFormSubmit}>
            <Form className="ui form" style={{marginLeft: 100,marginTop: 30}}>

                <div className="field" style={{ overflow: 'hidden' }}>
                    <label htmlFor="title"> Title: </label>
                    <div style={{ float: 'left' }}>
                        <Field type="text" name="title" placeholder="Movie title.." style={{width: 280}}/>
                    </div>
                    <div style={{ float: 'left', marginLeft: 15 }}>
                        <ErrorMessage name="title">
                            {msg => <div style={{ color: 'red' }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

                <div className="field" style={{marginLeft: 0,marginTop: 30, marginBottom: 80}}>
                    <label htmlFor="releaseYr"> Year of release: </label>
                    <div style={{float: 'left'}}>
                        <Field type="number" name="releaseYr" placeholder="Year of release.." style={{width: 280}}/> 
                    </div>
                    <div style={{ float: 'left', marginLeft: 15 }}>
                        <ErrorMessage name="releaseYr">
                            {msg => <div style={{ color: 'red' }}> {msg} </div>}
                        </ErrorMessage>
                    </div>
                </div>

                <button className="ui inverted blue button" type="submit" style={{marginLeft: 50}}> Search OMDB API </button>

            </Form>
        </Formik>

    </div>)
}

export default OmdbAddComponent;