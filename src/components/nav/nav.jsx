import React from 'react';
import { Link } from 'react-router-dom'
import sprite from '../../img/icons-sprite.svg';
import logo from '../../img/logo.png';
import './nav.scss';
import Basket from '../basket/basket'

function Nav() {
  return (
    <div className='navigation'>
      <div className='container'>
        <div className='navigation__block row'>
          <ul className='manu manu--left col-5'>
            <li className='manu__item'>
              <Link to="/main-header" className='manu__link'>
                Головна
              </Link>
            </li>
            <li className='manu__item'>
              <Link to="/manu" className='manu__link'>
                Меню
              </Link>
            </li>
            <li className='manu__item'>
              <Link to="/photo" className='manu__link'>
                Фотогалерея
              </Link>
            </li>
          </ul>
          <ul className='manu manu--right offset-2 col-4'>
            <li className='manu__item'>
              <Link to="/news" className='manu__link'>
                Новини
              </Link>
            </li>
            <li className='manu__item'>
              <Link to="/contacts" className='manu__link'>
                Контакти
              </Link>
            </li>
          </ul>

          <div className='logo'>
            <img src={logo} alt='logo' className='logo__img' />
          </div>

          <Basket />
          <div className='basket col-1'>
            <a className='basket__link' href='#s'>
              <svg className='basket__svg'>
                <use href={sprite + '#basket'}></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
