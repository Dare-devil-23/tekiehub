import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { Form, Input, notification } from 'antd';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import { LoadingOutlined } from '@ant-design/icons';

const validateMessages = {
  // eslint-disable-next-line
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line
    email: '${label} is not a valid email!',
  }
};

const Contact = () => {
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true)
    emailjs.sendForm('service_yolz71c', 'template_7v6f2rj', '#contact-form', '-WBpEKBZ6jxaAWN7t')
      .then(() => {
        setLoading(false)
        api.success({
          message: 'Message Sent',
          description: 'We will get back to you soon.',
        });
      },
        (e) => {
          setLoading(false)
          api.error({
            message: 'Something went wrong.',
            description: e.text
          })
        }).catch((e) => {
          setLoading(false)
          api.error({
            message: 'Something went wrong.',
            description: e.text
          })
        });
  }
  const handleScroll = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6167683207846!2d-96.69765908577638!3d32.88185768594146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea0920c407493%3A0xc2d413b2b041ad9b!2s10945%20Estate%20Ln%20e212%2C%20Dallas%2C%20TX%2075238%2C%20USA!5e0!3m2!1sen!2sin!4v1681241806700!5m2!1sen!2sin" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div className='min-h-screen bg-slate-300'>
      {contextHolder}
      <div className="bg-gradient-to-br from-gray-900 via-[#0f0f43] to-[#107797] hover:bg-gradient-to-tr">
        <div className='flex flex-col  text-white h-80 2xl:h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
          <div className='h-4/5 flex justify-center flex-col items-center'>
            <motion.div className="p-5 text-5xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.div>
          </div>
          <Link to="#" onClick={handleScroll}>
            <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
          </Link>
        </div>
      </div>
      <div className="md:w-3/4 h-3/4 mx-5 md:mx-auto p-5 py-10 md:p-14 my-16 text-lg bg-white rounded-3xl shadow-xl" id="content">
        <div className='m-5 grid grid-cols-1 lg:grid-cols-3 gap-5' id="content">
          <div>
            <h1 className='text-4xl mb-10'>
              WE ARE HERE!
            </h1>
            <div className='ml-5'>
              <h1 className='text-2xl mb-5'>
                ADDRESS
              </h1>
              <ul className="text-gray-600 my-10">
                <li className="mb-1">10945 Estate Ln</li>
                <li className="mb-1">Suite E212, Dallas, TX 75238</li>
              </ul>
              <h1 className='text-2xl mb-5'>
                CONTACT US
              </h1>
              <ul className="text-gray-600 my-10">
                <li className="mb-1">+1(972)-777-3035</li>
                <li className="mb-1">info@tekiehub.com</li>
              </ul>
            </div>
          </div>
          <div className='col-span-2 xl:ml-20'>
            <h1 className='text-4xl mb-10'>
              Lets Connect...
            </h1>
            <Form name="nest-messages" id='contact-form' onFinish={onFinish} validateMessages={validateMessages} className="md:mr-5">
              <Form.Item name='First Name' rules={[{ required: true }]}>
                <Input placeholder="First Name" size='large' className='rounded-md' name="from_name" />
              </Form.Item>
              <Form.Item name='Last Name' rules={[{ required: true }]}>
                <Input placeholder="Last Name" size='large' className='rounded-md' />
              </Form.Item>
              <Form.Item name='Email' rules={[{ required:true, type: 'email' }]}>
                <Input placeholder="example@mail.com" size='large' className='rounded-md' name="user_email" />
              </Form.Item>
              <Form.Item name='Message' rules={[{ required: true }]}>
                <Input.TextArea placeholder="Message" size='large' className='rounded-md' name="message" />
              </Form.Item>
              <Form.Item className='flex justify-center'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  type="submit"
                  className="text-white bg-gradient-to-r from-[#1072a5] via-[#2096ce] to-[#5f9ab5] hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-full text-md w-32 py-3 text-center">
                  {
                    loading ? <LoadingOutlined className="text-lg" /> : <span>Submit</span>
                  }
                </motion.button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: iframe }} />
    </div>
  )
}

export default Contact