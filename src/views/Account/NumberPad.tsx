import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
    width:100vw;
    ::after{
      content:'';
      display: block;
      clear: both;
    }
    >button{
      border: none;
      float:left;
      width:25%;
      height:52px;
      text-align: center;
      line-height: 52px;
      &.ok{
        height: 104px;
        line-height: 104px;
        float:right;
      }
      &.zero{
        width:50%;
      }
      &:nth-child(1) {
        background: #f2f2f2;
      }
      &:nth-child(2), &:nth-child(5) {
        background: #E8E8E8;
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: #DEDEDE;
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: #D3D3D3
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: #C9C9C9
      }
      &:nth-child(14) {
        background: #BFBFBF
      }
      &:nth-child(12) {
        background: #B5B5B5;
      }
    }
`;

const NumberPad =()=>{
  const editNumber = (e: React.MouseEvent)=> {
    const content = (e.target as HTMLButtonElement).textContent
  }
  return (<Wrapper onClick={editNumber}>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button className='delete'>删除</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button className='clear'>清空</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button className='ok'>确认</button>
    <button className='zero'>0</button>
    <button>.</button>
  </Wrapper>)
};
export {NumberPad}