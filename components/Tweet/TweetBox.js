import React from 'react'

function TweetBox() {
  return (
    <div className='flex p-4 flex-col space-y-2 border-b-2 border-neutral-700'>
    <div className='flex space-x-3'>
        <div className='bg-white shrink-0 h-12 w-12 rounded-full flex justify-center items-center overflow-hidden'>
            <img className='shirink-0' src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'></img>
        </div>
        <textarea className='w-full bg-transparent h-20 outline-none text-lg font-semibold' placeholder="What's happening ?"></textarea>
    </div>
        <button className='bg-sky-500 h-9 w-20 rounded-full self-end'>send</button>
    </div>
  )
}

export default TweetBox