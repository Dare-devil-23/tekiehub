import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, MenuOutlined, CloseOutlined, CloudOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { CgInfinity } from "react-icons/cg"
import { VscGraph, VscServerProcess } from "react-icons/vsc"
import { TbRobot, TbBrandPython } from "react-icons/tb"
import { motion } from "framer-motion";
import withClickOutside from "./clickOutside";

const NavBar = forwardRef(({ open, setOpen }, ref) => {
  const [serviceState, setServiceState] = useState(false)
  
  const items = [
    {
      key: '0',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700" onClick={() => setOpen(false)} rel="noopener noreferrer" to="/technologies/cloud_services">
          Cloud Services
        </Link>
      ),
      icon: <CloudOutlined className="text-lg w-5" />
    },
    {
      key: '1',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700" onClick={() => setOpen(false)} rel="noopener noreferrer" to="/technologies/devops">
          DevOps
        </Link>
      ),
      icon: <CgInfinity className="text-lg w-5" />
    },
    {
      key: '2',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700" onClick={() => setOpen(false)} rel="noopener noreferrer" to="/technologies/data_science">
          Data Science
        </Link>
      ),
      icon: <VscGraph className="text-lg w-5" />
    },
    {
      key: '3',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700" onClick={() => setOpen(false)} rel="noopener noreferrer" to="/technologies/rpa">
          RPA
        </Link>
      ),
      icon: <TbRobot className="text-lg w-5" />
    },
    {
      key: '4',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700" onClick={() => setOpen(false)} rel="noopener noreferrer" to="/technologies/sap">
          SAP
        </Link>
      ),
      icon: <VscServerProcess className="text-lg w-5" />
    },
    {
      key: '5',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700" onClick={() => setOpen(false)} rel="noopener noreferrer" to="/technologies/python">
          Python
        </Link>
      ),
      icon: <TbBrandPython className="text-lg w-5" />
    },
  ]

  return (
    <nav className="w-full bg-white shadow select-none" id='nav' ref={ref}>
      <div className="justify-between px-4 py-3 md:py-0 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="">
              <Link to="/" className="flex items-center" onClick={() => setOpen(!open)}>
                <motion.img whileTap={{ scale: 0.9 }} src="./text.png" className="mr-3 h-10 2xl:h-10" alt="Tekiehub Logo" />
              </Link>
            </div>
            <div className="md:hidden">
              <span
                onClick={() => setOpen(!open)}
              >
                {open ? <CloseOutlined className="p-0 m-0 text-lg w-5" /> : <MenuOutlined className="p-0 m-0 text-lg w-5" />}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            className={
              `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 
              ${open ? "block" : "hidden"}`
            }
          >
            <div className="flex flex-col md:flex-row gap-10 text-gray-500">
              <Link to="/" onClick={() => setOpen(!open)} >
                <span className="text-sm align-top 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700">Home</span>
              </Link>
              <Dropdown menu={{ items }} onOpenChange={() => { setServiceState(!serviceState) }} >
                <span className="text-sm 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700">
                    Technologies
                    {
                      serviceState ?
                        <UpOutlined className="text-[10px] align-middle pl-1 w-4" /> :
                        <DownOutlined className="text-[10px] align-middle pl-1 w-4" />
                    }
                </span>
              </Dropdown>
              <Link to="/about" onClick={() => setOpen(!open)} >
                <span className="text-sm align-top 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700">About US</span>
              </Link>
              <Link to="/careers" onClick={() => setOpen(!open)}>
                <span className="text-sm align-top 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700">Careers</span>
              </Link>
              <Link to="/contact" onClick={() => setOpen(!open)}>
                <span className="text-sm align-top 2xl:text-lg hover:text-[#1c8dc1] transition-all duration-700">Contact US</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
})
export default withClickOutside(NavBar)