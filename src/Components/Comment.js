import React from 'react'

const Comment = ({ data }) => {

    const { snippet } = data;
    return (
        <div className='ml-2 flex bg-gray-100 shadow-lg rounded-lg m-2'>
            <div>
                <img src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                    className="p-1 m-2 w-10 rounded-lg"
                    alt="user-logo" />
            </div>
            <div className='ml-5'>
                <p className='font-bold'>{snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
                <p>{snippet?.topLevelComment?.snippet?.textOriginal}</p>
            </div>


        </div>
    )
}

export default Comment