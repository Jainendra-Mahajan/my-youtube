import React, { useEffect } from 'react'
import { SEARCH_RECOMENDATION_1, SEARCH_RECOMENDATION_2 } from '../utils/constants'
import { useSearchParams } from 'react-router-dom'
import SearchResultsCard from './SearchResultsCard';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchVideoList } from '../utils/videoSlice';

const SearchResults = () => {

    const searchData = useSelector((store) => store.video.searchVideoList);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    // console.log(searchParams.get("q"));

    const getSearchQueryData = async () => {
        const data = await fetch(SEARCH_RECOMENDATION_1 + searchParams.get("q") + SEARCH_RECOMENDATION_2);
        const json = await data.json();
        // console.log(json);
        dispatch(addSearchVideoList(json.items))
    }

    useEffect(() => {
        getSearchQueryData();
    }, [])

    return (
        <div>
            {/* {searchData.map((item) => {
                <SearchResultsCard video={item}/>
            })} */}


            <SearchResultsCard video={searchData[0]} />

        </div>
    )
}

export default SearchResults