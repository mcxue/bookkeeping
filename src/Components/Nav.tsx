import styled from 'styled-components';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from './Icon';

const Wrapper = styled.nav`
  background: #e5e5e5;
  font-size: 13px;
  display: flex;
  justify-content:center;
  align-items: center;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
  >.item{
      width:20%;
      padding: 5px 0;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      &.selected{
        color:#00f;
      }
  }
    
`;

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <NavLink className='item' activeClassName="selected" to="/home"><Icon name='home'/>首页</NavLink>
      <NavLink className='item' activeClassName="selected" to="/detail"><Icon name='detail'/>明细</NavLink>
      <NavLink className='item' activeClassName="selected" to="/account"><Icon name='account'/>记账</NavLink>
      <NavLink className='item' activeClassName="selected" to="/label"><Icon name='label'/>标签</NavLink>
      <NavLink className='item' activeClassName="selected" to="/statistics"><Icon name='statistics'/>统计</NavLink>
    </Wrapper>
  );
};

export default Nav;



