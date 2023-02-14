import { Card, Empty, Modal } from 'antd';
import Input from 'antd/lib/input/Input';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import JobsData from '../asserts/jobsData';

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProp, setSearchProp] = useState("");
  const [openJob, setOpenJob] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({ behavior: "smooth" });
  };

  const results = JobsData
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (
        searchProp === "role" &&
        val?.role.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        searchProp === "location" &&
        val?.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    })

  return (
    <div className='bg-slate-300 pb-8'>
      <div className="bg-gradient-to-br from-gray-900 via-[#0f0f43] to-[#107797] hover:bg-gradient-to-tr">
        <div className='flex flex-col  text-white h-80 2xl:h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
          <div className='h-4/5 flex justify-center flex-col items-center'>
            <div className="p-5 text-5xl">
              Check our current openings!!
            </div>
          </div>
          <Link to="#" onClick={handleScroll}>
            <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
          </Link>
        </div>
      </div>

      <div className="m-5 p-8 md:m-20 md:mt-16 md:p-10 md:py-20 text-lg bg-white rounded-3xl shadow-xl" id="content">
        <h2 className="text-3xl font-bold mb-5">LET'S FIND YOUR NEXT JOB.</h2>
        <div className='flex justify-between flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 mx-5'>
            <h3 className='text-xl my-3'>Search for</h3>
            <Input
              placeholder='Job tittle or keyword'
              size='large'
              className='w-10/12'
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchProp("role");
              }}
            />
          </div>
          <div className='w-full lg:w-1/2 mx-5'>
            <h3 className='text-xl my-3'>Where</h3>
            <Input
              controls={false}
              placeholder='City state or zipcode'
              size='large'
              className='w-10/12'
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSearchProp("location");
              }}
            />
          </div>
        </div>
        <div className='mt-10'>
          {
            results.length ?
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                  results.map((job, i) => (
                    <div key={i}>
                      <Card
                        title={job.role}
                        className='shadow-lg hover:shadow-2xl'
                        onClick={
                          () => setOpenJob(true)
                        }>
                        {job.location}
                      </Card>
                      <Modal
                        title={job.role}
                        centered
                        open={openJob}
                        okText={"Apply Job"}
                        okButtonProps={{ ghost: true }}
                        cancelText={"Close"}
                        cancelButtonProps={{ danger: true }}
                        onOk={() => setOpenJob(false)}
                        onCancel={() => setOpenJob(false)}
                      >
                        <p>{job.location}</p>
                      </Modal>
                    </div>
                  ))}
              </div> :
              <Empty
                className='w-full'
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span>
                    No Jobs Found.
                  </span>
                }
              />
          }
        </div>
      </div>
    </div>
  )
}

export default Careers