import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    background: #06c;
    display: flex;
    padding-left: 0;
    padding-right: 0;
    > li {
      text-align: center;
      width: 50%;
      color: #ffffff;
      padding: 13px 0;
      &.selected {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translate(-50%);
          bottom: 5px;
          background: #ffffff;
          height: 3px;
          width: 25%;
        }
      }
    }
  }
`;

const Category = ()=>{
  const [categoryList] = useState<('+' | '-')[]>(['-','+']);
  const [categoryMap] = useState({'-': '支出','+':'收入'});
  const [category,setCategory] = useState('-');
  return (
    <Wrapper>
      <ul>
        {categoryList.map((item)=>{
          return <li key={item} className={category===item ?'selected':''} onClick={()=>{setCategory(item)}}
          >{categoryMap[item]}</li>
        })}
      </ul>
    </Wrapper>
  )
};

export {Category}