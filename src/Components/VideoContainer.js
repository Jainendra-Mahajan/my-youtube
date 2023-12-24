import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useVideoFetchApi from '../utils/useVideoFetchApi'
import VideoCard from './VideoCard';

const VideoContainer = () => {
    useVideoFetchApi();
    const videoList = useSelector(store => store.video.videoList)

    if (!videoList) return null;

    return (
        <div className='flex flex-wrap'>
            {videoList.map((video) => <VideoCard key={video.id} data={video} />)}

        </div>
    )
}

export default VideoContainer