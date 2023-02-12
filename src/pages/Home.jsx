import React from 'react'
import { Row, Col } from "antd"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from '@michaelwwn/react-simple-typewriter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../components/OurServices'
import OurSkills from '../components/OurSkills';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    label: 'Cloud Services...',
    title: 'Cloud Services',
    img: './HeroImages/cloud.jpg'
  },
  {
    label: 'DevOps...        ',
    title: 'DevOps',
    img: './HeroImages/devops.jpg'
  },
  {
    label: 'Data Science...  ',
    title: 'Data Science',
    img: './HeroImages/DataScience.jpg'
  },
  {
    label: 'RPA...           ',
    title: 'RPA',
    img: './HeroImages/RPA.jpg'
  },
  {
    label: 'SAP...           ',
    title: 'SAP',
    img: './HeroImages/SAP.jpg'
  },
  {
    label: 'Python...        ',
    title: 'Python',
    img: './HeroImages/python.jpg'
  }
]

const Home = () => {

  const [count, setCount] = useState(1);
  const handleType = (number) => {
    setCount(number % services.length)
  }

  return (
    <div>
      <div className='min-h-screen w-11/12 mx-auto mt-10 mb-20'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row 2xl:my-20'>
          <div className='md:w-[50%] m-2 md:m-5 flex items-center  2xl:m-10'>
            <div className="md:w-full">
              <h1 className='text-2xl md:text-4xl xl:text-[38px] 2xl:text-[45px]'>
                Are you looking for placement in {' '}
                <span className='text-[#1c8dc1] font-bold leading-relaxed'>
                  <Typewriter
                    words={services.map((service) => service.label)}
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
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      className="text-white bg-gradient-to-r from-[#1072a5] via-[#2096ce] to-[#5f9ab5] hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-full text-md w-36 py-2 text-center ">
                      Explore
                    </motion.button>
                  </Link>
                </Col>
              </Row>

            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            className='md:w-[50%] m-2 md:m-5 2xl:m-10'
          >
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              swipeable={false}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              stopOnHover={false}
              interval={4200}
            >
              {
                services.map((service,i)=>(
                  <img className="rounded-2xl h-96 w-96" src={service.img} alt={service.title} key={i}/>
                ))
              }
            </Carousel>
          </motion.div>
        </motion.div>
        <OurServices />
      </div>
      <OurSkills />
    </div>
  )
}

export default Home