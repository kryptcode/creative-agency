import React from 'react'
import ServicePoint from './ServicePoint'

const Service = () => {
  return (
    <div className='flex relative justify-between'>
        <div className='hidden lg:flex pt-24'>
            <h1 className='text-5xl font-bold absolute w-[40%] top-10 left-10 md:left-24'>
            Our approach for creating a winning brand 
            </h1>
        </div>
        <div className='bg-[#f94f4f] w-[50rem] py-8 px-16'>
          <div className='text-2xl font-semibold text-white flex lg:hidden'>
          Our approach for creating a winning brand
          </div>
            <ServicePoint no='01' heading='Brand Strategy' text='Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.' />
            <ServicePoint no='02' heading='Brand Design' text="Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively." />
            <ServicePoint no='03' heading='Web Design' text='A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.' />
        </div>
    </div>
  )
}

export default Service