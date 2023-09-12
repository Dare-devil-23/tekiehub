import React from 'react'
import { MdOutlineSettingsApplications } from 'react-icons/md'
import { AiOutlineSecurityScan, AiFillAndroid, AiOutlineCloud } from 'react-icons/ai'
import { CgInfinity, CgSmartphoneChip } from 'react-icons/cg'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { GoTools } from 'react-icons/go'
import { VscGraph, VscServerProcess } from "react-icons/vsc"
import { TbRobot } from "react-icons/tb"
import { FaEthereum } from "react-icons/fa"
import SkillCircle from './SkillCircle'

const data = [
    {
        percent: 90,
        title: "Cyber Security",
        description: "We apply industry level skills and expertise Securities world by our resources.",
        icon: AiOutlineSecurityScan
    },
    {
        percent: 90,
        title: "Block Chain",
        description: "We utilize blockchain's secure, decentralized, and transparent technology to optimize processes and reduce costs while building trust.",
        icon: FaEthereum
    },
    {
        percent: 92,
        title: "Quantum Computing",
        description: "We accelerate innovation with faster quantum problem-solving technology",
        icon: CgSmartphoneChip
    },
    {
        percent: 93,
        title: "Devops",
        description: "Building application is by our expertise make value by great functionalities.",
        icon: CgInfinity
    },
    {
        percent: 92,
        title: "Cloud Services",
        description: "We excel at leveraging cloud services to deliver exceptional functionalities and seamless user experiences.",
        icon: AiOutlineCloud
    },
    {
        percent: 91,
        title: "Data Engineering",
        description: "Our specialized knowledge unlocks data's potential, delivering innovative solutions and driving tangible outcomes.",
        icon: VscGraph
    },
    {
        percent: 90,
        title: "RPA",
        description: "Our expertise in RPA streamlines operations, automates tasks, and optimizes processes for greater efficiency.",
        icon: TbRobot
    },
    {
        percent: 87,
        title: "SAP",
        description: "We design SAP solutions that optimize business processes, reduce costs, and drive growth.",
        icon: VscServerProcess
    },
    {
        percent: 94,
        title: "Application",
        description: "We apply our skills and expertise to help drive better science, technology, economic activity and societal improvement, both directly.",
        icon: MdOutlineSettingsApplications
    },
    {
        percent: 89,
        title: "Mobile App",
        description: "Building mobile applications requires a deep knowledge of programming and design.",
        icon: AiFillAndroid
    },
    {
        percent: 91,
        title: "Business Intelligence",
        description: "We are leading one of the driving force for building mobile security.",
        icon: HiOutlineLightBulb
    },
    {
        percent: 88,
        title: "Tools",
        description: "Building application is by our expertise make value by great functionalities.",
        icon: GoTools
    },
]
const OurSkills = () => {
    return (
        <div className="min-h-screen">
          <div className='mx-5 md:mx-9 py-10 md:py-14'>
            <div className="rounded-xl bg-cover bg-fixed bg-center bg-[url('https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
              <div className='bg-transparent backdrop-blur-sm py-10 rounded-xl'>
                  <div className='text-4xl text-white text-center pb-10 relative group w-fit mx-auto'>
                      <h1>Our <span className='text-[#28a4d6]'>Skills</span></h1>
                      <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] transition-all duration-700 group-hover:w-full"></span>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-10 2xl:gap-4 m-10'>
                      {
                          data.map((skill, i) => {
                              const Icon = skill.icon
                              return (
                                  <SkillCircle skill={skill} Icon={Icon} key={i} />
                              )
                          })
                      }
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default OurSkills;