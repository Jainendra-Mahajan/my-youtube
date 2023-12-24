import React from 'react'

const VideoCard = ({ data }) => {
    const { snippet, statistics } = data;
    const { channelTitle, thumbnails, title } = snippet;

    return (
        <div className='p-2 m-2 w-56 shadow-lg'>
            <img src={thumbnails.medium.url} alt="thumbnail-image"
                className='rounded-lg' />
            <ul>
                <li className='font-bold p-2 pl-0'>{title}</li>


                <li>{channelTitle}</li>
                <li>{statistics.likeCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard