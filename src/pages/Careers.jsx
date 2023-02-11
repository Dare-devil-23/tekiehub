import { Card } from 'antd';
import Input from 'antd/lib/input/Input';
import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'

const Careers = () => {
  const handleScroll = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/4384998/pexels-photo-4384998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
        }}
        className="bg-fixed bg-center bg-cover"
      >
        <div className='flex flex-col text-white h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
          <div className='h-4/5 flex justify-center flex-col items-center'>
            <div className="p-5 text-5xl">
              Check our current openings!!
            </div>
            <p className='w-3/4 mx-auto text-lg'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
          </div>
          <Link to="#" onClick={handleScroll}>
              <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
            </Link>
        </div>
      </div>

      <div className="m-2 p-5 md:m-16 md:p-16 text-l" id="content">
        <h2 className="text-4xl font-bold mb-5">LET'S FIND YOUR NEXT JOB.</h2>
        <div className='flex justify-between flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 mx-5'>
            <h3 className='text-xl my-3'>Search for</h3>
            <Input placeholder='Job tittle or keyword' size='large' className='w-10/12' />
          </div>
          <div className='w-full lg:w-1/2 mx-5'>
            <h3 className='text-xl my-3'>Where</h3>
            <Input controls={false} placeholder='City state or zipcode' size='large' className='w-10/12' />
          </div>
        </div>
        <div className='mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Card title="Card title" className='shadow-lg hover:bg-sky-100 bg-sky-50 min-h-[250px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Card>
            <Card title="Card title" className='shadow-lg hover:bg-sky-100 bg-sky-50 min-h-[250px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Card>
            <Card title="Card title" className='shadow-lg hover:bg-sky-100 bg-sky-50 min-h-[250px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers