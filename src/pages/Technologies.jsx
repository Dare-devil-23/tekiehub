import React from 'react'
import { useParams } from 'react-router-dom'

const Technologies = ()=> {
  let { serviceId } = useParams()
  return (
    <div className='min-h-screen'>technologie {serviceId}</div>
  )
}

export default Technologies