import React from 'react';
import './App.css';
import Header from './components/sections/header';
import Main from './components/sections/main';
import Game from './components/game/game';
import Footer from './components/sections/footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Main>
        <Game />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
