import React from 'react'
import {Layout} from '../Components/Layout';
import styled from 'styled-components';
import dayjs from 'dayjs';
import {Icon} from 'Components/Icon';
import {ShowRecords} from '../Components/ShowRecords';
import {getDate} from '../lib/getDate';

const Wrapper = styled.div`
  .TopBar {
    background: #0066cc;
    height: 170px;
    color: white;
    .text1 {
      padding: 13px 15px;
      font-size: 16px;
    }
    .text2 {
      padding: 4px 30px;
      text-align: center;
      font-size: 35px;
    }
    .text3 {
      text-align: center;
      padding: 15px 30px;
      font-size: 15px;
    }
  }
  .recordsWrapper {
    margin-top: 20px;
    .text4 {
      font-weight: bold;
      color: #000;
      display: flex;
      margin:10px 10px;
      align-items: center;
      
`

const Home = ()=>{
  return (
    <Layout name='首页'>
      <Wrapper>
        <div className="TopBar">
          <div className="text1">今天是</div>
          <div className="text2">{getDate().year}年{getDate().month}月{getDate().day}日</div>
          <div className="text3">点击下方「记账」记一笔吧~</div>
        </div>
        <div className="recordsWrapper">
          <div className="text4">
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