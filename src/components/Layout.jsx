import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='bg-[#101018] font-merriweather'>
        <Header />
        <div className='flex w-[90%] mx-auto mt-8'>
            <Sidebar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout