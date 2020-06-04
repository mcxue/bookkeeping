import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import {Home} from './views/Home';
import {Label} from './views/Label';
import {Detail} from './views/Detail';
import {Account} from './views/Account';
import {Statistics} from './views/Statistics';
import {NotFound} from './views/NotFound';

const Wrapper = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
  background: #eee;
`;



export default function App() {
  return (
    <Router>
      <Wrapper>
          <Switch>
            <Route path="/home"><Home/></Route>
            <Route path="/detail"><Detail/></Route>
            <Route path="/account"><Account/></Route>
            <Route path="/label"><Label/></Route>
            <Route path="/statistics"><Statistics/></Route>
            <Redirect exact from="/" to="/home"/>
            <Route path="*"><NotFound/></Route>
          </Switch>
      </Wrapper>
    </Router>
  );
}

