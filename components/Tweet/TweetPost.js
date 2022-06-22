import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";

function TweetPost() {
  return (
    <div className='p-4 flex flex-col border-b-2 border-neutral-700'>
    {/* Header */}
        <div className='flex space-x-2'>
            <div className='h-12 w-12 rounded-full flex justify-center items-center overflow-hidden'>
                <img className='shrink-0' src='https://w0.peakpx.com/wallpaper/290/26/HD-wallpaper-vikings-ragnar-viking.jpg'></img>
            </div>
            <div className='flex flex-col'>
                <div className='flex space-x-2 items-center'>
                    <h1 className='font-semibold'>Username</h1>
                    <h1 className='text-sm text-slate-300'>in 3months</h1>
                </div>
                <h1 className='text-sm text-slate-500'>exmaple@gmail.com</h1>
            </div>
        </div>
    {/* caption */}
    <div className='p-2 px-10'>
        <h1 className=''>Hello hi frnds</h1>
    </div>

    {/* likes comments and star's */}
    <div className='flex p-4 justify-around'>
        <div className='flex space-x-1'>
            <AiOutlineHeart className='h-6 w-6' />
            <h1>3</h1>
        </div>
        <div className='flex space-x-1'>
            <FaRegComment className='h-5 w-5' />
            <h1>3</h1>
        </div>
        <div className='flex space-x-1'>
            <BsBookmarkHeart className='h-5 w-5' />
            <h1>3</h1>
        </div>
    </div>
    </div>
  )
}

export default TweetPost