import React from 'react'
import { Card } from 'antd'
import DigitalSolutionImages from '../asserts/DigitalSolutions';

const data = [
  {
    title: 'DIGITAL SOLUTIONS',
    description: `We are committed to take off the workload from
    your marketing, creative team by providing high quality,
    cost effective digital production solutions that
    help to activate your brand.`,
    avatar: DigitalSolutionImages[0]
  },
  {
    title: `PROJECT SERVICES`,
    description: `Tekiehub with its strong training and staffing background,
    is your trusted outsourcing partner. If you want to
    augment your project team, need help with niche technologies,
    or need to develop a product with cutting edge technologies.`,
    avatar: DigitalSolutionImages[1]
  },
  {
    title: `STAFF AUGMENTATION`,
    description: ` The Challenge Employers face fierce
    competition as many organizations reach out
    to the same candidates. When you find candidates
    with the right combination of skills and experience,
    they may be difficult to approach.`,
    avatar: DigitalSolutionImages[2]
  },
  {
    title: `CORPORATE TRAINING`,
    description: `Innovative Technology Solutions offers different choices
    when it comes to modes of learning. Whether you prefer
    to learn alone or with a group, ITS makes anything
    possible for your comfort & convenience.`,
    avatar: DigitalSolutionImages[3]
  },
  {
    title: `HIRE TRAIN & DEPLOY`,
    description: `We have developed the 'Hire, Train & Deploy'
    model as part of our ongoing commitment to
    providing cost-effective skilled talents
    that help our clients deliver world
    class projects efficiently.`,
    avatar: DigitalSolutionImages[4]
  },
  {
    title: `TRAINING VENUES`,
    description: `Our International standard training
    infrastructure ensures successful
    learning experience for you.
    We ensure our clients and students
    understand the training objective, desired outcome,
    and prerequisite before enrollment.`,
    avatar: DigitalSolutionImages[5]
  },
]
const OurServices = () => {
  return (
    <div className='mx-auto mt-10'>
      <div className='w-full mx-auto flex flex-col justify-center text-center my-10'>
        <h1 className='text-4xl m-5 mb-0'>Our Digital Solutions</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          data.map((item, i) => (
            <Card key={i} className="gap-4 shadow-lg hover:shadow-2xl rounded flex flex-col">
              <div className='flex align-middle items-center gap-5'>
                <img src={item.avatar} className="rounded-full hue-rotate-[300deg]" alt={i} width={70} height={70}/>
                <h1 className='text-lg font-bold'>{item.title}</h1>
              </div>
              <div className='text-lg p-5'>
                {item.description}
              </div>
            </Card>
          ))
        }

      </div>
    </div>
  )
}

export default OurServices