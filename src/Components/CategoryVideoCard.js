import React from 'react'

const CategoryVideoCard = ({ video }) => {
    // if (!video) return null;
    // console.log(video);
    const { title, channelTitle, thumbnails } = video.snippet

    return (
        <div className='mt-3 p-2 w-72 shadow-lg h-80'>
            <img src={thumbnails.high.url} alt="thumbnail-image"
                className='w-full rounded-lg h-40' />
            <ul>
                <li className='text-md font-bold p-2 pl-0'>{title}</li>
                <div className='flex items-center'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                        className='w-10' />
                    <li className='items-end text-xs'>{channelTitle}</li>
                </div>

            </ul>
        </div>
    )
}

export default CategoryVideoCard