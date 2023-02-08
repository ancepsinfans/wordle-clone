import React from "react";
import LetterTile from "../LetterTile/LetterTile";
import { checkGuess } from '../../game-helpers'

function Word({ guesses, answer, idx }) {

  const guessArr = checkGuess(guesses[idx], answer)
  // console.log(guessArr)

  return (
    <p className="guess">
      {Array(5).fill().map((e, i) => (

        <LetterTile key={i} letter={guessArr ? guessArr[i].letter : null} cellType={guessArr ? guessArr[i].status : null} />
      ))}
    </p>
  );
}

export default Word;
