import React from 'react';
import './main_header.scss';
import Arrow from '../scroll_arrow/scroll_arrow'

function MainHeader() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="main-header__caption">
          <h1 className="main-header__title">Шановні гості!</h1>
          <h4 className="main-header__subtitle">Ми завжди раді бачити Вас<br /> з
					<span className="main-header__subtitle--bold">10:00 до 23:00</span></h4>
          <button className="main-header__button">Меню</button>
        </div>
        <Arrow />
      </div>
    </header >
  );
}

export default MainHeader;