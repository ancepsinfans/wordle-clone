import React from "react";
import { FaPlay } from 'react-icons/fa'
import { VALID_WORDS } from "../../data";

function Input({ guesses, setGuesses, disabled }) {
  const [guess, setGuess] = React.useState('')
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) {
          window.alert("yo, this ain't a five-letter word")
          return
        }
        if (!VALID_WORDS.includes(guess.toLowerCase())) {
          window.alert('either that isn\'t a legit word, or you\'re barking up the wrong tree')
          return
        }


        const newGuesses = [...guesses, guess]
        setGuesses(newGuesses)
        setGuess('')
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <div className="message">
        <input
          disabled={!disabled}
          id="guess-input"
          type='text'
          value={guess.toLowerCase()}
          onChange={(e) => setGuess(e.target.value.toUpperCase())} />
        <div />
        <button className="input-btn" type="submit"><FaPlay /></button>
      </div>
    </form>
  );
}

export default Input;
