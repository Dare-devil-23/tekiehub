import React from 'react'

const Apache = (
  <div className='w-4/5 mx-auto py-10 text-lg'>
    <h1 className='text-2xl font-bold'>Apache Hadoop</h1>
    <div>
      <br />
      <p className='md:px-5 text-gray-500'>
        Apache Hadoop is an open-source framework that helps in distributed processing and
        computing of large datasets over a cluster of thousands of computers, i.e., it can store
        and manage a large amount of data. It is an ideal tool to deal with large data processing
        and high-level computations.
      </p>
      <br />
      <p className='md:px-5'>
        The following are some important features and usage of Hadoop:
      </p>
      <br />
      <div className='md:px-5'>
        <ul className='md:px-10 list-disc pl-5 text-gray-500'>
          <li>
            Efficiently scales large amounts of data on thousands of Hadoop clusters.
          </li>
          <br />
          <li>
            Uses Hadoop Distributed File System (HDFS) for data storage and to achieve
            parallel computing.
          </li>
          <br />
          <li>
            Provides fault tolerance and high availability even in unfavorable conditions.
          </li>
          <br />
          <li>
            Provides integrated functionality with other data processing modules such as
            Hadoop YARN, Hadoop MapReduce, and many others.
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Apache