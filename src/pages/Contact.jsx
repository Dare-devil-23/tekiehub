import React from 'react'
import { Form, Input } from 'antd';

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
  const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.40166585048!2d-96.73947088543058!3d32.91398448429738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1fee73400001%3A0x47ff73f2d26a5964!2s9319%20Lyndon%20B%20Johnson%20Fwy%20Suite%20116%2C%20Dallas%2C%20TX%2075243%2C%20USA!5e0!3m2!1sen!2sin!4v1662753015416!5m2!1sen!2sin" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div className='min-h-screen'>
      <div className='m-5 md:m-20 grid grid-cols-1 lg:grid-cols-3 gap-5'>
        <div className=''>
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
        <div className='col-span-2'>
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
            <Form.Item >
              <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg font-medium rounded-full text-md w-full py-2 text-center ">
                Submit
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Maps iframe={iframe} />
    </div>
  )
}

export default Contact