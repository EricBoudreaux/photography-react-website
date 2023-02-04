import React from 'react'

import 'animate.css';

import {
  FaCamera,
  FaPhotoVideo,
  FaCat,
  FaPortrait,
  FaPlane,
  FaFilm
} from 'react-icons/fa'

const Services = () => {
  return (
    <div className='w-full px-4 lg:px-12 animate__animated animate__fadeInUp animate__fast'>
      <div className="flex justify-center">
        <h1 className='text-white text-4xl md:text-6xl py-20'>My Services</h1>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 text-white'>
        
        <div className='flex-col py-24 text-center bg-gray-400/20'>
          <FaCamera size={100} className='mx-auto text-[var(--accent)] hover:scale-125 ease-in duration-200'/>
          <h1 className='text-2xl py-6'>Camera</h1>
          <p className='text-sm text-gray-500 leading-loose px-2 lg:px-12 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nulla corrupti placeat cumque!</p>
          <p className='text-[var(--accent)] font-bold'>$29</p>
        </div>
        <div className='flex-col py-24 text-center bg-gray-400/20'>
          <FaPhotoVideo size={100} className='mx-auto text-[var(--accent)] hover:scale-125 ease-in duration-200'/>
          <h1 className='text-2xl py-6'>Wedding Photography</h1>
          <p className='text-sm text-gray-500 leading-loose px-2 lg:px-12 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nulla corrupti placeat cumque!</p>
          <p className='text-[var(--accent)] font-bold'>$46</p>
        </div>
        <div className='flex-col py-24 text-center bg-gray-400/20'>
          <FaCat size={100} className='mx-auto text-[var(--accent)] hover:scale-125 ease-in duration-200'/>
          <h1 className='text-2xl py-6'>Animals</h1>
          <p className='text-sm text-gray-500 leading-loose px-2 lg:px-12 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nulla corrupti placeat cumque!</p>
          <p className='text-[var(--accent)] font-bold'>$24</p>
        </div>
        <div className='flex-col py-24 text-center bg-gray-400/20'>
          <FaPortrait size={100} className='mx-auto text-[var(--accent)] hover:scale-125 ease-in duration-200'/>
          <h1 className='text-2xl py-6'>Portrait</h1>
          <p className='text-sm text-gray-500 leading-loose px-2 lg:px-12 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nulla corrupti placeat cumque!</p>
          <p className='text-[var(--accent)] font-bold'>$40</p>
        </div>
        <div className='flex-col py-24 text-center bg-gray-400/20'>
          <FaPlane size={100} className='mx-auto text-[var(--accent)] hover:scale-125 ease-in duration-200'/>
          <h1 className='text-2xl py-6'>Travel</h1>
          <p className='text-sm text-gray-500 leading-loose px-2 lg:px-12 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nulla corrupti placeat cumque!</p>
          <p className='text-[var(--accent)] font-bold'>$35</p>
        </div>
        <div className='flex-col py-24 text-center bg-gray-400/20'>
          <FaFilm size={100} className='mx-auto text-[var(--accent)] hover:scale-125 ease-in duration-200'/>
          <h1 className='text-2xl py-6'>Video Editing</h1>
          <p className='text-sm text-gray-500 leading-loose px-2 lg:px-12 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem nulla corrupti placeat cumque!</p>
          <p className='text-[var(--accent)] font-bold'>$15</p>
        </div>


        

      </div>

    </div>
  )
}

export default Services
