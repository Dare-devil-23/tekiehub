import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../asserts/technologies.js"
import { IoIosArrowDown } from 'react-icons/io'
const Technologies = () => {
  let { serviceId } = useParams()
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
    <div>
      {data.filter(tech => tech.id.toString() === serviceId.toString()).map(tech => (
        <div className='min-h-screen bg-gray-50'>
          <div
            style={{
              backgroundImage: `url(${tech.bgImage})`
            }}
            className="bg-fixed bg-center bg-cover"
          >
            <div className='flex flex-col text-white items-center h-screen mb-12 bg-transparent backdrop-blur-md'>
              <div className='h-4/5 flex justify-center flex-col items-center'>
                <div className="p-5 text-5xl">
                  {tech.name}
                </div>
                <p className='w-3/4 mx-auto text-lg lg:text-xl'>
                  {tech.info}
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

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3 ">Track work across the enterprise through an open, collaborative platform. <strong className="font-">Link issues across Jira</strong> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3 ">Track work across the enterprise through an open, collaborative platform. <strong className="font-">Link issues across Jira</strong> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
            
            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3 ">Track work across the enterprise through an open, collaborative platform. <strong className="font-">Link issues across Jira</strong> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3 ">Track work across the enterprise through an open, collaborative platform. <strong className="font-">Link issues across Jira</strong> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>

            <p className="mb-3">Track work across the enterprise through an open, collaborative platform. <u className="underline">Link issues across Jira</u> and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Technologies