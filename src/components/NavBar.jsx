import { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, MenuOutlined, CloseOutlined, CloudOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd';
import { CgInfinity } from "react-icons/cg"
import { VscGraph, VscServerProcess } from "react-icons/vsc"
import { TbRobot, TbBrandPython } from "react-icons/tb"

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [serviceState, setServiceState] = useState(false);

  const items = [
    {
      key: '0',
      label: (
        <Link className="text-lg 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/1">
          Cloud Services
        </Link>
      ),
      icon: <CloudOutlined className="text-lg" />
    },
    {
      key: '1',
      label: (
        <Link className="text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/2">
          DevOps
        </Link>
      ),
      icon: <CgInfinity className="text-lg w-5" />
    },
    {
      key: '2',
      label: (
        <Link className="text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/3">
          Data Science
        </Link>
      ),
      icon: <VscGraph className="text-lg w-5" />
    },
    {
      key: '3',
      label: (
        <Link className="text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/4">
          RPA
        </Link>
      ),
      icon: <TbRobot className="text-lg w-5" />
    },
    {
      key: '4',
      label: (
        <Link className="text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/5">
          SAP
        </Link>
      ),
      icon: <VscServerProcess className="text-lg w-5" />
    },
    {
      key: '5',
      label: (
        <Link className="text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/6">
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
                <img src="./logo.png" className="mr-3 h-10 2xl:h-10" alt="Tekiehub Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  <img src="./text.png" className="mr-3 h-10 2xl:h-10" alt="Tekiehub Logo" />
                </span>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <CloseOutlined className="p-0 m-0 text-lg" /> : <MenuOutlined className="p-0 m-0 text-lg" />}
              </button>
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
            <div className="flex flex-col md:flex-row">
              <Link to="/" onClick={() => setNavbar(!navbar)} >
                <Button type="link" className="2xl:text-lg">Home</Button>
              </Link>
              <Dropdown menu={{ items }} onOpenChange={() => { setServiceState(!serviceState) }} >
                <Button type="link" >
                  <Space align="center" className="2xl:text-lg">
                    Technologies
                    {
                      serviceState ?
                        <UpOutlined className="text-[10px] align-middle" /> :
                        <DownOutlined className="text-[10px] align-middle" />
                    }
                  </Space>
                </Button>
              </Dropdown>
              <Link to="/about" onClick={() => setNavbar(!navbar)} >
                <Button type="link" className="2xl:text-lg">About US</Button>
              </Link>
              <Link to="/careers" onClick={() => setNavbar(!navbar)}>
                <Button type="link" className="2xl:text-lg">Careers</Button>
              </Link>
              <Link to="/contact" onClick={() => setNavbar(!navbar)}>
                <Button type="link" className="2xl:text-lg">Contact US</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}