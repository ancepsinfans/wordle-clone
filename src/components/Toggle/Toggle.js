import React from "react";

function Toggle({ isLowPower, setIsLowPower, setBrokenColumnNum }) {

  const handler = () => {
    setIsLowPower(!isLowPower)
    setBrokenColumnNum(Math.floor(Math.random() * (5) + 1))
  }

  return (
    <label class="switch">
      <input onChange={handler} type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
}

export default Toggle;
