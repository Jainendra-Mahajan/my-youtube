import React, { useEffect } from 'react'
import CommentsList from './CommentsList';
import { COMMENTS_API_1, COMMENTS_API_2 } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentsForVideo } from '../utils/videoSlice';

const CommentsContainer = ({ id }) => {

    const dispatch = useDispatch();
    const commentsList = useSelector(store => store.video.commentList);

    const getCommentsById = async () => {
        const data = await fetch(COMMENTS_API_1 + id + COMMENTS_API_2);
        const json = await data.json();

        if (json.items)
            dispatch(addCommentsForVideo(json.items))

        else dispatch(addCommentsForVideo(json.error));
    }
    useEffect(() => {
        getCommentsById();
    }, []);


    return (

        commentsList?.code == 403 ? <h1 className='ml-10 font-bold'>Comments Disabled </h1> : <div className='w-[900px] ml-6'>
            <h1 className='font-bold p-4'>Comments: </h1>
            <CommentsList comments={commentsList} />
        </div>

    )
}

export default CommentsContainer