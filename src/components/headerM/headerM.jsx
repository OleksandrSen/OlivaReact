import React from 'react';
import './headerM.scss';
import Social from '../social/social'

function HeaderM() {
  return (
    <header className="headerM">
      <div className="container">
        <h1 className="headerM__title">Меню</h1>
      </div>
      <Social />
    </header >
  );
}
export default HeaderM;