import 'animate.css';
import React from 'react'
import Nature from '../img/nature_small_1.jpg.webp'

const Gallery = () => {


  fetch('https://api.unsplash.com/photos/?client_id=1oo2ZR1ZRbbP4zN50ti88nIpDfyg7ZUXGV-C3E6GEhA')
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].links.self);

  });

  return (
    <div className='animate__animated animate__fadeInUp animate__fast'>
      <div className="flex justify-center">
        <h1 className='text-white text-4xl md:text-6xl py-20'>Portrait Gallery</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:mx-5 gap-5'>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
        <div className='my-3 mx-4 md:mx-0 lg:mx-0 grayscale hover:grayscale-0 hover:scale-105 ease-in duration-200'>
          <img src={Nature} alt="/" />
        </div>
      </div>
      
    </div>
  )
}

export default Gallery
