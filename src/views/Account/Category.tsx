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

type Props ={
  value: string;
  onChange: (value: string)=>void;
}

const Category: React.FC<Props> = (props)=>{
  const [categoryList] = useState<('+' | '-')[]>(['-','+']);
  const [categoryMap] = useState({'-': '支出','+':'收入'});
  return (
    <Wrapper>
      <ul>
        {categoryList.map((item)=>{
          return <li key={item} className={props.value===item ?'selected':''} onClick={()=>{props.onChange(item)}}
          >{categoryMap[item]}</li>
        })}
      </ul>
    </Wrapper>
  )
};

export {Category}