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
        <div className='ml-[2%] mt-[5%] flex flex-wrap w-[88%]'>
            {musicData.map((music, index) => <Link key={index} to={"/watch?v=" + music.id.videoId}><CategoryVideoCard video={music} /></Link>)}
        </div>
    )
}

export default MusicCategory