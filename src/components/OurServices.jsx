import React from 'react'
import { Card } from 'antd'
const OurServices = () => {
  return (
    <div className='w-4/5 mx-auto mt-10'>
      <div className='w-full md:w-3/4 mx-auto flex flex-col justify-center text-center my-[5rem]'>
        <h1 className='text-3xl m-5'>Core Services</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      <div className='flex w-full justify-center flex-col md:flex-row'>
          <Card title="Card title" className='shadow-lg hover:bg-sky-100 m-3 bg-sky-50 min-h-[250px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Card>
          <Card title="Card title" className='shadow-lg hover:bg-sky-100 m-3 bg-sky-50 min-h-[250px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Card>
          <Card title="Card title" className='shadow-lg hover:bg-sky-100 m-3 bg-sky-50 min-h-[250px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Card>
      </div>
      <div className='flex w-full justify-center flex-col md:flex-row'>
          <Card title="Card title" className='shadow-lg hover:bg-sky-100 m-3 bg-sky-50 min-h-[250px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Card>
          <Card title="Card title" className='shadow-lg hover:bg-sky-100 m-3 bg-sky-50 min-h-[250px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Card>
          <Card title="Card title" className='shadow-lg hover:bg-sky-100 m-3 bg-sky-50 min-h-[250px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </Card>
      </div>
      
    </div>
  )
}

export default OurServices