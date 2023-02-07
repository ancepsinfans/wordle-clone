import React from "react";
import LetterTile from "../LetterTile/LetterTile";

function Word({ checkedGuess }) {
  return (
    <p className="guess">
      {Array(5).fill().map((e, i) => (

        <LetterTile key={i} letter={checkedGuess ? checkedGuess[i].letter : null} cellType={checkedGuess ? checkedGuess[i].status : null} />
      ))}
    </p>
  );
}

export default Word;
