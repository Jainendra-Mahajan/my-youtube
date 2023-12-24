import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice"

const Header = () => {

    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col shadow-lg p-2">
            <div className="flex">
                <img src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
                    className="p-1 m-1 h-12 cursor-pointer"
                    alt="Hamburger Menu"
                    onClick={() => handleToggle()} />

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    className="p-1 m-2 w-24"
                    alt="Logo" />
            </div>

            <div>
                <input type="text" className="m-2 mr-0 w-3/4 p-2 border border-gray-500 rounded-l-full" />
                <button className="text-center bg-gray-200 m-2 ml-0 border border-gray-500 p-2 px-5 rounded-r-full">🔍</button>
            </div>

            <div className="col-span-1 flex justify-end">
                <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                    className="p-2 m-2 w-12"
                    alt="user-logo" />
            </div>
        </div>
    )
}

export default Header;