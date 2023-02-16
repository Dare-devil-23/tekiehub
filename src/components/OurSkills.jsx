import React from 'react'
import { MdOutlineSecurity, MdOutlineSettingsApplications, MdAdminPanelSettings } from 'react-icons/md'
import { AiOutlineSecurityScan, AiFillAndroid } from 'react-icons/ai'
import { CgInfinity } from 'react-icons/cg'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { GoTools } from 'react-icons/go'
import { VscGraph, VscServerProcess } from "react-icons/vsc"
import { TbRobot } from "react-icons/tb"
import { CloudOutlined } from '@ant-design/icons';
import VisibilitySensor from "react-visibility-sensor";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
    {
        percent: 90,
        title: "Cyber Security",
        description: "We apply industry level skills and expertise Securities world by our resources.",
        icon: MdAdminPanelSettings
    },
    {
        percent: 90,
        title: "Network Security",
        description: "We are very happy to strike the top enhancement for network security.",
        icon: AiOutlineSecurityScan
    },
    {
        percent: 92,
        title: "Mobile Security",
        description: "We are leading one of the driving force for building mobile security.",
        icon: MdOutlineSecurity
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
        icon: CloudOutlined
    },
    {
        percent: 91,
        title: "Data Sceience",
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
        icon: GiArtificialIntelligence
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
        <div className="min-h-screen bg-cover bg-fixed bg-center bg-[url('https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
            <div className='bg-transparent backdrop-blur-sm py-10'>
                <div className='text-4xl text-white text-center pb-10 relative group w-fit mx-auto'>
                    <h1>Our <span className='text-[#1c8dc1]'>Skills</span></h1>
                    <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] transition-all duration-700 group-hover:w-full"></span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-10 2xl:gap-4 m-10'>
                    {
                        data.map((skill, i) => {
                            const Icon = skill.icon
                            return (
                                <div className='text-center' key={i}>
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? skill.percent : 0;
                                            return (
                                                <CircularProgressbar
                                                    value={percentage}
                                                    text={`${percentage}%`}
                                                    className='w-40 h-40 mx-auto'
                                                    styles={buildStyles({
                                                        pathTransitionDuration: 1,
                                                    })}
                                                />
                                            );
                                        }}
                                    </VisibilitySensor>
                                    <div className='text-lg text-center mt-5 text-white flex justify-center'>
                                        <span className='mx-2 items-center flex'>
                                            <Icon className='text-2xl' />
                                        </span>
                                        {skill.title}
                                    </div>
                                    <p className='w-full my-5 text-gray-400 text-sm'>{skill.description}</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default OurSkills;