import React from 'react';
import { Tabs } from 'antd';
import { RightOutlined } from '@ant-design/icons'
import AWS from './CloudTabs/AWS'
import Azure from './CloudTabs/Azure'
import GoogleCloud from './CloudTabs/GoogleCloud'
import SalesForce from './CloudTabs/SalesForce'
import MobileHook from '../../components/MobileHook';

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
  const isMobile = MobileHook()
  return (
    <Tabs
      defaultActiveKey='1'
      centered={!isMobile}
      items={items}
      animated={{ tabPane: true }}
      moreIcon={<RightOutlined className='text-2xl' />}
      size='large'
      className='text-lg pt-10'
    />
  )
};
export default Cloud;