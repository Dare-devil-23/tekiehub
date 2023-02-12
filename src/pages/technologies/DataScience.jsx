import { Tabs } from 'antd';
import SAS from './DataScienceTabs/SAS'
import Apache from './DataScienceTabs/Apache';
import Tableau from './DataScienceTabs/Tableau';
import PowerBi from './DataScienceTabs/PowerBi';
import Google from './DataScienceTabs/Google';
import MobileHook from '../../components/MobileHook';

const items = [
  {
    key: '1',
    label: (
      <div className='text-xl px-5'>
        SAS
      </div>
    ),
    children: SAS,
  },
  {
    key: '2',
    label: (
      <div className='text-xl px-5'>
        Apache Hadoop
      </div>
    ),
    children: Apache,
  },
  {
    key: '3',
    label: (
      <div className='text-xl px-5'>
        Tableau
      </div>
    ),
    children: Tableau,
  },
  {
    key: '4',
    label: (
      <div className='text-xl px-5'>
        PowerBi
      </div>
    ),
    children: PowerBi,
  },
  {
    key: '5',
    label: (
      <div className='text-xl px-5'>
        Google Analyitcs
      </div>
    ),
    children: Google,
  },
];

const DataScience = () => {
  const isMobile = MobileHook()
  return (
    <div>
      <div className='w-4/5 mx-auto py-10 text-lg'>
        <h1 className='text-3xl font-bold'>Data Science</h1>
        <br />
        <p>
          Data science is the process of drawing useful insights from raw data using a combination of
          different components such as domain expertise, knowledge of math and statistics, programming
          skills, and machine learning models. The insights are later translated by business users and key
          decision-makers into tangible business value.
        </p>
      </div>
      <br />
      <Tabs
        defaultActiveKey="1"
        items={items}
        animated={{ tabPane: true }}
        centered={!isMobile}
      />
    </div>
  )
};
export default DataScience;