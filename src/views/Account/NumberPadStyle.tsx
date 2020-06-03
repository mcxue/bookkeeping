import styled from 'styled-components';

const Wrapper = styled.section`
    flex-direction:column;
    width:100vw;
    ::after{
      content:'';
      display: block;
      clear: both;
    }
    .show {
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
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
    >.buttons{
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
  }
`;

export {Wrapper}