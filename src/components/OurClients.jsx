import React from 'react'
import { Card, Row, Col } from 'antd'

const data = [
  '/clients/airbnb.png',
  '/clients/facebook.png',
  '/clients/google.png',
  '/clients/oneplus.png',
  '/clients/twitter.png',
  '/clients/microsoft.png',
  '/clients/samsung.png'
]
const OurClients = () => {
  return (
    <div className='bg-slate-100'>
      <div className='mx-auto p-5 pb-10 md:p-10 lg:pb-14'>
        <div className='w-full mx-auto flex flex-col justify-center text-center mb-16'>
          <h1 className='text-4xl xl:text-3xl 2xl:text-4xl mb-0 relative group w-fit mx-auto'>
            Our Clients
            <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] transition-all duration-700 group-hover:w-full"></span>
          </h1>
        </div>
       <div className='w-3/4 mx-auto'>
        <Row gutter={[16,16]} justify='center'>
          {
            data.map((item, i) => (
              <Col span={6}>
                <Card key={i} className="shadow-lg rouded text-center h-[120px]" bodyStyle={{height:'100%',display:'flex',alignItems:'center'}}>
                  <img src={item} alt={i} className='w-[500px] align-middle grayscale hover:filter-none transition-all duration-500'/>
                </Card>
              </Col>
            ))
          }
        </Row>
       </div>
      </div>
    </div>
  )
}

export default OurClients