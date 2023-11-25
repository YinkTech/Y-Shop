import React from 'react'
import Nav from '../libs/Nav'
import { Footer } from '../libs/Footer'
import errorFile from './../assets/img/giphy.gif'

const NotFound = () => {
  return (
    <div className='flex flex-col'>
      <Nav />
      <div className='flex flex-col lg:h-[450px] items-center w-full h-full justify-center'>
        <img src={errorFile} className='w-full h-full' alt='error' />
      </div>
<Footer />
    </div>
  )
}

export default NotFound