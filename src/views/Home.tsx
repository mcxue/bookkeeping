import React from 'react'
import {Layout} from '../Components/Layout';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {Icon} from 'Components/Icon';
import {ShowRecords} from '../Components/ShowRecords';

const Wrapper = styled.div`

`

const Home = ()=>{
  const todayTime = new Date().toISOString();
  const year = dayjs(todayTime).format('YYYY');
  const month = dayjs(todayTime).format('MM');
  const day = dayjs(todayTime).format('DD');
  
  return (
    <Layout name='首页'>
      <Wrapper>
        <div className="record">
          <div className="month">今天是</div>
          <div className="number">{year}年{month}月{day}日</div>
          <div className="numbers">点击下方「记账」记一笔吧~</div>
        </div>
        <div className="recent">
          <div className="text">
            <Icon name="note"/>
            <span>最近</span>
          </div>
          <ShowRecords displayNumber={7}/>
      </div>
      </Wrapper>
    </Layout>
  )
};

export {Home}