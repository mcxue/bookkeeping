import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  .show {
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    > .text {
      margin: 10px 20px;
      font-weight: bold;
      white-space: nowrap;
    }
    >.number{
      flex-grow:1;
      text-align: right;
      margin-right: 25px;
      font-family: Consolas, monospace;
    }
  }
`;

const ShowNumber = ()=>{
  return (<Wrapper>
    <div className="show">
      <div className="text">金额</div>
      <div className="number">{'100'}</div>
    </div>
  </Wrapper>)
};

export {ShowNumber}