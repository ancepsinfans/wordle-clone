import React from 'react';
import { GrCircleQuestion, GrClose } from 'react-icons/gr';

function Header({ isHelp = false, isOpen, setIsOpen }) {
  return (
    <header>
      <div className='side' />
      <h1>{!isHelp ? 'Word Game' : 'How to Play'}</h1>
      <div className='side'>
        <button onClick={() => { setIsOpen(!isOpen) }} >{!isHelp ? <GrCircleQuestion /> : <GrClose />}</button>
      </div>
    </header>
  );
}

export default Header;
