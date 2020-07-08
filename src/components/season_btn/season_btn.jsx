import React, { useState } from 'react';
import './season_btn.scss';
import Season from '../season/season';

function SeasonBtn() {
  const [showSeason, setShowSeason] = useState(false);

  const onClick = () => {
    setShowSeason(!showSeason);
  };

  return (
    <div className='row'>
      <button className='menu__button' onClick={onClick}>
        Сезонне меню <span className='triangle'>&#x025BE;</span>
      </button>
      {showSeason ? <Season /> : null}
    </div>
  );
}

export default SeasonBtn;
