import styled from 'styled-components';
import day from 'dayjs';
import React from 'react';
import {useRecords} from '../store/useRecords';

const Wrapper = styled.ul`
      > li {
        padding: 3px 5px;
        background: #fff;
        border-radius: 4px;
        margin: 10px 0;
        vertical-align: center;
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
            margin-top: 5px;
          }
          &:nth-child(4){
            float: right;
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

type Props = {
  displayNumber?: number
}

const ShowRecords: React.FC<Props>= (props)=>{
  const {records,deleteRecord} = useRecords();
  const reverseRecords = props.displayNumber? records.slice(0,props.displayNumber).reverse(): records.reverse();
  return (
    <Wrapper>
      {
        (reverseRecords as RecordItem[]).map((record: RecordItem) => {
          const {category,label, note, amount, time} = record;
          return <li key={time}>
            <span>{label}</span>
            <span>{note}</span>
            <span onClick={()=>{deleteRecord(record)}}>{day(time).format('YYYY/MM/DD')}</span>
            <span className={category==='-'?'expense':'income'}>{`￥${amount}`}</span>
          </li>;
        })
      }
    </Wrapper>
  )
};

export {ShowRecords};