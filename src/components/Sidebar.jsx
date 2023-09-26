import React from 'react'
import { NavLink } from "react-router-dom"
import { FcMusic } from "react-icons/fc"
import { GiRead, GiLoincloth } from "react-icons/gi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { SiApplepodcasts } from "react-icons/si"
import { MdLocalMovies, MdSportsBaseball, MdFace2 } from "react-icons/md"
import { IoLogoGameControllerB } from "react-icons/io"
import { RiLiveFill } from "react-icons/ri"


const Sidebar = () => {
  return (
    <div className='flex flex-col text-white bg-[#21212E] h-[80vh] p-8 rounded-md w-[20%]'>
        <NavLink to="/new" className="flex items-center text-[1rem] mb-6"><BsFillPlusSquareFill className='text-red-700 text-xl mr-4'/> New</NavLink>
        <NavLink to="/music" className="flex items-center text-[1rem] mb-6"><FcMusic className='text-red-700 text-xl mr-4' /> Music</NavLink>
        <NavLink to="/education" className="flex items-center text-[1rem] mb-6"><GiRead className='text-red-700 text-xl mr-4'/> Education</NavLink>
        <NavLink to="/podcast" className="flex items-center text-[1rem] mb-6"> <SiApplepodcasts className='text-red-700 text-xl mr-4'/>Podcast</NavLink>
        <NavLink to="/movie" className="flex items-center text-[1rem] mb-6"><MdLocalMovies className='text-red-700 text-xl mr-4'/>Movie</NavLink>
        <NavLink to="/gaming" className="flex items-center text-[1rem] mb-6"><IoLogoGameControllerB className='text-red-700 text-xl mr-4'/> Gaming</NavLink>
        <NavLink to="/live" className="flex items-center text-[1rem] mb-6"><RiLiveFill className='text-red-700 text-xl mr-4'/> Live</NavLink>
        <NavLink to="/sport" className="flex items-center text-[1rem] mb-6"><MdSportsBaseball className='text-red-700 text-xl mr-4'/> Sport</NavLink>
        <NavLink to="/fashion" className="flex items-center text-[1rem] mb-6"><GiLoincloth className='text-red-700 text-xl mr-4'/> Fashion</NavLink>
        <NavLink to="/beauty" className="flex items-center text-[1rem] mb-6"><MdFace2 className='text-red-700 text-xl mr-4'/>Beauty</NavLink>
        <div className='mt-auto text-center'>
            <p>&copy;Copyright 2023 Khemmie-Ray</p>
        </div>
    </div>
  )
}

export default Sidebar