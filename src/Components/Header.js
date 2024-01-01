import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cachedResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {

    const [searchValue, setSearchValue] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache = useSelector(store => store.search);

    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleMenu());
    }

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchValue);
        const json = await data.json();
        setSuggestion(json[1]);

        dispatch(cachedResults({
            [searchValue]: json[1]
        }
        ));
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchValue]) {
                setSuggestion(searchCache[searchValue])
            }
            else {
                getSearchSuggestion()
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }

    }, [searchValue]);
    return (

        <>
            <div className="bg-white grid grid-flow-col p-2 fixed w-full z-50">
                <div className="flex">
                    <img src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
                        className="p-1 m-1 h-12 cursor-pointer w-8 md:w-10"
                        alt="Hamburger Menu"
                        onClick={() => handleToggle()} />

                    <Link to={"/"}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        className="p-1 m-2 w-20 md:w-24"
                        alt="Logo" /></Link>
                </div>

                <form
                    onSubmit={(e) => e.preventDefault()}>


                    <input type="text"
                        className="mb-1 mr-0 w-[75%] md:w-3/4 p-1 md:p-2 border border-gray-500 rounded-l-full "
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)} />
                    <Link to={"results?q=" + searchValue}><button className="text-center bg-gray-200 m-2 ml-0 mb-0 border border-gray-500 p-1 md:p-2 md:px-5 rounded-r-full w-15">🔍</button></Link >

                    {searchValue && showSuggestion && <div className="fixed bg-white w-[27rem] mx-3 p-3 pt-0 -mt-1 rounded-lg border border-gray-200">
                        <ul>
                            {suggestion.map((item, index) => <Link key={index} to={"/results?q=" + item}><li key={index} className="py-2 hover:bg-gray-200 rounded-lg "
                            >🔍 {item}</li></Link>)}

                        </ul>
                    </div>}

                </form>


                <div className="col-span-1 flex justify-end">
                    <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                        className="hidden md:inline-block p-2 m-2 w-12"
                        alt="user-logo" />
                </div>


            </div >



        </>
    )
}

export default Header;