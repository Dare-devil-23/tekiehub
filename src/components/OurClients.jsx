import React from 'react'
import Marquee from "react-fast-marquee";

const data = [
  '/clients/element.png',
  '/clients/freddie.png',
  '/clients/hexaware.png',
  '/clients/iowa.png',
  '/clients/newyork.png',
  '/clients/palmer.png',
  '/clients/randstand.png',
  '/clients/tcs.png'
]
const OurClients = () => {
  return (
    <div className='bg-slate-100'>
      <div className='mx-auto p-5 pb-10 md:p-10 lg:pb-14'>
        <div className='w-full mx-auto flex flex-col justify-center text-center mb-16'>
          <h1 className='text-4xl xl:text-3xl 2xl:text-4xl mb-0 relative group w-fit mx-auto'>
            Our Partners
            <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] transition-all duration-700 group-hover:w-full"></span>
          </h1>
        </div>
        <Marquee speed={20}>
          <div className='flex'>
              {
                data.map((item, i) => (
                  <div key={i} className="rouded text-center h-[120px] w-fit mx-5 flex items-center">
                    <img src={item} alt={i} className='w-[200px] align-middle grayscale hover:filter-none transition-all duration-300'/>
                  </div>
                ))
              }
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default OurClients