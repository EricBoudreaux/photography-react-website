import React from 'react'
import 'animate.css';

const Contact = () => {
  return (
<div className='w-full px-12 animate__animated animate__fadeInUp animate__fast'>
      <div className="flex justify-center">
        <h1 className='text-white text-4xl md:text-6xl py-20'>Contact</h1>
      </div>
      <div className='flex flex-col justify-center lg:flex-row'>
        <form className='text-white flex flex-col'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
          <label className='col-span-4' htmlFor="name">First Name</label>
          <input type="text" className='col-span-4 bg-transparent w-full outline-0 border border-gray-500 p-2 focus:border-[var(--accent)]'/>
          <label className='col-span-4' htmlFor="name">Last Name</label>
          <input type="text" className='col-span-4 bg-transparent w-full outline-0 border border-gray-500 p-2 focus:border-[var(--accent)]'/>
          <label htmlFor="name">Email</label>
          <input type="email" className='col-span-4  bg-transparent w-full outline-0 border border-gray-500 my-3 p-2 focus:border-[var(--accent)]'/>
          <label htmlFor="name">Subject</label>
          <input type="text" className='col-span-4  bg-transparent w-full outline-0 border border-gray-500 my-3 p-2 focus:border-[var(--accent)]'/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" cols="30" rows="10" className='col-span-4  bg-transparent w-full outline-0 border border-gray-500 mt-3 p-2 focus:border-[var(--accent)]'></textarea>
          <button className='bg-[var(--accent)] col-span-1 w-[50%] md:w-[100%] py-3 px-5 hover:bg-[#4c9f7c] '>Send Message</button>
          </div>
        </form>

        <div className='text-white ml-0 lg:ml-12'>
          <div className='my-12'>
            <h1 className='font-bold'>Address</h1>
            <p className='font-semibold text-gray-500 leading-loose'>203 Fake St. Mountain View</p>
            <p className='font-semibold text-gray-500 leading-loose'>San Francisco, California, USA</p>
          </div>
          <div className='my-12'>
            <h1 className='font-bold'>Phone</h1>
            <p className='font-semibold leading-loose text-[var(--accent)] hover:text-[#4c9f7c] ease-in duration-200'>+1 232 3235 324</p>
          </div>
          <div className='my-12'>
            <h1 className='font-bold'>Email Address</h1>
            <p className='font-semibold leading-loose text-[var(--accent)] hover:text-[#4c9f7c] ease-in duration-200'>youremail@domain.com</p>
          </div>
        </div>
      </div>

</div>
  )
}

export default Contact
