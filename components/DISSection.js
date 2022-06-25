import React from 'react'

const DISSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start relative'>
        <div className='flex-1'>
            <img src="./assets/desktop/image-strategic.jpg" className='w-full object-cover hidden md:flex' alt="" />
            <img src="./assets/mobile/image-strategic.jpg" className='w-full object-cover md:hidden flex' alt="" />
        </div>
        <div className='flex-1 bg-black text-white pt-0 md:pt-16 '>
            <div className='px-6 md:px-24 py-6'>
                <h2 className='text-3xl md:text-5xl font-bold pt-16 w-[80%] md:w-full mb-8'>
                    <span className='text-[#f94f4f] '>
                        Design {' '}
                    </span>
                    is strategic.
                </h2>
                <p className='text-lg mb-8'>
                    “A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.” 
                </p>
                <button className='text-[#f94f4f] text-lg font-medium underline underline-offset-8 hover:text-red-400 '>
                    Schedule a call
                </button>
            </div>
        </div>
        <div className='absolute top-[13.5rem] md:top-1/2 left-24 md:left-1/2 wave-red'>
            <img src="./assets/desktop/bg-pattern-wave-red.svg" className='w-[50%] md:w-full' alt="" />
        </div>
        <div className='bg-[#f94f4f] h-[12rem] w-[50rem] hidden md:flex absolute md:bottom-0 md:right-0' />
    </div>
  )
}

export default DISSection