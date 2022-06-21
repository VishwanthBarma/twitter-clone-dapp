import React from 'react'
import { FiSend } from "react-icons/fi";
import { AiOutlineHome, AiFillHome, AiOutlineTwitter } from "react-icons/ai";
import { IoPersonOutline, IoPerson, IoSettings, IoSettingsOutline} from "react-icons/io5";

function NavBar() {
  return (
    <div className='w-16 md:w-44 lg:w-60 bg-neutral-900 text-white'>
      <div className='p-3 flex flex-col space-y-5'>
        <AiOutlineTwitter className='h-12 w-12 md:h-14 md:w-14'/>
        <div className='flex flex-col space-y-2 justify-center ml-auto mr-auto'>
          <div className='flex space-x-2 items-center justify-start hover:bg-neutral-800 rounded-lg cursor-pointer md:w-36 p-3 lg:w-40'>
            <AiFillHome className='h-6 w-6'/>
            <h1 className='font-bold hidden md:inline'>Home</h1>
          </div>
          <div className='flex space-x-2 items-center justify-start hover:bg-neutral-800 rounded-lg cursor-pointer md:w-36 p-3 lg:w-40'>
            <IoPersonOutline className='h-6 w-6'/>
            <h1 className='hidden md:inline'>Profile</h1>
          </div>
          <div className='flex space-x-2 items-center justify-start hover:bg-neutral-800 rounded-lg cursor-pointer md:w-36 p-3 lg:w-40'>
            <IoSettingsOutline className='h-6 w-6'/>
            <h1 className='hidden md:inline'>Settings</h1>
          </div>
          <div className='flex md:hidden space-x-2 items-center justify-start bg-sky-500 hover:bg-neutral-800 active:bg-sky-600 rounded-lg cursor-pointer md:w-36 p-3 lg:w-40'>
            <FiSend className=' h-5 w-5'/>
          </div>
        </div>
        <button className='hidden md:inline bg-sky-500 p-2 rounded-full hover:opacity-80 active:opacity-100 font-semibold'>Mint</button>
      </div>
    </div>
  )
}

export default NavBar