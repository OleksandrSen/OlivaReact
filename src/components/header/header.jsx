import React from 'react';
import './header.scss';
import Social from '../social/social'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Новини</h1>
      </div>
      <Social />
    </header >
  );
}
export default Header;