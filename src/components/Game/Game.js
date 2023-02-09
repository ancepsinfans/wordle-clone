import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


import Input from '../Input/Input';
import Word from '../Word/Word';
import Endgame from '../Endgame/Endgame';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game({ record, setRecord }) {
  const [guesses, setGuesses] = React.useState([])
  const [answer, setAnswer] = React.useState(sample(WORDS))
  console.info({ answer });

  return (
    <div className='guess-results'>

      {Array(NUM_OF_GUESSES_ALLOWED).fill().map((e, i) => {

        return (<Word key={i} guesses={guesses} answer={answer} idx={i} />)
      }
      )}
      <br />

      <Input
        guesses={guesses}
        setGuesses={setGuesses}
        disabled={(!!(guesses.length < NUM_OF_GUESSES_ALLOWED) * (guesses[guesses.length - 1] !== answer))}
      />

      <Endgame
        setAnswer={setAnswer}
        record={record}
        setRecord={setRecord}
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
      />

    </div>
  );
}

export default Game;
