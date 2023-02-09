import React from 'react';
import { GrCircleQuestion, GrClose } from 'react-icons/gr';

function Header({ isHelp = false, isOpen, setIsOpen, average }) {

  return (
    <header>
      <div className='side' />
      <div className='side' >{!isHelp ? `${average.toFixed(1)} - avg` : null}</div>
      <h1>{!isHelp ? 'Word Game' : 'How to Play'}</h1>
      <div className='side'>
        <button onClick={() => { setIsOpen(!isOpen) }} >{!isHelp ? <GrCircleQuestion /> : <GrClose />}</button>
      </div>
      <div className='side' />
    </header>
  );
}

export default Header;
