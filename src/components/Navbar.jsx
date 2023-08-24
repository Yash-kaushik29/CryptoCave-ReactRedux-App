import React from 'react'
import { Typography, Button, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, FundOutlined, BulbOutlined } from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'

const Navbar = () => {

  const { Title } = Typography

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Title level={2} className='logo'>
                <Link to='/'>CrpytoCave</Link>
            </Title>
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined />}>
                <Link to='./'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to='./cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to='./exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to='./news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar