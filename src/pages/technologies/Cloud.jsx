import { Tabs } from 'antd';
import AWS from './CloudTabs/AWS'
import Azure from './CloudTabs/Azure'
import GoogleCloud from './CloudTabs/GoogleCloud'
import SalesForce from './CloudTabs/SalesForce'

const items = [
  {
    key: '1',
    label: (
      <div className='text-xl px-5'>
        AWS
      </div>
    ),
    children: AWS,
  },
  {
    key: '2',
    label: (
      <div className='text-xl px-5'>
        Azure
      </div>
    ),
    children: Azure,
  },
  {
    key: '3',
    label: (
      <div className='text-xl px-5'>
        Google Cloud
      </div>
    ),
    children: GoogleCloud,
  },
  {
    key: '4',
    label: (
      <div className='text-xl px-5'>
        Sales Force
      </div>
    ),
    children: SalesForce,
  },
];

const Cloud = () => {
  return (
      <Tabs
        defaultActiveKey="1"
        items={items}
        animated={{ tabPane: true }}
        centered
      />
  )
};
export default Cloud;