import React from 'react'
import CommentsList from './CommentsList';

const commentsData = [
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
            },
            {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                    {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                            {
                                name: "Akshay Saini",
                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [
                                            {
                                                name: "Akshay Saini",
                                                text: "Lorem ipsum dolor sit amet, consectetur adip",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        name: "Akshay Saini",
                                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
];

const CommentsContainer = () => {
    return (
        <div>
            <h1 className='font-bold p-4'>Comments: </h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer