import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='mt-5 bg-gray-100 py-1 px-3 m-2 rounded-lg'>{name}</button>
        </div>
    )
}

export default Button