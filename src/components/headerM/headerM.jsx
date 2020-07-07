import React from 'react';
import './headerM.scss';
import Social from '../social/social'

function HeaderM() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Меню</h1>
      </div>
      <Social />
    </header >
  );
}
export default HeaderM;