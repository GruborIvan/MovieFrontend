import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { GetComments, PostAComment } from '../../store/actions';
import { commentPaginationCountSelector, commentsSelector } from '../../store/selectors/MovieSelector';

const validationScheme = yup.object().shape({
    content : yup.string().required("Comments can't be empty!").max(500,"Comments must contain up to 500 characters!").min(1,"Comments can't be empty!")
})

const CommentsComponent = ({movieId}) => {

    const dispatch = useDispatch()
    const comments = useSelector(commentsSelector);
    const paginationCount = useSelector(commentPaginationCountSelector);
    const [currentCommentPage,setCurrentCommentPage] = useState(1)

    const addComment = (values, { resetForm }) => {
        resetForm()
        dispatch(PostAComment(movieId,values.content))
    }

    const changeCommentPage = () => {
        dispatch(GetComments(movieId,currentCommentPage + 1));
        setCurrentCommentPage(currentCommentPage + 1);
    };

    useEffect(() => {
        dispatch(GetComments(movieId,1)); // eslint-disable-next-line
    },[]);

    return (
        <div style={{marginTop: 50,marginLeft: 40}}>
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

            <div style={{marginTop: 40,marginBottom:50}}>
                <h3> User comments: </h3>
                {comments.map(comment => {
                    return <div key={comment.timestamp} className="ui raised segment" style={{marginTop: 10,backgroundColor: 'azure'}}>
                        <p> User: <b> {comment.user.username} </b> </p>
                        <p> Content: {comment.content} </p>
                        <p> Timestamp: {comment.timestamp} </p>
                    </div>
                })}
                {paginationCount <= currentCommentPage
                 ? <div></div>
                 : <button className="ui primary button" style={{marginLeft: 150}} onClick={changeCommentPage}> Load more comments </button>
                }
                
            </div>
        </div>
    );
}

export default CommentsComponent;