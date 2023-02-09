import React from "react";
import { GrRotateRight } from "react-icons/gr";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";



function Endgame({ answer, guesses, setGuesses, record, setRecord, setAnswer }) {
  let isGuessCorrect = guesses[guesses.length - 1] === answer
  let hasUsedAllAttempts = guesses.length === NUM_OF_GUESSES_ALLOWED

  const type = isGuessCorrect ? 'happy' : 'sad'

  function handlerReset() {
    const newRecord = [...record, guesses.length]
    setRecord(newRecord)
    setGuesses([])
    isGuessCorrect = false
    hasUsedAllAttempts = false
    setAnswer(sample(WORDS))
    // window.location.reload();

  }

  return (
    <div className={`banner ${type}`} hidden={!(hasUsedAllAttempts || isGuessCorrect)}>
      {type === 'happy' ? (
        <div className="message">
          <div />
          <div>
            <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
          </div>
          <button onClick={handlerReset}>
            <GrRotateRight />
          </button>
        </div>
      ) : (
        <div className="message">
          <div />
          <div>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </div>
          <button onClick={handlerReset}>
            <GrRotateRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default Endgame;
