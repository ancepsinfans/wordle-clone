import React from 'react';
import { GrCircleQuestion, GrClose } from 'react-icons/gr';

function Header({ isHelp, isOpen, setIsOpen }) {

  return (
    <header>
      <div className='side' />
      <h1>{!(isHelp * isOpen) ? 'Word Game' : 'How to Play'}</h1>
      <div className='side'>
        <button onClick={() => { setIsOpen(!isOpen) }} className='data-reach-dialog-content'>{!(isHelp * isOpen) ? <GrCircleQuestion /> : <GrClose />}</button>
      </div>
    </header>
  );
}

export default Header;
