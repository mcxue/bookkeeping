import React from 'react'
import styled from 'styled-components';
import {Icon} from './Icon';

const Wrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    color: #fff;
    background: #0066cc;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    .icon{
      width:25px;
      height:25px;
    }
    >div {
      font-size: 22px;
      color: #ffffff;
    }
    >p {
      font-size: 15px;
    }
`;

type Props ={
  name:string;
}

const Bar: React.FunctionComponent<Props> = (props)=>{
  return (
    <Wrapper>
      <Icon name='person'/>
      <div>浪浪记账</div>
      <p>{props.name}</p>
    </Wrapper>
  )
};

export {Bar}