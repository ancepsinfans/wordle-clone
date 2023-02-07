import React from "react";
import { GrRotateRight } from "react-icons/gr";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";



function Endgame({ answer, guesses, setGuesses }) {
  const type = guesses.length < NUM_OF_GUESSES_ALLOWED ? 'happy' : 'sad'

  function handlerReset() {
    setGuesses([])
    window.location.reload();

  }

  return (
    <div className={`banner ${type}`} hidden={!!(guesses.length < NUM_OF_GUESSES_ALLOWED) * (guesses[guesses.length - 1] !== answer)}>
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
