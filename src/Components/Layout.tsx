import React from 'react'
import styled from 'styled-components';
import {Bar} from './Bar';
import Nav from './Nav';

const Wrapper = styled.div`
  display: flex;
  height:100vh;
  flex-direction: column;
  >main{
    flex-grow: 1;
    overflow: auto;
  }
`;

const Layout = (props: any)=>{
  return (
    <Wrapper>
      <Bar name={props.name}/>
      <main className={props.className}>
        {props.children}
      </main>
      <Nav/>
    </Wrapper>
  )
};

export {Layout}