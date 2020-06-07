import React from 'react';
import {Layout} from 'Components/Layout';
import {TopBar} from 'Components/TopBar';
import {useRecords} from '../store/useRecords';
import styled from 'styled-components';

const Wrapper = styled.ul`

      > li {
        padding: 3px 5px;
        background: #fff;
        border-radius: 4px;
        margin: 10px 0;

        &::after {
        content: '';
        display: block;
        clear: both;
        }
        span {
          margin: 0 10px;
          &:nth-child(1) {
            float: left;
          }
          &:nth-child(2) {
            float: left;
            color: #999999;
          }
          &:nth-child(3) {
            float: right;
            font-size: 10px;
            color: #999999;
          }
          &:nth-child(4){
            float: right;
            font-size: 10px;
            &.expense{
              color: red;
            }
            &.income{
              color: blue;
            }
          }
        }
      }
`;

const Detail = () => {
  const {records} = useRecords();
  const displayRecords = records.sort((a:any,b:any)=>{
    return b.time - a.time
  });
  return (
    <Layout name='明细'>
      <TopBar name='全部收支'/>
      <Wrapper>
        {
          displayRecords.map((record: RecordItem) => {
            const {category,label, note, amount, time} = record;
            return <li key={time}><span>{label}</span><span>{note}</span><span>{time}</span><span className={category==='-'?'expense':'income'}>{amount}</span></li>;
          })
        }
      </Wrapper>
    
    </Layout>
  );
};

export {Detail};