import React from 'react';
import sprite from '../../img/icons-sprite.svg';
import './scroll_arrow.scss';

function Arrow() {
  return (
    <div className="arrow">
      <a href="#" className="arrow__link">
        <div className="arrow__text">Scroll</div>
        <svg className="arrow__svg">
          <use href={sprite + '#arrow'}></use>
        </svg>
      </a>
    </div>
  );
}

export default Arrow;
