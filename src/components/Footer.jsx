import React from 'react'
import { CiFaceSmile } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center my-12'>
      <p className='text-white text-sm text-center'>Copyright ©2022 All rights reserved | Built by Eric Boudreaux</p>
      <CiFaceSmile className='text-[var(--accent)] ml-3 animate-spin ease-in-out delay-1000 duration-1000' size={30}/>
    </div>
  )
}

export default Footer
