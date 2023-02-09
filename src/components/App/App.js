import React from 'react';
import Game from '../Game';
import Header from '../Header';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [record, setRecord] = React.useState([])
  const [isLowPower, setIsLowPower] = React.useState(false)
  const [brokenColumnNum, setBrokenColumnNum] = React.useState(null)
  console.log(isLowPower.toString())
  let average = 0
  try {
    average = record.reduce((a, b) => (a + b)) / record.length
  } catch (error) {
    average = 0
  }

  return (

    <div className={isOpen ? 'modal' : 'wrapper'}>
      <Header
        isLowPower={isLowPower}
        setIsLowPower={setIsLowPower}
        setBrokenColumnNum={setBrokenColumnNum}
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
        <br />
        <h2>Low Power Mode</h2>
        <p>See that toggle above? That turns on Low Power Mode. In Low Power Mode, one of the columns just doesn't have enough juice to light up, and will always display as incorrect.</p>
      </div>
      <div className="game-wrapper">
        <Game
          brokenColumnNum={brokenColumnNum}
          isLowPower={isLowPower}
          setRecord={setRecord}
          record={record}
        />
      </div>
    </div >
  );
}

export default App;
