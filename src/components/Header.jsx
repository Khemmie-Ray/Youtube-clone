import React from 'react'
import { BsYoutube } from "react-icons/bs"

const Header = () => {
  return (
    <header className='flex items-center justify-between w-[90%] mx-auto py-6'>
        <p className='bg-red-700 p-4 rounded-full'><BsYoutube className='text-3xl' /></p>
        <input type="text" placeholder='Search' className='w-[60%] rounded-[50px] p-2 pl-4' />
    </header>
  )
}

export default Header