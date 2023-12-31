import React, { useEffect } from 'react'
import useCategoryApi from '../utils/useCategoryApi'
import { useDispatch, useSelector } from 'react-redux';
import CategoryVideoCard from './CategoryVideoCard';
import { Link } from 'react-router-dom';

const MusicCategory = () => {

    const category = "Music"
    useCategoryApi({ category });
    const dispatch = useDispatch();
    const musicData = useSelector((store) => store.video.musicVideoList);
    if (musicData == null) return null;

    return (
        <div className='ml-5 md:ml-48 mt-[15%] md:mt-20 flex flex-wrap w-[88%]'>
            {musicData.map((music, index) => <Link key={index} to={"/watch?v=" + music.id.videoId}><CategoryVideoCard video={music} /></Link>)}
        </div>
    )
}

export default MusicCategory