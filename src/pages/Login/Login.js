import React from 'react'
import {Button, Divider, Form, Input, Typography, message } from 'antd';
import { useNavigate} from 'react-router-dom';
import {
  GoogleOutlined,
  TwitterOutlined,
  FacebookFilled,
} from '@ant-design/icons';
import './Login.css'
const login=()=>{
  message.success('Login Successfull!')
}

const Login =() => {
const navigate = useNavigate();
  const handleLogin = () => {
    // navigate('/admin/DashboardPage')
  navigate('/admin/dashboardpage')
  };
  return (
     <div className='loginBg'>
        <Form className='loginForm'>
          <Typography.Title >Login</Typography.Title>
          <Form.Item
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter valid email'
              }
            ]}
            label='Email'
            name={'myEmail'}
          >
            <Input placeholder='Enter your email'/>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Please enter your password'
              }
            ]}
            label='Password'
            name={'myPassword'}
          >
            <Input.Password placeholder='Enter your password'/>
            <a href='./SignUp/SignUp.js' style={{float: 'right'}}>SignUp</a>
          </Form.Item>
          <Button type='primary' htmlType='submit' block onClick={handleLogin}>
            Login
          </Button>
          <Divider style={{borderColor: 'black'}}>or Login With</Divider>
          <div className='socialLogin'>
            <GoogleOutlined className='socialIcon' onClick={login} style={{color:'red'}}/>
            <FacebookFilled className='socialIcon' onClick={login} style={{color:'blue'}}/>
            <TwitterOutlined className='socialIcon' onClick={login} style={{color:'blue'}}/>
          </div>
        </Form>
     </div>
  )
}

export default Login
