import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return (
        !isMenuOpen ? null : <div className='w-[12%] shadow-lg m-2 text-left flex'>
            <ul>
                <Link to={"/"}><li className='flex items-center hover:bg-gray-300 rounded-lg'>
                    <img src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt="Home Icon"
                        className='w-16 m-1 -ml-2' />
                    Home</li></Link>

                <li className='flex items-center hover:bg-gray-300 rounded-lg pr-1'>
                    <img src="https://logowik.com/content/uploads/images/youtube-shorts5863.jpg" alt="Shorts Icon"
                        className='pl-1 w-12 m-1 -ml-1' />
                    Shorts</li>

                <li className='flex items-center hover:bg-gray-300 rounded-lg pr-1'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAADPz89hYWHMzMz09PSWlpZTU1P6+vrt7e3X19f8/PxaWlokJCSgoKAyMjKJiYm4uLhGRkYZGRlxcXEqKiqvr6/g4OBmZmY6OjpKSkpAQEC1tbXn5+cRERFra2uDg4OamprAwMAfHx83NzeMNedaAAADZElEQVR4nO2di47aQAxF3QBLHhACFMJ2oY/t/v83dipUCYkumofH9oR7PiDxEcFMnMmFCAAAAAAAAAAAAE9NW8nSihsuv8iyFDecCRvOYAhDGMIQhjCEIQxhCEMYwhCGJg1XwoYrccPjiyxHcUMAAAAAAAAAAAAUyHE1s8eKc7DxIjx28uMFhjCEoTowhCEM9YEhDGGoDwxhCEN9YBhCvbBIzWgIAAAAAAAAAAA8A2M1t0k1MthVw0F7HPOQw1Cl6NX9WtvAg3UfPbDZluD3l/U5TvCkXXgApwi/ppQP8Mq6CRW8lCXoFC9hgvWrdsXBvIb1m5K+g/8I+i5utauNYhtwje61i41i73+d9tq1RtL7CnYb7VIj2XSehnPtSqPxXaMO2oVGM3ga7rQLjWbnJ1hr15mAXzdttMtMwG912mqXmYBffmSlXWYCfs0UhpaBIQztA0N2wzfptGFxwyXN3/iO5oGCIdFZcmqnYki14MhAx9A5/uQ75GO0DIkuX/kO+gg9Q3fHIhJhp2lINBcYcOkaEm2zz2G1Danrv/Md/H+oGxIt8g7yDBgSNT/4jn+HCUOiMd9q1Yiha6u5RrJmDF1bzdNyDBlmesBlyjBLW7VlmGO1as2Qv63aMyTmIYBFQ6Iz495Am4acQwCjhs6Rq62aNXSrVZ62atjQtVWOIYBpQ9dWP5JPaNzQrVZ/J57QvKFbraYNOgowTFytlmCY1lbLMHQr8ui2WorhGD3KKcNw6ldp2gLOvmHqIty8YfKNlHFDhpth04btN4YTGjYcJ373tOB6DG7V8BfbCW0aHvnOZ9LwfeLTRJYGeoM1wwv7nyjaMmwy7COyZFhnSSo0ZHic+BPS99SZ2mcYMayYG+gNJgzHnP9Ca8CQ6fnEZ6gbLnJHvSobZt/Vpm24FciB0TSsRF6f1jOU2SGsZyi1y1vtbQSxnfo6hp1oQIO44Yp1s4wH4oYf0q/24+08GNoHhjC0DwyvTD/5Y/rpLdNP4Jl+itITJGGV20x908ymn0g3/VRB6gpNhvT+CJ8g3fMJElqpLq/ZbAJTvRvbUez3HILDoJuyPsVNsKC7UEv6Lp7igufzx1gwsQ/qord0fQmX6qYP+B28d6wG23cau6FK8btSN21lk7bBH3UCAAAAAAAAAABPwx9rv3tO1WasogAAAABJRU5ErkJggg==" alt="Subscription Icon"
                        className='w-6 m-2' />
                    Subscription </li>
            </ul>

        </div>
    )
}

export default Sidebar