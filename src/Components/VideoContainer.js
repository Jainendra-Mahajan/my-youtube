import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useVideoFetchApi from '../utils/useVideoFetchApi'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    useVideoFetchApi();
    const videoList = useSelector(store => store.video.videoList)

    if (!videoList) return null;

    return (
        <div className='flex md:flex flex-wrap mt-16'>
            {videoList.map((video) => <Link to={"/watch?v=" + video.id} key={video.id} ><VideoCard data={video} /></Link>)}

        </div>
    )
}

export default VideoContainer