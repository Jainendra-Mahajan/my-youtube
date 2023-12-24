import React from 'react'
import Button from './Button';
const listItems = ["All", "kapil Sharma", "Akshay Saini", "Namaste React", "Sports", "World Cup", "IPL", "New to You", "Technology", "Computer Programming"];

const ButtonList = () => {

    return (
        <div className='flex'>
            {listItems.map((item) => <Button key={item} name={item} />)}
        </div>

    )
}

export default ButtonList