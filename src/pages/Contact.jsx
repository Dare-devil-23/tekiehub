import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { Form, Input } from 'antd';
import { motion } from 'framer-motion';
const validateMessages = {
  // eslint-disable-next-line
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line
    email: '${label} is not a valid email!',
  }
};
var createReactClass = require('create-react-class');
const Maps = createReactClass({
  iframe: function () {
    return {
      __html: this.props.iframe
    }
  },

  render: function () {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    );
  }
});
const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
  }
  const handleScroll = () => {
    const element = document.getElementById("content");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.40166585048!2d-96.73947088543058!3d32.91398448429738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1fee73400001%3A0x47ff73f2d26a5964!2s9319%20Lyndon%20B%20Johnson%20Fwy%20Suite%20116%2C%20Dallas%2C%20TX%2075243%2C%20USA!5e0!3m2!1sen!2sin!4v1662753015416!5m2!1sen!2sin" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div className='min-h-screen bg-slate-300'>
      <div className="bg-gradient-to-br from-gray-900 via-[#0f0f43] to-[#107797] hover:bg-gradient-to-tr">
        <div className='flex flex-col  text-white h-80 2xl:h-96 items-center mb-12 bg-transparent backdrop-blur-sm'>
          <div className='h-4/5 flex justify-center flex-col items-center'>
            <div className="p-5 text-5xl">
              Contact Us
            </div>
          </div>
          <Link to="#" onClick={handleScroll}>
            <IoIosArrowDown className='text-[40px] animate-bounce text-white hover:animate-none hover:scale-110 font-thin cursor-pointer' />
          </Link>
        </div>
      </div>
      <div className="md:w-3/4 h-3/4 mx-5 md:mx-auto p-8 py-10 md:p-14 my-16 text-lg bg-white rounded-3xl shadow-xl" id="content">
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
                <li className="mb-1">9319 LBJ Freeway</li>
                <li className="mb-1">Suite 116, Dallas, TX 75243</li>
              </ul>
              <h1 className='text-2xl mb-5'>
                CONTACT US
              </h1>
              <ul className="text-gray-600 my-10">
                <li className="mb-1">+1(972)-757-8767</li>
                <li className="mb-1">admin@tekiehub.com</li>
              </ul>
            </div>
          </div>
          <div className='col-span-2 xl:ml-20'>
            <h1 className='text-4xl mb-10'>
              Lets Connect...
            </h1>
            <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className="mr-5">
              <Form.Item name={['First name']} rules={[{ required: true }]}>
                <Input placeholder="First Name" size='large' className='rounded-md' />
              </Form.Item>
              <Form.Item name={['Last name']} rules={[{ required: true }]}>
                <Input placeholder="Last Name" size='large' className='rounded-md' />
              </Form.Item>
              <Form.Item name={['Email']} rules={[{ type: 'email' }]}>
                <Input placeholder="example@mail.com" size='large' className='rounded-md' />
              </Form.Item>
              <Form.Item name={['Message']}>
                <Input.TextArea placeholder="Message" size='large' className='rounded-md' />
              </Form.Item>
              <Form.Item className='flex justify-center'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  className="text-white bg-gradient-to-r from-[#1072a5] via-[#2096ce] to-[#5f9ab5] hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 font-medium rounded-full text-md w-32 py-3 text-center">
                  Submit
                </motion.button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Maps iframe={iframe}/>
    </div>
  )
}

export default Contact