import React from 'react'

const LiveMessage = ({ name, message }) => {
    return (
        <div className='flex items-center p-2 '>
            <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                className="w-5 "
                alt="user-logo" />
            <span className='px-2 font-bold'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default LiveMessage