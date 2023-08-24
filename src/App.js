import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, News } from './components'
import './App.css'

const App = () => {

  const { Title } = Typography  
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path='/' exact element={<Homepage />}></Route>
                        <Route path='/exchanges' exact element={<Exchanges />}></Route>
                        <Route path='/cryptocurrencies' exact element={<Cryptocurrencies />}></Route>
                        <Route path='/crypto/:coinId' exact element={<CryptoDetails />}></Route>
                        <Route path='/news' exact element={<News />}></Route>
                    </Routes>
                </div>
            </Layout>
            <div className='footer'>
                <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CrpytoCave <br />
                    All rights reserved
                </Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>Exchanges</Link>
                    <Link to='/news'>News</Link>
                </Space>
            </div>
        </div>
    </div>
  )
}

export default App