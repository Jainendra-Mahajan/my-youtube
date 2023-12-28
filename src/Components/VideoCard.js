import React from 'react'

const VideoCard = ({ data }) => {
    const { snippet, statistics } = data;
    const { channelTitle, thumbnails, title } = snippet;

    return (
        <div className='mt-3 p-2 w-72 shadow-lg h-80'>
            <img src={thumbnails.medium.url} alt="thumbnail-image"
                className='w-full rounded-lg' />
            <ul>
                <li className='font-bold p-2 pl-0'>{title}</li>


                <li className='items-end'>{channelTitle}</li>
                <li>{statistics.likeCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard