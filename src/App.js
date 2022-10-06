import React from 'react';
import './App.css';
import Header from './components/sections/header';
import Main from './components/sections/main';
import Game from './components/game/game';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Game />
      </Main>
    </>
  );
}

export default App;
