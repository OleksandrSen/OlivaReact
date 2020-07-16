import React from 'react';
import sprite from '../../../img/icons-sprite.svg';
import './social.scss';

function Social() {
  return (
    <ul className='social'>
      <li className='social__item'>
        <a
          href='https://www.facebook.com/viv.live.trattoria/'
          target='_blank'
          className='social__link'
        >
          <svg className='social__svg'>
            <use href={sprite + '#facebook'}></use>
          </svg>
        </a>
      </li>
      <li className='social__item'>
        <a
          href='https://www.instagram.com/viv.live.trattoria/'
          target='_blank'
          className='social__link'
        >
          <svg className='social__svg'>
            <use href={sprite + '#instagram'}></use>
          </svg>
        </a>
      </li>
      <li className='social__item'>
        <a
          href='https://www.facebook.com/viv.live.trattoria/'
          target='_blank'
          className='social__link'
        >
          <svg className='social__svg'>
            <use href={sprite + '#twitter'}></use>
          </svg>
        </a>
      </li>
      <li className='social__item'>
        <a href='tel:+38099033-35-99' className='social__link'>
          <svg className='social__svg'>
            <use href={sprite + '#phone'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}
export default Social;
