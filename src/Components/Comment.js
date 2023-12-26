import React from 'react'

const Comment = ({ data }) => {

    const { name, text, replies } = data;
    return (
        <div className='ml-2 flex bg-gray-100 shadow-lg rounded-lg m-2'>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
                    className="p-1 m-2 w-10"
                    alt="user-logo" />
            </div>
            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>


        </div>
    )
}

export default Comment