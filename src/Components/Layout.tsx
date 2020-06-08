import React from 'react';
import styled from 'styled-components';
import {Bar} from './Bar';
import Nav from './Nav';

const Wrapper = styled.div`
  display: flex;
  height:100vh;
  min-height: 620px;
  flex-direction: column;
  >main{
    flex-grow: 1;
    overflow: auto;
  }
`;
type Props = {
  name: string;
  className?: string;
}

const Layout:React.FC<Props> = (props)=>{
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