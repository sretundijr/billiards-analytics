import React from 'react';
import './App.css';

import NineBallGhost from './modules/nineBallGhost/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello new app</h1>
      </header>
      <section className='App-gameContainer'>
        <NineBallGhost />
      </section>
    </div>
  );
}

export default App;
