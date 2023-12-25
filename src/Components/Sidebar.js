import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return (
        !isMenuOpen ? null : <div className='w-48 shadow-lg text-center m-2'>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>

            <h1 className='font-bold pt-5'>You</h1>

            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>

            </ul>

            <h1 className='font-bold pt-5'>Your Subscriptions</h1>

            <ul>
                <li>Channel 1</li>
                <li>Channel 2</li>
                <li>Channel 3</li>
                <li>Channel 4</li>
                <li>Channel 5</li>

            </ul>
        </div>
    )
}

export default Sidebar