import React from 'react'

function User() {
  return (
    <div className='text-white p-1 bg-black flex items-center rounded-lg space-x-1'>
        <div className='h-10 w-10 lex justify-center items-center overflow-hidden rounded-full'>
            <img className='shrink-0' src='https://i.pinimg.com/236x/b9/91/cc/b991cc42242c20837c25ca5f2ee6f5ba.jpg'></img>
        </div>
        <h1 className='font-semibold text-sm'>Hello</h1>
    </div>
  )
}

export default User