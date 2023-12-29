import React from 'react'
import Button from './Button';
const listItems = ["All", "kapil Sharma", "Akshay Saini", "New to You", "Technology", "Computer Programming", "Akshay Saini", "New to You", "Technology"];

const ButtonList = () => {

    return (
        <div className='flex mt-20'>
            {listItems.map((item, index) => <Button key={index} name={item} />)}
        </div>

    )
}

export default ButtonList