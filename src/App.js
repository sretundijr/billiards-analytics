import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import NineBallGhost from './modules/nineBallGhost/index';
import ModalConductor from './uiComponents/modals/index';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Hello new app</h1>
        </header>
        <section className='App-gameContainer'>
          <NineBallGhost />
        </section>
        <div>
          <ModalConductor />
        </div>
      </div>
    </Provider>
  );
}

export { App };
export default App;
