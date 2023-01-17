import React, { useEffect } from 'react'
import { Card, Row, Col } from "antd"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Typewriter } from '@michaelwwn/react-simple-typewriter'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OurServices from '../components/OurServices'
function Home() {
  const services = [
    'Cloud Services',
    'Data Science  ',
    'RPA           ',
    'SAP           ',
    'Python        '
  ]
  const [count, setCount] = useState(1);
  const handleType = (number) => {
    setCount(number % services.length)
  }
  useEffect(() => {
    window.addEventListener("scroll", () => { });
  }, []);
  const handleClick = () => {
    window.scrollTo({
      top: window.screen.width > 450 ? 73 : 85,
      behavior: "smooth",
    });
  }
  return (
    <div className='min-h-screen w-11/12 mx-auto mt-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-[50%] m-2 md:m-5 flex items-center'>
          <Card className="md:w-full " bordered={false}>
            <h1 className='text-xl md:text-4xl 2xl:text-7xl'>
              Are you looking for{' '}
              <span className='text-blue-600 font-bold'>
                <Typewriter
                  words={services}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={100}
                  delaySpeed={1200}
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
                <Link to={`/technologies/${count + 1}`} onClick={() => handleClick()}>
                  <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-full text-md w-full py-2 text-center ">
                    Explore
                  </button>
                </Link>
              </Col>
            </Row>

          </Card>
        </div>
        <div className='md:w-[50%] m-2 md:m-5'>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            stopOnHover={false}
            interval={3700}
          >
            <div>
              <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Cloud Services" />
            </div>
            <div>
              <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Data Science" />
            </div>
            <div>
              <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="RPA" />
            </div>
            <div>
              <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="SAP" />
            </div>
            <div>
              <img className="rounded-lg h-96 w-full" src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=860&h=500&dpr=2" alt="Python" />
            </div>
          </Carousel>
        </div>
      </div>
      <OurServices />
    </div>
  )
}

export default Home