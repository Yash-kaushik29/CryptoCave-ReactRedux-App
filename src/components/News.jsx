import React, { useState } from 'react'
import { Typography, Select, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Text, Title } = Typography
const { Option } = Select

const demoImageUrl = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const count = simplified ? 6 : 30
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count })
  const { data } = useGetCryptosQuery(100)

  if(isFetching) return (<Loader />)

  console.log(cryptoNews)

  return (
    <Row gutter={[ 24, 24 ]}>
      {!simplified && (
        <Col span={24}>
          <Select showSearch className='select-news' placeholder='Select a Crypto' optionFilterProp='chilren' onChange={(value) => setNewsCategory(value)} filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
            <Option value='Cryptocurrency' >Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select> 
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_black' rel='noreferrer' >
              <div className='news-image-container'>
                <Title level={4} className='news-title'>{news.name}</Title>
                <img style={{ maxWidth: '150px', maxHeight: '100px' }} src={news?.image?.thumbnail?.contentUrl || demoImageUrl} alt='news-image' />
              </div>
              <p>
                {news.description.length > 100 ? `${news.description.substring(0,150)}...` : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} alt='' />
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News