import React from 'react';
import Game from '../Game';
import Header from '../Header';

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className={isOpen ? 'modal' : 'wrapper'}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={!isOpen ? 'visually-hidden' : 'modal-content'}>
        <Header isHelp={true} isOpen={isOpen} setIsOpen={setIsOpen} />
        <p>as;ldkfj</p>
      </div>
      <div className="game-wrapper">
        <Game />
      </div>
    </div >
  );
}

export default App;
