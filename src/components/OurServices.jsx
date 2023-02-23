import React from 'react'
import { Card } from 'antd'
import DigitalSolutionImages from '../asserts/DigitalSolutions';

const data = [
  {
    title: 'Digitalization',
    description: `We are committed to take off the workload from
    your marketing, creative team by providing high quality,
    cost effective digital production solutions that
    help to activate your brand.`,
    avatar: DigitalSolutionImages[0]
  },
  {
    title: `Automation`,
    description: `Tekiehub with its strong training and staffing background,
    is your trusted outsourcing partner. If you want to
    augment your project team, need help with niche technologies,
    or need to develop a product with cutting edge technologies.`,
    avatar: DigitalSolutionImages[1]
  },
  {
    title: `Decentralization`,
    description: `We have developed the 'Hire, Train & Deploy'
    model as part of our ongoing commitment to
    providing cost-effective skilled talents
    that help our clients deliver world
    class projects efficiently.`,
    avatar: DigitalSolutionImages[4]
  },
  {
    title: `Dativization`,
    description: `Our International standard training
    infrastructure ensures successful
    learning experience for you.
    We ensure our clients and students
    understand the training objective, desired outcome,
    and prerequisite before enrollment.`,
    avatar: DigitalSolutionImages[5]
  },
  {
    title: `CyberSecuritization`,
    description: `Innovative Technology Solutions offers different choices
    when it comes to modes of learning. Whether you prefer
    to learn alone or with a group, ITS makes anything
    possible for your comfort & convenience.`,
    avatar: DigitalSolutionImages[3]
  },
  {
    title: `Staff Augmentation`,
    description: ` The Challenge Employers face fierce
    competition as many organizations reach out
    to the same candidates. When you find candidates
    with the right combination of skills and experience,
    they may be difficult to approach.`,
    avatar: DigitalSolutionImages[2]
  },
]
const OurServices = () => {
  return (
    <div className='bg-slate-100 mt-24'>
      <div className='mx-auto p-5 md:p-10 lg:pb-20'>
        <div className='w-full mx-auto flex flex-col justify-center text-center mb-16 mt-10 md:mt-0'>
          <h1 className='text-4xl xl:text-3xl 2xl:text-4xl m-5 mb-0 relative group w-fit mx-auto'>
            Transform your business to
            <span className="absolute -bottom-1 rounded-lg left-0 w-0 h-1 top-10 bg-[#1c8dc1] transition-all duration-700 group-hover:w-full"></span>
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8'>
          {
            data.map((item, i) => (
              <Card key={i} className="shadow-lg hover:shadow-2xl rounded-lg flex flex-col">
                <div className='flex align-middle items-center gap-5'>
                  <img src={item.avatar} className="rounded-full hue-rotate-[300deg] h-14 2xl:h-16 w-14 2xl:w-16" alt={i} />
                  <h1 className='text-lg xl:text-md font-bold'>{item.title}</h1>
                </div>
                <div className='text-lg md:text-sm 2xl:text-lg p-5'>
                  {item.description}
                </div>
              </Card>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default OurServices