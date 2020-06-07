import React, {useState} from 'react';
import {Layout} from '../Components/Layout';
import {Category} from './Account/Category';
import {NumberPad} from './Account/NumberPad';
import {Note} from './Account/Note';
import {Labels} from './Account/Labels';
import styled from 'styled-components';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


const Account = ()=>{
  const [defaultChoice,setDefaultChoice] = useState({
    category: '-',
    label: '默认',
    note: '',
    amount: '0'
  });
  return (
    <MyLayout name='记账'>
      <Category value={defaultChoice.category}
                onChange={(value)=> setDefaultChoice({...defaultChoice,category: value})} />
      <Labels value={defaultChoice.label}
              onChange={(value)=>setDefaultChoice({...defaultChoice,label: value})} />
      <Note />
      <NumberPad value={defaultChoice}/>
    </MyLayout>
  )
};

export {Account}