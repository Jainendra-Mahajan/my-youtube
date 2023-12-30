import React from 'react'
import useCategoryApi from '../utils/useCategoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoryVideoCard from './CategoryVideoCard';

const LearningCategory = () => {
    const category = "Learning"
    useCategoryApi({ category });
    const dispatch = useDispatch();
    const learningData = useSelector((store) => store.video.learningVideoList);
    if (learningData == null) return null;

    return (
        <div className='ml-[2%] mt-[5%] flex flex-wrap w-[88%]'>
            {learningData.map((item, index) => <Link key={index} to={"/watch?v=" + item.id.videoId}><CategoryVideoCard video={item} /></Link>)}
        </div>
    )
}

export default LearningCategory