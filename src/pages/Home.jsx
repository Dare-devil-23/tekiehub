import React from 'react'
import { Card, Row, Col } from "antd"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from '@michaelwwn/react-simple-typewriter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../components/OurServices'
import OurSkills from '../components/OurSkills';
function Home() {
  const services = [
    'Cloud Services...',
    'DevOps...        ',
    'Data Science...  ',
    'RPA...           ',
    'SAP...           ',
    'Python...        '
  ]
  const [count, setCount] = useState(1);
  const handleType = (number) => {
    setCount(number % services.length)
  }

  return (
    <div>
      <div className='min-h-screen w-11/12 mx-auto mt-10 mb-20'>
        <div className='flex flex-col md:flex-row 2xl:my-20'>
          <div className='md:w-[50%] m-2 md:m-5 flex items-center  2xl:m-10'>
            <Card className="md:w-full " bordered={false}>
              <h1 className='text-xl md:text-4xl 2xl:text-[42px]'>
                Are you looking for placement in {' '}
                <span className='text-blue-600 font-bold leading-relaxed'>
                  <Typewriter
                    words={services}
                    loop={true}
                    typeSpeed={50}
                    deleteSpeed={100}
                    delaySpeed={1200}
                    onType={handleType}
                  />
                </span>
              </h1>
              <Row className='my-16'>
                <Col span={8}>
                  <Link to={`/technologies/${count + 1}`}>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-full text-md w-full py-2 text-center ">
                      Explore
                    </button>
                  </Link>
                </Col>
              </Row>

            </Card>
          </div>
          <div className='md:w-[50%] m-2 md:m-5 2xl:m-10'>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              swipeable={false}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              stopOnHover={false}
              interval={4250}
            >
              <div>
                <img className="rounded-lg h-96 w-96" src='./HeroImages/cloud.jpg' alt="Cloud Services" />
              </div>
              <div>
                <img className="rounded-lg h-96 w-96" src='./HeroImages/devops.jpg' alt="DevOps" />
              </div>
              <div>
                <img className="rounded-lg h-96 w-96" src='./HeroImages/DataScience.jpg' alt="Data Science" />
              </div>
              <div>
                <img className="rounded-lg h-96 w-96" src="./HeroImages/RPA.jpg" alt="RPA" />
              </div>
              <div>
                <img className="rounded-lg h-96 w-96" src="./HeroImages/SAP.jpg" alt="SAP" />
              </div>
              <div>
                <img className="rounded-lg h-96 w-96" src="./HeroImages/python.jpg" alt="Python" />
              </div>
            </Carousel>
          </div>
        </div>
        <OurServices />
      </div>
      <OurSkills />
    </div>
  )
}

export default Home