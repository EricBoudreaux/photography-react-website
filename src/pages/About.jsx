import React from 'react'
import Img2 from '../img/img_2.jpg.webp'
import Person1 from '../img/person_1.jpg.webp'
import Person2 from '../img/person_2.jpg.webp'
import Person4 from '../img/person_4.jpg.webp'
import 'animate.css';

import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram
} from 'react-icons/fa'


const About = () => {
  return (
    <div className='w-full px-4 animate__animated animate__fadeInUp animate__fast'>
      <div className="flex justify-center">
        <h1 className='text-white text-4xl md:text-6xl py-20'>About Us</h1>
      </div>
      <div className='flex-cols lg:flex justify-between pb-24'>
        <div>
          <img src={Img2} className='saturate-50 w-full md:w-[90%] overflow-y-hidden hover:scale-[1.01] hover:saturate-0 ease-in duration-200' alt="/" />
        </div>
        <div className='text-white w-[90%] lg:w-[40%] flex-col pr-0 md:pr-12'>
          <h1 className='text-3xl text-center md:text-left py-2'>Our Mission</h1>

        <p className='text-sm text-gray-500 leading-loose py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.</p>
        <p className='text-sm text-white font-bold leading-loose py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor architecto excepturi aliquid minus nostrum dicta labore iusto obcaecati fugit cupiditate.</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-white pl-14'>
        <div className='grayscale hover:grayscale-0 ease-in duration-300 w-[80%]'>
          <div>
            <img src={Person1} className='rounded-full' alt="/" />
          </div>
          <div>
          <p className='text-sm  font-semibold text-gray-500 leading-loose text-center p-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?
          </p>
          </div>
          <div className='flex justify-center'>
            <FaTwitter className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
            <FaInstagram className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
            <FaFacebookF className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
          </div>
        </div>
        <div className='grayscale hover:grayscale-0 ease-in duration-300 w-[80%]'>
          <div>
            <img src={Person2} className='rounded-full' alt="/" />
          </div>
          <div>
          <p className='text-sm  font-semibold text-gray-500 leading-loose text-center p-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?
          </p>
          </div>
          <div className='flex justify-center'>
            <FaTwitter className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
            <FaInstagram className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
            <FaFacebookF className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
          </div>
        </div>
        <div className='grayscale hover:grayscale-0 ease-in duration-300 w-[80%]'>
          <div>
            <img src={Person4} className='rounded-full' alt="/" />
          </div>
          <div>
          <p className='text-sm  font-semibold text-gray-500 leading-loose text-center p-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?
          </p>
          </div>
          <div className='flex justify-center'>
            <FaTwitter className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
            <FaInstagram className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
            <FaFacebookF className='m-4 text-[var(--accent)] hover:text-[#4c9f7c] cursor-pointer' />
          </div>
        </div>

      </div>



    </div>
  )
}

export default About
