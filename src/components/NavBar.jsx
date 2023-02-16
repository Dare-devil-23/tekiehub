import { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, MenuOutlined, CloseOutlined, CloudOutlined } from '@ant-design/icons';
import { Dropdown, Typography } from 'antd';
import { CgInfinity } from "react-icons/cg"
import { VscGraph, VscServerProcess } from "react-icons/vsc"
import { TbRobot, TbBrandPython } from "react-icons/tb"
import { motion } from "framer-motion";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [serviceState, setServiceState] = useState(false);

  const items = [
    {
      key: '0',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/cloud_services">
          Cloud Services
        </Link>
      ),
      icon: <CloudOutlined className="text-lg w-5" />
    },
    {
      key: '1',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/devops">
          DevOps
        </Link>
      ),
      icon: <CgInfinity className="text-lg w-5" />
    },
    {
      key: '2',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/data_science">
          Data Science
        </Link>
      ),
      icon: <VscGraph className="text-lg w-5" />
    },
    {
      key: '3',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/rpa">
          RPA
        </Link>
      ),
      icon: <TbRobot className="text-lg w-5" />
    },
    {
      key: '4',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/sap">
          SAP
        </Link>
      ),
      icon: <VscServerProcess className="text-lg w-5" />
    },
    {
      key: '5',
      label: (
        <Link className="text-lg xl:text-sm 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/python">
          Python
        </Link>
      ),
      icon: <TbBrandPython className="text-lg w-5" />
    },

  ]


  return (
    <nav className="w-full bg-white shadow" id='nav'>
      <div className="justify-between px-4 py-3 md:py-0 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="">
              <Link to="/" className="flex items-center" onClick={() => setNavbar(false)}>
              <motion.img whileTap={{ scale: 0.9 }} src="./text.png" className="mr-3 h-10 2xl:h-10" alt="Tekiehub Logo" />
              </Link>
            </div>
            <div className="md:hidden">
              <Typography.Link
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <CloseOutlined className="p-0 m-0 text-lg" /> : <MenuOutlined className="p-0 m-0 text-lg" />}
              </Typography.Link>
            </div>
          </div>
        </div>
        <div>
          <div
            className={
              `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 
              ${navbar ? "block" : "hidden"}`
            }
          >
            <div className="flex flex-col md:flex-row gap-10">
              <Link to="/" onClick={() => setNavbar(!navbar)} >
                <Typography.Link className="2xl:text-lg align-top">Home</Typography.Link>
              </Link>
              <Dropdown menu={{ items }} onOpenChange={() => { setServiceState(!serviceState) }} >
                <Typography.Link className="2xl:text-lg">
                    Technologies
                    {
                      serviceState ?
                        <UpOutlined className="text-[10px] align-middle pl-1" /> :
                        <DownOutlined className="text-[10px] align-middle pl-1" />
                    }
                </Typography.Link>
              </Dropdown>
              <Link to="/about" onClick={() => setNavbar(!navbar)} >
                <Typography.Link className="2xl:text-lg align-top">About US</Typography.Link>
              </Link>
              <Link to="/careers" onClick={() => setNavbar(!navbar)}>
                <Typography.Link className="2xl:text-lg align-top">Careers</Typography.Link>
              </Link>
              <Link to="/contact" onClick={() => setNavbar(!navbar)}>
                <Typography.Link className="2xl:text-lg align-top">Contact US</Typography.Link>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}