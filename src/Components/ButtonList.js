import React from 'react'
import Button from './Button';
const listItems = ["All", "kapil Sharma", "Akshay Saini", "New to You", "Technology", "Computer Programming", "Akshay Saini", "New to You", "Technology"];

const ButtonList = () => {

    return (
        <div className='flex'>
            {listItems.map((item) => <Button key={item} name={item} />)}
        </div>

    )
}

export default ButtonList