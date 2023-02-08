import { useState } from "react";
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.min.css';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [serviceState, setServiceState] = useState(false);

  const menu = (
    <Menu
      items={[
        {
          key: '0',
          label: (
            <Link className= "text-md 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/1">
              Cloud Services
            </Link>
          ),
        },
        {
          key: '1',
          label: (
            <Link className= "text-md 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/2">
              DevOps
            </Link>
          ),
        },
        {
          key: '2',
          label: (
            <Link className= "text-md 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/3">
              Data Science
            </Link>
          ),
        },
        {
          key: '3',
          label: (
            <Link className= "text-md 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/4">
              RPA
            </Link>
          ),
        },
        {
          key: '4',
          label: (
            <Link className= "text-md 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/5">
              SAP
            </Link>
          ),
        },
        {
          key: '5',
          label: (
            <Link className= "text-md 2xl:text-lg" onClick={() => setNavbar(!navbar)} rel="noopener noreferrer" to="/technologies/6">
              Python
            </Link>
          ),
        },

      ]}
    />
  );

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 py-3 md:py-0 mx-auto lg:max-w-10xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="">
              <Link to="/" className="flex items-center" onClick={() => setNavbar(false)}>
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8 2xl:h-10" alt="Tekiehub Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Tekie Hub
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
              ${navbar ? "block" : "hidden" }`
            }
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-md 2xl:text-lg">
              <li className="text-gray-600 hover:text-blue-600 ">
                <Link to="/" onClick={() => setNavbar(!navbar)}>Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Dropdown overlay={menu} onOpenChange={() => { setServiceState(!serviceState) }}>
                  <Link onClick={(e) => e.preventDefault()} >
                    <Space align="center" >
                      Technologies
                      {
                        serviceState ?
                          <UpOutlined className="text-[10px] align-middle" /> :
                          <DownOutlined className="text-[10px] align-middle" />
                      }
                    </Space>
                  </Link>
                </Dropdown>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/about" onClick={() => setNavbar(!navbar)}>About US</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/careers" onClick={() => setNavbar(!navbar)}>Careers</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/contact" onClick={() => setNavbar(!navbar)}>Contact US</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}