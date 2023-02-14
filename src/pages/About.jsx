import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import OurValues from '../components/OurValues';

const About = () => {
  const handleScroll = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='bg-slate-300'>
      <div className="bg-gradient-to-br from-gray-900 via-[#0f4341] to-[#102d97] hover:bg-gradient-to-tr">
        <div className='flex flex-col  text-white h-80 2xl:h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
          <div className='h-4/5 flex justify-center flex-col items-center'>
            <div className="p-5 text-5xl">
              About Us
            </div>
          </div>
          <Link to="#" onClick={handleScroll}>
            <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
          </Link>
        </div>
      </div>

      <div className="m-5 p-8 md:m-20 md:mt-16 md:p-10 md:py-20 text-lg bg-white rounded-3xl shadow-xl" id="content">
        <h2 className="text-3xl text-center relative group w-fit mx-auto">
          Who we are?
          <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] animate-pulse transition-all group-hover:w-full"></span>
        </h2>
        <p className="m-5 text-lg text-gray-500 lg:px-20 py-5">
          TekieHub Focal point is unlocking a client remarkable
          application which has high potential with ease and perfect adaptability.
          We have accurate intelligence, for all customer business needs
          to transform into perfect shape. We are ready to deliver
          the Professional Services for all MSP works.
          We at TekieHub are thriving to establish a strong
          international presence and building a remarkable record
          of success that now includes satisfied customers. TekieHub,
          leadership continues to celebrate its customer success as our own success.
        </p>

        <h2 className="text-3xl text-center relative group w-fit mx-auto">
          What we do?
          <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] animate-pulse transition-all group-hover:w-full"></span>
        </h2>
        <p className="m-5 text-lg text-gray-500 lg:px-20 py-5">
          At TekieHub we are currently building a SIEM
          Application for next generation as a SAAS based
          platform in the cyber security area.
          Using block chain technology, we are building
          software applications in Medical IT.
          We are building Logistics applications with
          Quantum Computing technology
        </p>

        <h2 className="text-3xl text-center relative group w-fit mx-auto">
          Who we serve?
          <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] animate-pulse transition-all group-hover:w-full"></span>
        </h2>
        <p className="m-5 text-lg text-gray-500 lg:px-20 py-5">
          TekieHub fulfills the customer wants & needs in
          the Information technology region, Digital Services
          Region and Staffing and Recruitment Region.
          TekieHub has some strong partnerships with
          direct clients with strongest
          and most innovative manufacturers.
        </p>
      </div>

      <OurValues />
    </div>
  )
}

export default About