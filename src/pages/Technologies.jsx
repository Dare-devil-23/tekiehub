import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../asserts/technologies.js"
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

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
            <div className='min-h-screen' key={i}>
              <div
                style={{
                  backgroundImage: `url(${tech.bgImage})`
                }}
                className="bg-fixed bg-center bg-cover"
              >
                <div className='flex flex-col font-bold text-white h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
                  <div className='h-4/5 flex justify-center flex-col items-center'>
                    <div className="p-5 text-5xl bg-slate-900 rounded-lg">
                      {tech.name}
                    </div>
                  </div>
                  <Link to="#" onClick={handleScroll}>
                    <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
                  </Link>
                </div>
              </div>
              <div className="m-2 p-5 md:m-20 md:mt-16 md:p-10 text-lg" id="content">
                <p className="mb-3">
                  <Page />
                </p>
              </div>

            </div>
          )
        })}

    </div>
  )
}

export default Technologies