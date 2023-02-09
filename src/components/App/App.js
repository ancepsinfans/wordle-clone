import React from 'react';
import Game from '../Game';
import Header from '../Header';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [record, setRecord] = React.useState([])

  let average = 0
  try {
    average = record.reduce((a, b) => (a + b)) / record.length
  } catch (error) {
    average = 0
  }

  return (

    <div className={isOpen ? 'modal' : 'wrapper'}>
      <Header
        average={average}
        isOpen={isOpen}
        setIsOpen={setIsOpen} />
      <div className={!isOpen ? 'totally-hidden' : 'modal-content'}>
        <Header isHelp={true} isOpen={isOpen} setIsOpen={setIsOpen} />
        <br />
        <h2>Basic Play</h2>
        <p>By now, you've probably heard of this game. The rules are simple:</p>
        <ul>
          <li>There's a secret word.</li>
          <li>You have {NUM_OF_GUESSES_ALLOWED} guesses to figure out what it is.</li>
          <li>On each guess, the letters will be colored:</li>
          <ul>
            <li>Grey means the letter isn't in the secret word.</li>
            <li>Yellow means it is, but you've got it in the wrong spot.</li>
            <li>Green means you have a correct letter in the correct spot</li>
          </ul>
          <li>The words are real words.</li>
        </ul>
        And that's really just about it.
      </div>
      <div className="game-wrapper">
        <Game
          setRecord={setRecord}
          record={record}
        />
      </div>
    </div >
  );
}

export default App;
