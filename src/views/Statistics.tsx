import React from 'react'
import {Layout} from '../Components/Layout';
import {getDate} from '../lib/getDate';
import {LineChart} from './Statistics/LineChart';


const Statistics = ()=>{
  const expense = 999;
  const income = 888;
  return (
    <Layout name='统计'>
      <div className="topBar">
        {getDate().year}年{getDate().month}月
      </div>
      <LineChart/>
  <div className="show"><span>支出: {expense} 元 | 收入: {income} 元</span></div>
    </Layout>
  )
};

export {Statistics}