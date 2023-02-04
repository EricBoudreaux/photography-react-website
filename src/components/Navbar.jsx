import React, { useState } from 'react'
import { 
    FaBars, 
    FaFacebookF, 
    FaTwitter, 
    FaInstagram, 
    FaYoutube, 
    FaWindowClose,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'


const Navbar = () => {

const [nav, setNav] = useState(false);

const handleNav = () => {
    setNav(!nav);
}


  return (
    <div className='w-full '>
        <div className='flex h-[93px] bg-black justify-between items-center py-6'>
            <div className='flex align-center mx-5'>
            <Link to='/'><h1 className='text-white  text-2xl md:text-4xl cursor-pointer hover:text-[var(--accent)] ease-in duration-200'>Photosen</h1></Link>
            </div>
            <div className='ml-32'>
                <ul className='text-white hidden lg:flex justify-center'>
                    <li>
                        <Link to='/'><p className='text-gray-500 hover:text-[var(--accent)] ease-in duration-200 mx-5 uppercase text-sm'>Home</p></Link>
                    </li>
                    <li>
                        <Link to='/gallery'><p  className='mx-5 uppercase text-gray-500 text-sm hover:text-[var(--accent)] ease-in duration-200'>Gallery</p></Link>
                    </li>
                    <li>
                        <Link to='/services'><p className='mx-5 uppercase text-gray-500 text-sm hover:text-[var(--accent)] ease-in duration-200'>Services</p></Link>
                    </li>
                    <li>
                        <Link to='/about'><p className='mx-5 uppercase text-gray-500 text-sm hover:text-[var(--accent)] ease-in duration-200'>About</p></Link>
                    </li>
                    <li>
                        <Link to='/contact'><p className='mx-5 uppercase text-gray-500 text-sm hover:text-[var(--accent)] ease-in duration-200'>Contact</p></Link>
                    </li>
                </ul>
            </div>
            <div className='text-gray-500 flex'>
                <FaFacebookF className={nav ? 'm-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]' : 'm-3 hover:scale-150 ease-in duration-200  cursor-pointer'} />
                <FaInstagram className={nav ? 'm-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]' : 'm-3 hover:scale-150 ease-in duration-200  cursor-pointer'} />
                <FaTwitter className={nav ? 'm-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]' : 'm-3 hover:scale-150 ease-in duration-200  cursor-pointer'} />
                <FaYoutube className={nav ? 'm-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]': 'm-3 hover:scale-150 ease-in duration-200 cursor-pointer'} />
            </div>
            <div>
    
   
                     <FaBars onClick={handleNav} className='text-white flex lg:hidden mr-5 cursor-pointer' size={30}/> 
                    

            </div>

        </div>
        <div className={nav 
        ? 'fixed w-[60%] h-screen ml-[40%] mb-[-595px] mt-[-95px] bg-white ease-in duration-200 lg:hidden z-50'
        : 'fixed w-[60%] h-screen ml-[100%] mb-[-595px] mt-[-95px] ease-in duration-200 lg:hidden z-50'
        }>
        <div className='flex justify-end py-8'>
            <FaWindowClose onClick={handleNav} className='text-black lg:hidden mr-5 cursor-pointer hover:text-[var(--accent)] ease-in duration-200' size={30}/>
        </div>
        <ul className='text-white flex-col lg:hidden justify-center z-10 mt-[-95] pt-4 md:text-center'>
                    <li>
                        <Link onClick={handleNav} to='/'><p className='text-black hover:text-[var(--accent)] ease-in duration-200 text-1xl mx-5 uppercase text-2xl my-5 font-semibold'>Home</p></Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='/gallery'><p className='text-1xl mx-5 uppercase text-black text-2xl my-5 font-semibold hover:text-[var(--accent)] ease-in duration-200'>Gallery<span className='px-2'></span></p></Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='/services'><p className='text-1xl mx-5 uppercase text-black text-2xl my-5 font-semibold hover:text-[var(--accent)] ease-in duration-200'>Services</p></Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='/about'><p className='text-1xl mx-5 uppercase text-black text-2xl my-5 font-semibold hover:text-[var(--accent)] ease-in duration-200'>About</p></Link>
                    </li>
                    <li>
                        <Link onClick={handleNav} to='/contact'><p className='text-1xl mx-5 uppercase text-black text-2xl my-5 font-semibold hover:text-[var(--accent)] ease-in duration-200'>Contact</p></Link>
                    </li>
                    <li className='w-full'>
                        <div className='text-gray-500 flex md:justify-center'>
                            <FaFacebookF className='m-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]'/>
                            <FaInstagram className='m-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]'/>
                            <FaTwitter className='m-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]'/>
                            <FaYoutube className='m-3 hover:scale-150 ease-in duration-200 text-black cursor-pointer hover:text-[var(--accent)]' />
                        </div>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar
