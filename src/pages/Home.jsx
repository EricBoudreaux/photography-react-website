import React from 'react'


import 'animate.css';

import Nature from '../img/img_1.jpg.webp';
import Portrait from '../img/img_2.jpg.webp';
import People from '../img/img_3.jpg.webp';
import Architecture from '../img/img_4.jpg.webp';
import Animals from '../img/img_5.jpg.webp';
import Sports from '../img/img_6.jpg.webp';
import Travel from '../img/img_7.jpg.webp'

const Home = () => {
  return (


    <div class="animate__animated animate__fadeInUp animate__fast">
      <div className='w-full px-5'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 gap-6'>
          <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-10 text-center'>
                  <h1 className='text-4xl my-3'>Nature</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Nature} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>Portrait</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Portrait} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>People</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={People} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>Architecture</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Architecture} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>Animals</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Animals} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>Sports</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Sports} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>Travel</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Travel} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>People</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={People} className='' alt="/" />
            </div>
            <div className='w-[100%] text-white flex justify-center items-center grayscale hover:grayscale-0 ease-in duration-200'>
                <div className='absolute z-50 text-center'>
                  <h1 className='text-4xl my-3'>Architecture</h1>
                  <button className='border-2 border-white px-6 py-2 text-[12px] hover:bg-white hover:text-black ease-in duration-200'>MORE PHOTOS</button>
            </div>
            <img src={Architecture} className='' alt="/" />
            </div>
            
          
      </div>
      </div>
    </div>


  )
}

export default Home
