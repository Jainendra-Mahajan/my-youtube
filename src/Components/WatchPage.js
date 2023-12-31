import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import ChatComponent from './ChatComponent';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, [])
    return (
        <div className="flex flex-col w-full mt-20">
            <div className="px-5 inline-block md:flex w-full">
                <div className="md:ml-5">
                    <iframe
                        width="900"
                        height="500"
                        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full">
                    <h1 className='font-bold md:text-center mb-1'>Live Chat : </h1>
                    <ChatComponent />
                </div>
            </div >
            <CommentsContainer id={searchParams.get("v")} />
        </div>
    );
};

export default WatchPage