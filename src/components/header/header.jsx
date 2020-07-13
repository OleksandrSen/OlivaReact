import React from 'react';
import './header.scss';

import Social from './social/social'

function Header({ title }) {
  return (
    <header className={title === 'Меню' ? 'headerM' : "header"}>
      <div className="container">
        <h1 className="header__title">{title}</h1>
      </div>
      <Social />
    </header >
  );
}
export default Header;