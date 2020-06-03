import React from 'react'
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
  return (
    <MyLayout name='记账'>
      <Category/>
      <Labels/>
      <Note/>
      <NumberPad/>
    </MyLayout>
  )
};

export {Account}