import React from 'react';
import {Cryptocurrencies, News} from '../components';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Row, Col, Statistic} from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Homepage = () => {
const { data, isFetching } = useGetCryptosQuery(10);
const globalStats = data?.data?.stats;
if(isFetching) return 'Loading...'

  return (
    <>
        <Typography.Title level={2} className='heading'>
        Global Crypto Stats
        </Typography.Title>
        <Row>
            <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total}/></Col>
            <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
            <Col span={12}><Statistic title='Total Market cap' value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title='Total 24H volume' value={millify(globalStats.total24hVolume)} /></Col>
            <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className='home-heading-container'>
          <Typography.Title level={2}>Top 10 Cryptocurrencies in the world</Typography.Title>
          <Typography.Title level={3}><Link to={'/cryptocurrencies'}>Show more</Link></Typography.Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-heading-container'>
          <Typography.Title level={2}>Latest Crypto news</Typography.Title>
          <Typography.Title level={3}><Link to={'/news'}>Show more</Link></Typography.Title>
        </div>
        <News simplified/>
    </>
  )
}

export default Homepage
