import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return (
        !isMenuOpen ? null : <div className='fixed w-[35%] md:w-[12%] shadow-lg m-2 text-left mt-20 bg-white z-50 h-full'>
            <ul>
                <Link to={"/"}><li className='flex items-center hover:bg-gray-300 rounded-lg'>
                    <img src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt="Home Icon"
                        className='w-16 m-1 -ml-2' />
                    Home</li></Link>

                <Link to={"/music"}><li className='flex items-center hover:bg-gray-300 rounded-lg'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4RR3BcmdG4t6JXiz5U-Pkctlb-B7B9to1g&usqp=CAU" alt="Home Icon"
                        className='w-8 m-1 mr-5 ml-2 mb-2 rounded-lg' />
                    Music</li></Link>

                <Link to={"/sports"}><li className='flex items-center hover:bg-gray-300 rounded-lg'>
                    <img src="https://static.thenounproject.com/png/355128-200.png" alt="Home Icon"
                        className='w-8 m-1 mr-5 ml-2 rounded-lg' />
                    Sports</li></Link>

                <Link to={"/learning"}><li className='flex items-center hover:bg-gray-300 rounded-lg'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/482/347/small/brain-human-with-infographic-line-style-icon-free-vector.jpg" alt="Home Icon"
                        className='bg-white w-10 m-1 ml-1 mr-3' />
                    Learning</li></Link>
            </ul>


        </div>
    )
}

export default Sidebar