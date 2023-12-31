import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useCategoryApi from '../utils/useCategoryApi';
import { Link } from 'react-router-dom';
import CategoryVideoCard from './CategoryVideoCard';

const SportsCategory = () => {
    const category = "Sports"
    useCategoryApi({ category });
    const dispatch = useDispatch();
    const sportsData = useSelector((store) => store.video.sportsVideoList);
    if (sportsData == null) return null;

    return (
        <div className='ml-5 md:ml-48 mt-20 flex flex-wrap w-[88%]'>
            {sportsData.map((sport, index) => <Link key={index} to={"/watch?v=" + sport.id.videoId}><CategoryVideoCard video={sport} /></Link>)}
        </div>
    )
}


export default SportsCategory