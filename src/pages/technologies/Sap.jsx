import React from 'react'
import ERP from "./SapTabs/ERP"
import  HANA from "./SapTabs/HANA"
import HanaCloud from "./SapTabs/HanaCloud"
import BasicTabs from '../../components/BasicTabs'

const items = [
  {
    key: '1',
    label: (
      <div className='text-lg px-2'>
        ERP
      </div>
    ),
    children: ERP,
  },
  {
    key: '2',
    label: (
      <div className='text-lg px-2'>
        S/4 HANA
      </div>
    ),
    children: HANA,
  },
  {
    key: '3',
    label: (
      <div className='text-lg px-2'>
        S/4 HANA Cloud
      </div>
    ),
    children: HanaCloud,
  },
];

const Sap = () => {
  return (
    <BasicTabs tabs={items} addon={false} />
  )
}

export default Sap