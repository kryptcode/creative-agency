import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row w-[90%] mx-auto space-y-6 md:space-y-0 justify-between md:items-center my-10'>
        <div className='text-3xl md:text-6xl leading-none flex-1 font-bold '>
            Let's  build something great together 
        </div>
        <div className='flex-1 flex md:justify-end'>
        <button className='bg-[#f94f4f] py-3 px-6 text-white hover:opacity-80'>
          Schedule a call
        </button>
        </div>
    </div>
  )
}

export default Footer