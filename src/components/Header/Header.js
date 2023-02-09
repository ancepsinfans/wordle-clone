import React from 'react';
import { GrCircleQuestion, GrClose } from 'react-icons/gr';
import Toggle from '../Toggle/Toggle';

function Header({ isHelp = false, isOpen, setIsOpen, average, isLowPower, setIsLowPower, setBrokenColumnNum }) {

  return (
    <header>
      <div className='side' />

      <div className='side' >{!isHelp ? `${average.toFixed(1)} - avg` : null}</div>
      <div className='side' />
      <div className='side' />
      <h1>{!isHelp ? 'Word Game' : 'How to Play'}</h1>
      <div className='side'>{isHelp ? null : 'Low Power'}</div>
      <div className='side'>
        {isHelp ? null :
          <Toggle
            isLowPower={isLowPower}
            setIsLowPower={setIsLowPower}
            setBrokenColumnNum={setBrokenColumnNum}
          />}
      </div>
      <div className='side'>

        <button onClick={() => { setIsOpen(!isOpen) }} >{!isHelp ? <GrCircleQuestion /> : <GrClose />}</button>
      </div>
      <div className='side' />
    </header>
  );
}

export default Header;
