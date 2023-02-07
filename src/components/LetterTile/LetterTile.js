import React from "react";
import styles from '../../'

function LetterTile({ cellType = null, letter }) {
  return (
    <span className={`cell ${cellType}`} >{letter ? letter : null}</span>

  );
}

export default LetterTile;
