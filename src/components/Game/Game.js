import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers'

import Input from '../Input/Input';
import Word from '../Word/Word';
import Endgame from '../Endgame/Endgame';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])


  return (
    <div className='guess-results'>

      {Array(NUM_OF_GUESSES_ALLOWED).fill().map((e, i) => {

        const guessArr = checkGuess(guesses[i], answer)
        return (<Word key={i} checkedGuess={guessArr} />)
      }
      )}
      <br />



      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        disabled={(!!(guesses.length < NUM_OF_GUESSES_ALLOWED) * (guesses[guesses.length - 1] !== answer))}
      />

      <Endgame
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
      />

    </div>
  );
}

export default Game;
