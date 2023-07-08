import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Row, Col, Table } from 'antd';

const { Header, Sider, Content } = Layout;

const CURD=()=> {
  const [collapsed, setCollapsed] = useState(false);
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const handleDashboardPage = () =>{
    navigate('/admin/dashboardpage')
  }
  

  const [dataSource, setDataSource] = useState([
    {
        id:1,
        name:'Giangggg',
        email:'giang@gmail.com',
        address:'123'
    },
    {
        id:2,
        name:'Giangggg',
        email:'giang@gmail.com',
        address:'123'
    },
    {
        id:3,
        name:'Giangggg',
        email:'giang@gmail.com',
        address:'123'
    },
    {
        id:4,
        name:'Giangggg',
        email:'giang@gmail.com',
        address:'123'
    },
  
  ])
  const columns =[
    {
        key:'1',
        title:'ID',
        dataIndex:'id',
    },
    {
        key:'2',
        title:'Name',
        dataIndex:'name',
    },
    {
        key:'3',
        title:'Email',
        dataIndex:'email',
    },
    {
        key:'4',
        title:'Address',
        dataIndex:'address',
    },
  ]

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
              onClick: handleDashboardPage,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout style={{height:"100vh"}}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          
          <Row>
            <Col md={18}>
            <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
            </Col>
            <Col md={6}>
              <div>
                <Avatar size='16px' icon={<UserOutlined/>}></Avatar>Trường Giang
              </div>
            </Col>
          </Row>
          </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Table
        columns={columns}
        dataSource={dataSource}
        >

        </Table>
        </Content>
        
      </Layout>
    </Layout>
  )
}

export default CURD







