import React from 'react'
import { Card, Avatar } from 'antd'
import DigitalSolutionImages from '../asserts/DigitalSolutions';
const { Meta } = Card;

const OurServices = () => {
  return (
    <div className='mx-auto mt-10'>
      <div className='w-full mx-auto flex flex-col justify-center text-center my-10'>
        <h1 className='text-4xl m-5 mb-0'>Our Digital Solutions</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <Card className='shadow-lg hover:bg-sky-100 bg-sky-50'>
          <Meta
            avatar={
              <Avatar src={DigitalSolutionImages[0]} alt='DS' 
                className='w-16 h-16'/>
            }
            description={
              <p className='text-[16px]'>
                We are committed to take off the workload from
                your marketing, creative team by providing high quality,
                cost effective digital production solutions that
                help to activate your brand.
              </p>
            }
            title="DIGITAL SOLUTIONS"
          />

        </Card>
        <Card className='shadow-lg hover:bg-sky-100 bg-sky-50'>
          <Meta avatar={<Avatar src={DigitalSolutionImages[1]} alt='PS' 
            className='w-16 h-16'/>}
            description={
              <p className='text-[16px]'>
                Tekiehub with its strong training and staffing background,
                is your trusted outsourcing partner. If you want to
                augment your project team, need help with niche technologies,
                or need to develop a product with cutting edge technologies.
              </p>
            }
            title="PROJECT SERVICES" />

        </Card>
        <Card className='shadow-lg hover:bg-sky-100 bg-sky-50'>
          <Meta avatar={<Avatar src={DigitalSolutionImages[2]} alt='SA' 
            className='w-16 h-16'/>}
            description={
              <p className='text-[16px]'>
                The Challenge Employers face fierce
                competition as many organizations reach out
                to the same candidates. When you find candidates
                with the right combination of skills and experience,
                they may be difficult to approach.
              </p>
            }
            title="STAFF AUGMENTATION" />

        </Card>
        <Card className='shadow-lg hover:bg-sky-100 bg-sky-50'>
          <Meta avatar={<Avatar src={DigitalSolutionImages[3]} alt='CT' 
            className='w-16 h-16'/>}
            description={
              <p className='text-[16px]'>
                Innovative Technology Solutions offers different choices
                when it comes to modes of learning. Whether you prefer
                to learn alone or with a group, ITS makes anything
                possible for your comfort & convenience.
              </p>
            }
            title="CORPORATE TRAINING" />

        </Card>
        <Card className='shadow-lg hover:bg-sky-100 bg-sky-50'>
          <Meta avatar={<Avatar src={DigitalSolutionImages[4]} alt='HTD' 
            className='w-16 h-16'/>}
            description={
              <p className='text-[16px]'>
                We have developed the 'Hire, Train & Deploy'
                model as part of our ongoing commitment to
                providing cost-effective skilled talents
                that help our clients deliver world
                class projects efficiently.
              </p>
            }
            title="HIRE TRAIN & DEPLOY" />

        </Card>
        <Card className='shadow-lg hover:bg-sky-100 bg-sky-50'>
          <Meta avatar={<Avatar src={DigitalSolutionImages[5]} alt='TV' 
            className='w-16 h-16'/>}
            description={
              <p className='text-[16px]'>
                Our International standard training
                infrastructure ensures successful
                learning experience for you.
                We ensure our clients and students
                understand the training objective, desired outcome,
                and prerequisite before enrollment.
              </p>
            }
            title="TRAINING VENUES" />

        </Card>
      </div>
    </div>
  )
}

export default OurServices