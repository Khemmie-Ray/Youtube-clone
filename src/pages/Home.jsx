import React, { useState, useEffect } from 'react';
import { FcMusic } from "react-icons/fc";
import { GiRead, GiLoincloth, GiGymBag } from "react-icons/gi"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { SiApplepodcasts, SiSemanticuireact, SiNextdotjs } from "react-icons/si"
import { MdLocalMovies, MdSportsBaseball, MdFace2, MdDeveloperMode, MdTheaterComedy } from "react-icons/md"
import { IoLogoGameControllerB } from "react-icons/io"
import { RiLiveFill } from "react-icons/ri"
import { FaBitcoin } from "react-icons/fa"
import Header from '../components/Header'
import VideoData from '../components/VideoData'


const Home = () => {
  const [selectedLink, setSelectedLink] = useState([
    {link: "New", icon: <BsFillPlusSquareFill />},
    {link: "Coding", icon: <MdDeveloperMode />},
    {link: "React.js", icon: <SiSemanticuireact />},
    {link: "Next.js", icon: <SiNextdotjs />},
    {link: "Music", icon: <FcMusic />},
    {link: "Education", icon: <GiRead />},
    {link: "Podcast", icon: <SiApplepodcasts />},
    {link: "Movies", icon: <MdLocalMovies />},
    {link: "Gaming", icon: <IoLogoGameControllerB />},
    {link: "Live", icon: <RiLiveFill />},
    {link: "Sport", icon: <MdSportsBaseball />},
    {link: "Fashion", icon: <GiLoincloth />},
    {link: "Beauty", icon: <MdFace2 />},
    {link: "Comedy", icon: <MdTheaterComedy />},
    {link: "Gym", icon: <GiGymBag />},
    {link: "Crypto", icon: <FaBitcoin />},
])
const [searchLink, setSearchLink] = useState('')
const [videoDetails, setVideoDetails] = useState([]);

  function handleClick(link) {
    setSearchLink(link)
  }

  const sideNavLinks = selectedLink.map((ele, id)=> (
    <div key={id} onClick={() => handleClick(ele.link)}>
    <button className="flex items-center text-[1rem] mb-6 hover:bg-red-300 py-2 px-6 hover:rounded-full"><p className='text-red-700 text-xl mr-4'>{ele.icon}</p> {ele.link} </button>   
    </div>
  ))

  // Function to fetch video data based on the searchLink
  const fetchVideoData = (searchLink) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchLink}&part=snippet%2Cid&regionCode=US&maxResults=30&order=date`;
    const options = {
      	method: 'GET',
          cache: "force-cache",
      	headers: {
      		'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
      		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      	}
      };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        setVideoDetails(data.items);
      })
      .catch(error => {
        console.error(error);
      });
  };

  // ...

  return (
    <div className='bg-[#101018] font-merriweather h-[100vh]'>
      <Header />
      <main className='flex w-[90%] mx-auto mt-8 justify-between'>
        <div className='flex flex-col text-white bg-[#21212E] h-[80vh] p-8 rounded-md w-[22%] overflow-y-auto'>
          {sideNavLinks}
          <div className='mt-auto text-center'>
            <p>&copy;Copyright 2023 Khemmie-Ray</p>
          </div>
        </div>
        <div className='w-[75%] overflow-y-auto h-[80vh]'>
          <VideoData fetchVideoData={fetchVideoData} videoDetails={videoDetails} searchLink={searchLink}/>
        </div>
      </main>
    </div>
  );
}

export default Home;
