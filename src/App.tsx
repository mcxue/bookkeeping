import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Components/Nav';

const Wrapper = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
`;



export default function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/detail">
              <Detail/>
            </Route>
            <Route path="/account">
              <Account/>
            </Route>
            <Route path="/label">
              <Label/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/home"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function NoMatch() {
  return <h2>访问的页面不存在</h2>;
}

function Home() {
  return <h2>Home</h2>;
}

function Detail() {
  return <h2>Detail</h2>;
}

function Account() {
  return <h2>Account</h2>;
}

function Label() {
  return <h2>Label</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}