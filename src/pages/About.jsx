import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function About() {
  useEffect(() => {
    window.addEventListener("scroll", () => { });
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: window.screen.width > 450 ? 700 :1000,
      behavior: "smooth",
    });
  }
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen bg-gray-50'>
        <div
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
          }}
          className="bg-fixed bg-center bg-cover"
        >
          <div className='flex flex-col  text-white items-center h-screen mb-12 bg-transparent backdrop-blur-sm'>
            <div className='h-4/5 flex justify-center flex-col items-center'>
              <div className="p-5 text-5xl">
                About Us
              </div>
              <p className='w-3/4 mx-auto text-xl'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>
            </div>
            <div className='flex '>
              <IoIosArrowDown className='text-[70px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer'
                onClick={() => {
                  handleClick()
                }}
              />
            </div>
          </div>
        </div>

        <div className="m-2 p-5 md:m-28 md:mt-16 md:p-20 text-lg min-h-screen">

          <h2 className="text-4xl font-extrabold ">Who we are?</h2>
          <p className="my-4 text-lg text-gray-500">TekieHub Focal point is unlocking a client remarkable application which has high potential with ease and perfect adaptability. We have accurate intelligence, for all customer business needs to transform into perfect shape. We are ready to deliver the Professional Services for all MSP works. We at CYBERINFO are thriving to establish a strong international presence and building a remarkable record of success that now includes satisfied customers. TekieHub, leadership continues to celebrate its customer success as our own success.</p>
          
          <h2 className="text-4xl font-extrabold ">What we do?</h2>
          <p className="my-4 text-lg text-gray-500">At TekieHub we are currently building a SIEM Application for next generation as a SAAS based platform in the cyber security area. Using block chain technology, we are building software applications in Medical IT. We are building Logistics applications with Quantum Computing technology</p>
          
          <h2 className="text-4xl font-extrabold ">Who we serve?</h2>
          <p className="my-4 text-lg text-gray-500">TekieHub fulfills the customer wants & needs in the Information technology region, Digital Services Region and Staffing and Recruitment Region. TekieHub has some strong partnerships with direct clients with strongest and most innovative manufacturers.</p>
        </div>
      </div>
    </div>
  )
}

export default About