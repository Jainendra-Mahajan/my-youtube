import React, { useEffect } from 'react'
import { SEARCH_RECOMENDATION_1, SEARCH_RECOMENDATION_2 } from '../utils/constants'
import { Link, useSearchParams } from 'react-router-dom'
import SearchResultsCard from './SearchResultsCard';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchVideoList, removeSearchVideos } from '../utils/videoSlice';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const searchData = useSelector((store) => store.video.searchVideoList);

    const getSearchQueryData = async () => {
        const data = await fetch(SEARCH_RECOMENDATION_1 + searchParams.get("q") + SEARCH_RECOMENDATION_2);
        const json = await data.json();
        dispatch(addSearchVideoList(json.items));
    }


    useEffect(() => {
        getSearchQueryData();
    }, [searchParams])

    if (!searchData) return null;
    return (
        <div className='mt-20'>
            {searchData.map((item, index) => <Link key={index} to={"/watch?v=" + item.id.videoId}><SearchResultsCard video={item} /></Link>)}
        </div>
    )
}

export default SearchResults