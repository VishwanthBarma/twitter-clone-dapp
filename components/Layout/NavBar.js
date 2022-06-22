import React from 'react'
import { FiSend } from "react-icons/fi";
import { AiOutlineHome, AiFillHome, AiOutlineTwitter } from "react-icons/ai";
import { IoPersonOutline, IoPerson, IoSettings, IoSettingsOutline} from "react-icons/io5";

function NavBar() {
  return (
    <div className='w-20 md:w-44 lg:w-60 bg-neutral-900 text-white'>
      <div className='h-screen flex flex-col justify-between'>
        <div className='flex flex-col space-y-5 md:p-3 lg:p-5'>
        <div className='flex items-center justify-center'>
            <AiOutlineTwitter className='h-12 w-12 md:h-14 md:w-14'/>
        </div>
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

        <div className='md:p-3 mb-10 cursor-pointer flex items-center justify-center space-x-2'>
          <div className='bg-white shrink-0 h-10 w-10 rounded-full flex justify-center items-center overflow-hidden'>
            <img className='shirink-0' src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'></img>
          </div>
          <div className='hidden md:inline overflow-x-scroll'>
            <h1 className='font-semibold text-sm'>barmavishwanth</h1>
            <h1 className='text-[12px] text-slate-500'>@gmail</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar