import React, { useEffect, useState } from 'react';

const VideoData = ({ fetchVideoData, videoDetails, searchLink }) => {
console.log(videoDetails)
  useEffect(() => {
    if (searchLink) {
      // Call the fetchVideoData function when searchLink changes
      fetchVideoData(searchLink);
    }
  }, [searchLink]);

  const VideoCard = videoDetails.map(info => (
    <div className='lg:w-[31%] mb-4 bg-[#21212E] p-4 rounded-md flex flex-col'>
        <img src={info.snippet.thumbnails.high.url} alt="" />
        <p className='mt-auto py-2'>{info.snippet.title}</p>
    </div>
))

  return (
    <div className='flex flex-wrap justify-between w-[100%] mx-auto text-white'>
      {VideoCard}
    </div>
  );
}

export default VideoData;