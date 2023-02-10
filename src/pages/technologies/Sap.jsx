import React from 'react'
import { Tabs } from 'antd'
import ERP from "./SapTabs/ERP"
import  HANA from "./SapTabs/HANA"
import HanaCloud from "./SapTabs/HanaCloud"

const items = [
  {
    key: '1',
    label: (
      <div className='text-xl px-5'>
        ERP
      </div>
    ),
    children: ERP,
  },
  {
    key: '2',
    label: (
      <div className='text-xl px-5'>
        S/4 HANA
      </div>
    ),
    children: HANA,
  },
  {
    key: '3',
    label: (
      <div className='text-xl px-5'>
        S/4 HANA Cloud
      </div>
    ),
    children: HanaCloud,
  },
];

const Sap = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      animated={{tabPane:true}}
      centered
    />
  )
}

export default Sap