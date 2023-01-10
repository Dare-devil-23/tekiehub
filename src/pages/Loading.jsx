import { Spin } from 'antd'
import React from 'react'
import "../styles/loadingScreen.css"
function Loading() {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <Spin size='large' />
    </div>
    
  )
}

export default Loading