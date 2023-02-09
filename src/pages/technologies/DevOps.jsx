import { Tabs } from 'antd';
import Automation from './DevTabs/Automation'
import CloudNative from './DevTabs/CloudNative';
import Culture from './DevTabs/Culture';
import Observability from './DevTabs/Observability';
import Security from './DevTabs/Security';

const items = [
  {
    key: '1',
    label: (
      <div className='text-xl px-5'>
        Automation
      </div>
    ),
    children: Automation,
  },
  {
    key: '2',
    label: (
      <div className='text-xl px-5'>
        Cloud-Native
      </div>
    ),
    children: CloudNative,
  },
  {
    key: '3',
    label: (
      <div className='text-xl px-5'>
        Culture
      </div>
    ),
    children: Culture,
  },
  {
    key: '4',
    label: (
      <div className='text-xl px-5'>
        Security
      </div>
    ),
    children: Security,
  },
  {
    key: '5',
    label: (
      <div className='text-xl px-5'>
        Observability
      </div>
    ),
    children: Observability,
  },
];


const DevOps = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      centered
      tabBarGutter={10}
      type='card'
      className='bg-white py-20 rounded-lg shadow-md md:px-10'
    />
  )
};
export default DevOps;