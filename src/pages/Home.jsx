import React from 'react'
import { Row, Col } from "antd"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from '@michaelwwn/react-simple-typewriter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../components/OurServices'
import OurSkills from '../components/OurSkills';
import { motion } from 'framer-motion';
import OurClients from '../components/OurClients';

const services = [
  {
    label: 'Cloud Services...',
    title: 'Cloud Services',
    img: './HeroImages/cloud.jpg',
    route:'cloud_services'
  },
  {
    label: 'DevOps...        ',
    title: 'DevOps',
    img: './HeroImages/devops.jpg',
    route:'devops'
  },
  {
    label: 'Data Science...  ',
    title: 'Data Science',
    img: './HeroImages/DataScience.jpg',
    route:'data_science'
  },
  {
    label: 'RPA...           ',
    title: 'RPA',
    img: './HeroImages/RPA.jpg',
    route:'rpa'
  },
  {
    label: 'SAP...           ',
    title: 'SAP',
    img: './HeroImages/SAP.jpg',
    route:'sap'
  },
  {
    label: 'Python...        ',
    title: 'Python',
    img: './HeroImages/python.jpg',
    route:'python'
  }
]

const Home = () => {
  const [route, setRoute] = useState('');
  const handleType = (number) => {
    setRoute(services[number % services.length].route)
  }

  return (
    <div>
      <div className='w-11/12 mx-auto my-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col md:flex-row lg:m-5 2xl:my-20 gap-10'>
          <div className='md:w-[50%] m-2 md:m-5 flex items-center  2xl:m-10'>
            <div className="md:w-full">
              <h1 className='text-2xl md:text-4xl'>
                Are you looking for services <br/>in {' '}
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
                  <Link to={`/technologies/${route}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      type="button"
                      className="text-white bg-gradient-to-r from-[#1072a5] via-[#2096ce] to-[#5f9ab5] hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-full text-md w-32 py-2 text-center">
                      Explore
                    </motion.button>
                  </Link>
                </Col>
              </Row>

            </div>
          </div>
          <motion.div
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
                  <img className="rounded-2xl 2xl:h-96 h-80 w-full" src={service.img} alt={service.title} key={i}/>
                ))
              }
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
      <OurServices />
      <OurSkills />
      <OurClients />
    </div>
  )
}

export default Home