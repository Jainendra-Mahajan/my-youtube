import React from 'react'

const VideoCard = ({ data }) => {
    const { snippet, statistics } = data;
    const { channelTitle, thumbnails, title } = snippet;

    return (
        <div className='mt-3 p-2 w-96 shadow-lg h-[320px] md:h-[388px]'>
            <img src={thumbnails.medium.url} alt="thumbnail-image"
                className='w-full rounded-lg' />
            <ul>
                <li className='text-sm md:text-base font-bold p-2 pl-0'>{title}</li>
                <div className='flex items-center'>
                    <li className='text-sm md:text-sm'>{channelTitle} ⚫️ </li>
                    <li className='text-xs md:text-sm ml-2'>{statistics.likeCount} views</li>
                </div>
            </ul>
        </div>
    )
}

export default VideoCard