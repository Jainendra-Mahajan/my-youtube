import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {
    return comments.map((comment) =>

        <div key={comment.id} >
            <Comment data={comment} />
            <div className='ml-10 border border-l-gray-200 pl-1'>

                {/* <CommentsList comments={comment.replies.comments} /> */}
            </div>
        </div>
    )
}

export default CommentsList