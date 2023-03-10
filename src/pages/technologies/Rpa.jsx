import BluePrism from './RpaTabs/BluePrism'
import UIPath from './RpaTabs/UIPath';
import Automation from './RpaTabs/Automation';
import BasicTabs from '../../components/BasicTabs';

const items = [
  {
    key: '1',
    label: (
      <div className='text-lg px-2'>
        Blue Prism
      </div>
    ),
    children: BluePrism,
  },
  {
    key: '2',
    label: (
      <div className='text-lg px-2'>
        UI Path
      </div>
    ),
    children: UIPath,
  },
  {
    key: '3',
    label: (
      <div className='text-lg px-2'>
        Automation
      </div>
    ),
    children: Automation,
  },
];

const Rpa = () => {
  return (
    <div>
      <div className='md:w-4/5 mx-auto md:py-10 text-lg'>
        <h1 className='text-3xl font-bold'>Robotic Process Automation</h1>
        <br />
        <p>
          Robotic Process Automation (RPA) is a program that enables employees to turn their attention
          to more important, qualitative duties which require critical thinking. RPA uses software “robots”
          to complete repetitive, tedious tasks. Configured by an employee, these robots interact directly
          across computer programs to automatically gather and input data, while triggering actions. And
          not to worry, RPA technology is a user-friendly software that non-technical professionals can set
          up to complete tasks, with no programming requirements.
        </p>
      </div>
      <br />
      <BasicTabs tabs={items} addon={false} />
    </div>
  )
};
export default Rpa;