import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    padding:20px 0;
    >div{
      margin: 0 20px;
      font-weight: bold;
      white-space: nowrap;
    }
    >ul{
      flex-grow:1;
      display:flex;
      justify-content: left;
      align-items: center;
      flex-wrap: wrap;
      padding-left:0;
      >li{
        min-width: 52px;
        text-align: center;
        padding:5px 10px;
        margin:5px 10px;
        background: #ddd;
        border-radius: 15px;
        &.selected{
          background: #06C;
          color: #ffffff;
        }
      }
    }
`;

const Labels =()=>{
  const [labels] = useState(['默认','衣','食','住','行']);
  const [selectedLabel,setSelectedLabel] = useState('默认');
  return (
    <Wrapper>
      <div>标签</div>
      <ul>
        {labels.map((label)=>{
            return <li key={label} className={selectedLabel===label ?'selected':''} onClick={()=>{setSelectedLabel(label)}}>{label}</li>
        })}
      </ul>
    </Wrapper>
  )
};
export {Labels}