import React from 'react';
import AWS from './CloudTabs/AWS'
import Azure from './CloudTabs/Azure'
import GoogleCloud from './CloudTabs/GoogleCloud'
import SalesForce from './CloudTabs/SalesForce'
import BasicTabs from '../../components/BasicTabs';

const items = [
  {
    key: '1',
    label: (
      <div className='text-lg px-2'>
        AWS
      </div>
    ),
    children: AWS,
  },
  {
    key: '2',
    label: (
      <div className='text-lg px-2'>
        Azure
      </div>
    ),
    children: Azure,
  },
  {
    key: '3',
    label: (
      <div className='text-lg px-2'>
        Google Cloud
      </div>
    ),
    children: GoogleCloud,
  },
  {
    key: '4',
    label: (
      <div className='text-lg px-2'>
        Sales Force
      </div>
    ),
    children: SalesForce,
  },
];

const Cloud = () => {
  return (
    <BasicTabs tabs={items} addon={false}/>
  )
};
export default Cloud;