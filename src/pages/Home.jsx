import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
    const [videoData, setVideoData] = useState([]);

const url = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=30';
const options = {
	method: 'GET',
    cache: "force-cache",
	headers: {
		'X-RapidAPI-Key': 'd2910875cbmsh834f6c7003c43c7p12256ejsna05580b09020',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

useEffect(() => {
    try { fetch(url, options)
    .then(response => response.json())
    .then(data => {
        // console.log(data.items)
        setVideoData(data.items)
    });
    } catch (e) {
        console.error(e)
    }
}, [])

console.log(videoData)

const VideoCard = videoData.map(info => (
    <div className='lg:w-[31%] mb-4 bg-[#21212E] p-4 rounded-md'>
        <img src={info.snippet.thumbnails.high.url} alt="" />
        <p className='mt-2'>{info.snippet.title}</p>
    </div>
))

  return (
    <div className='flex flex-wrap justify-between w-[75%] mx-auto text-white'>
        {VideoCard}
    </div>
  )
}

export default Home