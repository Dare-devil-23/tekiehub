import React from 'react'
import { Card, Carousel, Row, Col } from "antd"
import { Typewriter } from '@michaelwwn/react-simple-typewriter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
  const services = [
      'Cloud Services',
      'Data Science',
      'RPA',
      'SAP',
      'Python'
    ]
  const [count, setCount] = useState(1);
  const handleType = (number) => {
    setCount(number % services.length)
  }
  return (
    <div className='min-h-screen w-11/12 mx-auto mt-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-[50%] m-2 md:m-5 flex items-center'>
          <Card className="md:w-full " bordered={false}>
            <h1 className='text-xl md:text-4xl 2xl:text-7xl'>
              Are you looking for{' '}
              <span style={{ color: 'blue', fontWeight: 'bold' }}>
                <Typewriter
                  words={services}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={150}
                  delaySpeed={1500}
                  onType={handleType}
                />
              </span>
            </h1>
            <p className='py-2 my-2'>
              &emsp;&emsp;&emsp;Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <Row align='right'>
              <Col span={8} offset={16}>
                <Link to={`/technologies/${count + 1}`}>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-full text-md w-full py-2 text-center ">
                    Explore
                  </button>
                </Link>
              </Col>
            </Row>

          </Card>
        </div>
        <div className='md:w-[50%] m-2 md:m-5'>
          <Carousel autoplay controls={false}>
            <div>
              <h3 className='w-full' >
                <figure className="relative max-w-lg">
                  <a href="/">
                    <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/534285/pexels-photo-534285.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Eat" />
                  </a>
                  <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  </figcaption>
                </figure>
              </h3>
            </div>
            <div>
              <h3 className='w-full'>
                <figure className="relative max-w-lg">
                  <a href="/">
                    <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Sleep" />
                  </a>
                  <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  </figcaption>
                </figure>
              </h3>
            </div>
            <div>
              <h3 className='w-full'>
                <figure className="relative max-w-lg">
                  <a href="/">
                    <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Code" />
                  </a>
                  <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  </figcaption>
                </figure>
              </h3>
            </div>
            <div>
              <h3 className='w-full'>
                <figure className="relative max-w-lg">
                  <a href="/">
                    <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/9999715/pexels-photo-9999715.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Repeat" />
                  </a>
                  <figcaption className="absolute px-4 text-lg text-white bottom-6">
                  </figcaption>
                </figure>
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home