import React from 'react';
import {Layout} from '../Components/Layout';
import {getDate} from '../lib/getDate';
import {LineChart} from './Statistics/LineChart';
import styled from 'styled-components';
import {TopBar} from '../Components/TopBar';

const Wrapper = styled.div`
  .show{
    text-align: center;
    background: #0066cc;
    border-radius: 10px;
    padding:5px 0;
    >span{
      color: white;
    }
`;

const Statistics = () => {
  const expense = 999;
  const income = 888;
  return (
    <Layout name='统计'>
      <Wrapper>
        <TopBar name={`${getDate().year}年${getDate().month}月`}/>
        <div className="topBar">
        </div>
        <LineChart/>
        <div className="show"><span>支出: {expense} 元 | 收入: {income} 元</span></div>
      </Wrapper>
    </Layout>
  );
};

export {Statistics};