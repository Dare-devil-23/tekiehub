import React from 'react'
import '../asserts/footer.css'
import { Link } from 'react-router-dom'
import { FacebookFilled, InstagramFilled, LinkedinFilled, CopyrightOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
const Footer = () => {
    const handleScroll = () => {
        const element = document.getElementById("nav");
        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <footer className='text-sm lg:text-md pt-10 2xl:text-lg'>
            <img src="./logo.png" className="h-10 ml-14" alt="Tekiehub Logo" />
            <div className="md:flex p-6 sm:p-6">
                <div className="mb-6 md:mb-0">
                    <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase  ml-5 md:ml-10">
                        
                        Get in touch
                    </h2>
                    <div className='pl-1 md:pl-3'>
                        <p className=" ml-5 md:ml-10 text-[#606060]">
                            Don't miss any new updates on Technologies.! Follow us on social media.
                        </p>
                        <div className="flex space-x-6 ml-5 my-5 md:ml-10">
                            <Typography.Link href="/">
                                <FacebookFilled className='text-xl' />
                                <span className="sr-only">Facebook page</span>
                            </Typography.Link>
                            <Typography.Link href="/">
                                <InstagramFilled className='text-xl' />
                                <span className="sr-only">Instagram page</span>
                            </Typography.Link>
                            <Typography.Link href="/">
                                <LinkedinFilled className='text-xl' />
                                <span className="sr-only">Linked in</span>
                            </Typography.Link>
                        </div>
                        <div className="mt-5 ml-5 md:ml-10 text-[#606060]">
                            <CopyrightOutlined className="align-middle mr-1" />
                            <span className="align-middle">
                                {new Date().getFullYear()}
                                {' '}TekieHub. All Rights Reserved.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around flex-1">
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">Technologies</h2>
                        <div className="grid grid-cols-1 pl-1 md:pl-3">
                            <Typography.Link className="text-left text-md 2xl:text-lg">
                                <Link to="/technologies/cloud_services" onClick={handleScroll}>
                                    Cloud Services
                                </Link>
                            </Typography.Link>
                            <Typography.Link className="text-left text-md 2xl:text-lg">
                                <Link to="/technologies/devops" onClick={handleScroll}>
                                    DevOps
                                </Link>
                            </Typography.Link>
                            <Typography.Link className="text-left text-md 2xl:text-lg">
                                <Link to="/technologies/data_science" onClick={handleScroll}>
                                    Data Science
                                </Link>
                            </Typography.Link>
                            <Typography.Link className="text-left text-md 2xl:text-lg">
                                <Link to="/technologies/rpa" onClick={handleScroll}>
                                    RPA
                                </Link>
                            </Typography.Link>
                            <Typography.Link className="text-left text-md 2xl:text-lg">
                                <Link to="/technologies/sap" onClick={handleScroll}>
                                    SAP
                                </Link>
                            </Typography.Link>
                            <Typography.Link className="text-left text-md 2xl:text-lg">
                                <Link to="/technologies/python" onClick={handleScroll}>
                                    Python
                                </Link>
                            </Typography.Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">Contact</h2>
                        <ul className="text-[#606060] pl-1 md:pl-3">
                            <li className="mb-1">9319 LBJ Freeway</li>
                            <li className="mb-1">Suite 116, Dallas, TX 75243</li>
                            <li className="mb-1">+1(972)-757-8767</li>
                            <li className="mb-1">admin@tekiehub.com</li>
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