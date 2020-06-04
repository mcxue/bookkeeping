import React, {useState} from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  label{
    display: flex;
    justify-content: center;
    background: #ffffff;
    align-items: center;
    >span{
      margin: 5px 20px;
      text-align: center;
      line-height: 46px;
      font-weight: bold;
    }
    >input{
      flex-grow:1;
      text-align: right;
      margin-right: 25px;
      line-height: 46px;
      border: none;
    }
  }
`;

const Note: React.FC =()=>{
  const [note,setNote] = useState('');
  return (<Wrapper>
    <label>
      <span>备注</span>
      <input type="text" placeholder='在这里添加备注'
             value={note}
             onChange={(e)=>setNote(e.target.value)}/>
    </label>
  </Wrapper>)
};
export {Note}