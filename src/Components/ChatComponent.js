import React, { useEffect, useState } from 'react'
import LiveMessage from './LiveMessage'
import { generate, makeid } from '../utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveChatMessage } from '../utils/liveChatSlice'

const ChatComponent = () => {
    const [userLiveMessage, setUserLiveMessage] = useState();
    const dispatch = useDispatch();
    const liveChatData = useSelector(store => store.liveChat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addLiveChatMessage({
                    name: generate(),
                    message: makeid(20)
                }
                ))
        }, 2000);
        return () => clearInterval(i);
    }, [])
    return (
        <>
            <div className='flex flex-col-reverse h-[470px] border border-black rounded-lg ml-1 overflow-y-scroll '>
                {liveChatData.map((chat, index) => <LiveMessage key={index} name={chat.name} message={chat.message} />)}
            </div>
            <form className='w-full'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addLiveChatMessage({
                        name: "Rocky",
                        message: userLiveMessage
                    }));

                    setUserLiveMessage("");
                }
                }>
                <input type="text" className='mt-1 w-3/4 border border-black px-2 mx-2 rounded-lg'
                    placeholder='Type your Message Here'
                    value={userLiveMessage}
                    onChange={(e) => setUserLiveMessage(e.target.value)} />

                <button className='bg-black text-white px-2 rounded-lg'>Send</button>

            </form>
        </>
    )
}
export default ChatComponent

