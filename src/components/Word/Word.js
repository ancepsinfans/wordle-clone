import React from "react";
import LetterTile from "../LetterTile/LetterTile";
import { checkGuess } from '../../game-helpers'

function Word({ guesses, answer, idx, brokenColumnNum, isLowPower }) {

  const guessArr = checkGuess(guesses[idx], answer)
  const lowPowerProblem = (isLowPower ? brokenColumnNum : null)

  return (
    <p className="guess">
      {Array(5).fill().map((e, i) => (

        <LetterTile key={i} letter={guessArr ? guessArr[i].letter : null} cellType={i + 1 === lowPowerProblem ? 'incorrect' : (guessArr ? guessArr[i].status : null)} />

      ))}
    </p>
  );
}

export default Word;
