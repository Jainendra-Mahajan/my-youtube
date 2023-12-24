import { useDispatch } from 'react-redux';
import { addVideos } from './videoSlice';
import { YOUTUBE_VIDEO_API } from './constants';
import { useEffect } from 'react';

const useVideoFetchApi = () => {
    const dispatch = useDispatch();

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();

        // console.log(json);
        dispatch(addVideos(json.items))
    }

    useEffect(() => {
        getVideos();
    }, [])
}

export default useVideoFetchApi