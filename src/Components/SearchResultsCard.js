import React from 'react'

const SearchResultsCard = ({ video }) => {

    const { title, channelTitle, thumbnails, description, publishedAt } = video.snippet
    return (
        <div className='md:ml-48 flex shadow-lg'>
            <div className='m-1 p-1 md:m-2 md:p-2 rounded-lg'>
                <img src={thumbnails.high.url} alt="Search Thumbnail" className='w-auto md:w-80 h-auto md:h-52 rounded-lg' />
            </div>
            <div className='ml-0 m-2 p-1 md:p-2 md:m-2 '>
                <h1 className='text-xs md:text-xl font-bold'>
                    {title}
                </h1>
                <div className='flex items-center mt-2 md:mt-5 text-xs'>

                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                        className='w-6 md:w-8'
                        alt="Channel Icon" />
                    <p className='text-xs md:text-sm'>{channelTitle}</p>

                </div>
                <p className='m-2 p-2 -ml-2 text-xs md:inline-block hidden'>{description}</p>
                <p className='mb-0 m-1 md:m-2 -ml-2 p-2 text-xs font-bold'>Release Date - {publishedAt.slice(0, 10)}</p>
            </div>
        </div>
    )
}

export default SearchResultsCard