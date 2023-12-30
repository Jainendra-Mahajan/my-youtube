import { useDispatch } from "react-redux";
import { SEARCH_RECOMENDATION_1, SEARCH_RECOMENDATION_2 } from "./constants";
import { useEffect } from "react";
import { addLearningVideoList, addMusicVideoList, addSportsVideoList } from "./videoSlice";


const useCategoryApi = ({ category }) => {

    const dispatch = useDispatch();
    const getVideosByCategory = async () => {
        const data = await fetch(SEARCH_RECOMENDATION_1 + category + SEARCH_RECOMENDATION_2);
        const json = await data.json();

        if (category === "Music") {
            dispatch(addMusicVideoList(json.items));
        }

        else if (category === "Sports") {
            dispatch(addSportsVideoList(json.items));
        }

        else {
            dispatch(addLearningVideoList(json.items));
        }
    }

    useEffect(() => {
        getVideosByCategory()
    }, []);

}

export default useCategoryApi;