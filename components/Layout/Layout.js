import React from 'react'
import NavBar from './NavBar'
import Widgets from './Widgets'

function Layout({ children }) {
  return (
    <div className='flex flex-row min-h-screen bg-black'>
        <NavBar />
        <div className='md:w-3/5 w-full max-h-screen overflow-y-scroll z-0'>
          <main>{ children }</main>
        </div>
        <div className='hidden md:inline'>
          <Widgets />
        </div>
    </div>
  )
}

export default Layout