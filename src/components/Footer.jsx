import React from 'react'
import '../asserts/footer.css'
import { Link } from 'react-router-dom'
import { FacebookFilled, InstagramFilled, LinkedinFilled, CopyrightOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

const Footer = () => {
  const handleScroll = () => {
    const element = document.getElementById("nav");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className='text-sm lg:text-md pt-10 2xl:text-lg'>
      <div className="md:flex p-6 sm:p-6">
        <div className="mb-6 md:mb-0">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase ml-5 md:ml-10">
            <Link to="/" onClick={handleScroll}>
              <motion.img whileTap={{ scale: 0.9 }} src="./logo.png" className="h-14 mb-2 -ml-5 md:ml-0" alt="Tekiehub Logo" />
            </Link>
            Get in touch
          </h2>
          <div className='pl-1 md:pl-3'>
            <p className=" ml-5 md:ml-10 text-[#606060]">
              Don't miss any new updates on Technologies.! Follow us on social media.
            </p>
            <div className="flex space-x-6 ml-5 my-5 md:ml-10 text-[#606060]">
              <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/100090585845996/">
                <FacebookFilled className='text-xl hover:text-[#28a4d6] transition-all duration-700 w-5' />
                <span className="sr-only">Facebook page</span>
              </a>
              <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/tekiehub_llc/">
                <InstagramFilled className='text-xl hover:text-[#28a4d6] transition-all duration-700 w-5' />
                <span className="sr-only">Instagram page</span>
              </a>
              <a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/tekiehub-llc-60ab92266/">
                <LinkedinFilled className='text-xl hover:text-[#28a4d6] transition-all duration-700 w-5' />
                <span className="sr-only">Linked in</span>
              </a>
            </div>
            <div className="mt-5 ml-5 md:ml-10 text-[#606060] flex items-center">
              <CopyrightOutlined className="mr-1 w-4" />
              <span>
                {new Date().getFullYear()}
                {' '}TekieHub. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-around md:flex-1 ml-6 md:ml-0">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">Technologies</h2>
            <div className="grid grid-cols-1 pl-1 md:pl-3 text-[#606060]">
              <span className="py-1 text-left text-md 2xl:text-lg hover:text-[#28a4d6] transition-all duration-700">
                <Link to="/technologies/cloud_services" onClick={handleScroll}>
                  Cloud Services
                </Link>
              </span>
              <span className="py-1 text-left text-md 2xl:text-lg hover:text-[#28a4d6] transition-all duration-700">
                <Link to="/technologies/devops" onClick={handleScroll}>
                  DevOps
                </Link>
              </span>
              <span className="py-1 text-left text-md 2xl:text-lg hover:text-[#28a4d6] transition-all duration-700">
                <Link to="/technologies/data_science" onClick={handleScroll}>
                  Data Science
                </Link>
              </span>
              <span className="py-1 text-left text-md 2xl:text-lg hover:text-[#28a4d6] transition-all duration-700">
                <Link to="/technologies/rpa" onClick={handleScroll}>
                  RPA
                </Link>
              </span>
              <span className="py-1 text-left text-md 2xl:text-lg hover:text-[#28a4d6] transition-all duration-700">
                <Link to="/technologies/sap" onClick={handleScroll}>
                  SAP
                </Link>
              </span>
              <span className="py-1 text-left text-md 2xl:text-lg hover:text-[#28a4d6] transition-all duration-700">
                <Link to="/technologies/python" onClick={handleScroll}>
                  Python
                </Link>
              </span>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase mt-5 md:mt-0">Contact</h2>
            <ul className="text-[#606060] pl-1 md:pl-3">
              <li className="py-1">10945 Estate Ln</li>
              <li className="py-1">Suite E212, Dallas, TX 75238</li>
              <li className="py-1">+1(972)-777-3035</li>
              <li className="py-1">info@tekiehub.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <svg viewBox="0 0 120 20">
          <defs>
            <mask id="xxx">
              <circle cx="7" cy="12" r="40" fill="#fff" />
            </mask>

            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="
                                                                    1 0 0 0 0  
                                                                    0 1 0 0 0  
                                                                    0 0 1 0 0  
                                                                    0 0 0 13 -9" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path id="wave"
              d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
          </defs>

          <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2"></use>
          <use id="wave2" className="wave" xlinkHref="#wave" x="0" y="0"></use>

          <g className="gooeff">
            <use id="wave1" className="wave" xlinkHref="#wave" x="0" y="1" />
          </g>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="20%"
                style={{ stopColor: "rgb(0,212,255,1)", stopOpacity: "1" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(2,0,36,1)", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
          <g className="topball text-[7px] md:text-[5px]">
            <text x="85" y="8" fill='url(#grad1)' fontFamily='Teko'>
              TekieHUB
            </text>
          </g>
        </svg>
      </div>
    </footer>

  )
}

export default Footer