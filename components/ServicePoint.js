import React from 'react'

const ServicePoint = ({ no, heading, text }) => {
  return (
    <div className='relative text-white mb-16'>
              <h1 className='text-[5rem] leading-none opacity-40 font-bold absolute top-0 left-0'>
                {no}
              </h1>
              <div className='pt-10 pl-10  '>
                <h6 className='mb-6 font-semibold text-xl'>
                  {heading}
                </h6>
                <p className='text-lg font-medium '>
                    {text}
                </p>
              </div>
    </div>
  )
}

export default ServicePoint