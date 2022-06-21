import React from 'react'
import NavBar from './NavBar'

function Layout({ children }) {
  return (
    <div className='flex flex-row min-h-screen bg-black'>
        <NavBar />
        <div className='p-3'>
          <main>{ children }</main>
        </div>
    </div>
  )
}

export default Layout