import React from 'react';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import sprite from '../../img/icons-sprite.svg';
import './scroll_arrow.scss';

const Bounce = styled.div`animation: 3s ${keyframes`${pulse}`} infinite ease `;

function Arrow() {
  return (
    <div className="arrow">
      <Bounce>
        <a href="#main" className="arrow__link">
          <div className="arrow__text">Scroll</div>
          <svg className="arrow__svg">
            <use href={sprite + '#arrow'}></use>
          </svg>
        </a>
      </Bounce>
    </div>
  );
}

export default Arrow;
