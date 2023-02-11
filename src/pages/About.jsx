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
    <div>
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
        }}
        className="bg-fixed bg-center bg-cover"
      >
        <div className='flex flex-col  text-white h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
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

      <div className="m-2 p-5 md:m-20 md:mt-16 md:p-10 text-lg" id="content">
        <h2 className="text-4xl font-bold ">
          Who we are?
        </h2>
        <p className="m-5 text-lg text-gray-500">
          TekieHub Focal point is unlocking a client remarkable
          application which has high potential with ease and perfect adaptability.
          We have accurate intelligence, for all customer business needs
          to transform into perfect shape. We are ready to deliver
          the Professional Services for all MSP works.
          We at CYBERINFO are thriving to establish a strong
          international presence and building a remarkable record
          of success that now includes satisfied customers. TekieHub,
          leadership continues to celebrate its customer success as our own success.
        </p>

        <h2 className="text-4xl font-bold ">
          What we do?
        </h2>
        <p className="m-5 text-lg text-gray-500">
          At TekieHub we are currently building a SIEM
          Application for next generation as a SAAS based
          platform in the cyber security area.
          Using block chain technology, we are building
          software applications in Medical IT.
          We are building Logistics applications with
          Quantum Computing technology
        </p>

        <h2 className="text-4xl font-bold ">
          Who we serve?
        </h2>
        <p className="m-5 text-lg text-gray-500">
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