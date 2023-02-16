import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../asserts/technologies.js"
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { motion } from 'framer-motion'
const Technologies = () => {
  let { serviceId } = useParams()
  const handleScroll = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div>
      {data.filter(tech => tech.id.toString() === serviceId.toString()).map(
        (tech, i) => {
          const Page = tech.page
          return (
            <div className='min-h-screen bg-slate-300 pb-10' key={i}>
              <div className="bg-gradient-to-br from-gray-900 via-[#0f0f43] to-[#107797] hover:bg-gradient-to-tr">
                <div className='flex flex-col  text-white h-80 2xl:h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
                  <div className='h-4/5 flex justify-center flex-col items-center'>
                    <motion.div className="p-5 text-5xl"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tech.name}
                    </motion.div>
                  </div>
                  <Link to="#" onClick={handleScroll}>
                    <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
                  </Link>
                </div>
              </div>
              <div className="md:w-3/4 h-3/4 mx-5 md:mx-auto p-8 py-10 md:p-14 my-16 text-lg bg-white rounded-3xl shadow-xl" id="content">
                <div className="mb-3">
                  <ConfigProvider theme={{
                    inherit: true,
                    token: {
                      colorBorderSecondary: 'white',
                    }
                  }}>
                    <Page />
                  </ConfigProvider>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Technologies