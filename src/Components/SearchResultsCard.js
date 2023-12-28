import React from 'react'

const SearchResultsCard = ({ video }) => {

    // console.log(video);

    const { title, channelTitle, thumbnails, description, publishedAt } = video.snippet
    return (
        <div className='flex shadow-lg'>
            <div className='m-2 p-2 rounded-lg'>
                <img src={thumbnails.high.url} alt="Search Thumbnail" className='w-80 h-52 rounded-lg' />
            </div>
            <div className='p-2 m-2'>
                <h1 className='text-xl font-bold'>
                    {title}
                </h1>
                <div className='flex items-center mt-5 text-xs'>

                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                        className='w-8'
                        alt="Channel Icon" />
                    <p>{channelTitle}</p>

                </div>
                <p className='m-2 ml-0 p-2 text-xs'>{description}</p>
                <p className='m-2 ml-0 p-2 text-xs font-bold'>Release Date - {publishedAt}</p>
            </div>
        </div>
    )
}

export default SearchResultsCard