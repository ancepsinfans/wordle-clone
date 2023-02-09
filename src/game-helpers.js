export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  function firstPass(gc, ac) {

    const fp = Array(5).fill({ letter: '', status: '' })
    const unmatched = {}

    gc.map((guessChar, index) => {
      const answerChar = ac[index];

      let status;

      if (guessChar === answerChar) {
        status = 'correct';
      } else {
        unmatched[answerChar] = (unmatched[answerChar] || 0) + 1
      }
      fp[index] = {
        letter: guessChar,
        status,
      };
    })

    gc.map((letter, index) => {
      if (letter !== ac[index]) {
        if (unmatched[letter]) {
          fp[index] = {
            letter: letter,
            status: 'misplaced',
          };
          unmatched[letter] = unmatched[letter] - 1
        } else {
          fp[index] = {
            letter: letter,
            status: 'incorrect',
          };
        }
      }
    })

    return fp
  }

  return firstPass(guessChars, answerChars)
}
