import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import add from 'icons/add.svg'

console.log(add);

const NavWrapper = styled.nav`
  line-height:24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
    display:flex;
    >li{
      width:20%;
      vertical-align: center;
      text-align: center;
      padding:16px;
    }
  }
`;

const Nav = ()=>{
  return (
    <NavWrapper>
      <ul>
        <li>
          
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/detail">明细</Link>
        </li>
        <li>
          <img src={add} alt=''/>
          <Link to="/account">记账</Link>
        </li>
        <li>
          <Link to="/label">标签</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
};

export default Nav



