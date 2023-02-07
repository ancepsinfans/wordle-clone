import React from "react";

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
        const newGuesses = [...guesses, guess]
        setGuesses(newGuesses)
        setGuess('')
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={!disabled}
        id="guess-input"
        type='text'
        value={guess.toLowerCase()}
        onChange={(e) => setGuess(e.target.value.toUpperCase())} />
    </form>
  );
}

export default Input;
