import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './nav.scss';
import Basket from '../basket/basket';

function Nav() {

  return (
    <div className='navigation'>
      <div className='container'>
        <div className='navigation__block row'>
          <ul className='manu manu--left col-5'>
            <li className='manu__item'>
              <NavLink activeClassName='manu__link--active' className='manu__link' to='/main-header'>
                Головна
              </NavLink>
            </li>
            <li className='manu__item'>
              <NavLink activeClassName='manu__link--active' className='manu__link' to='/menu' >
                Меню
              </NavLink>
            </li>
            <li className='manu__item'>
              <NavLink to='/photo' activeClassName='manu__link--active' className='manu__link'>
                Фотогалерея
              </NavLink>
            </li>
          </ul>
          <ul className='manu manu--right offset-2 col-4'>
            <li className='manu__item'>
              <NavLink to='/news' activeClassName='manu__link--active' className='manu__link'>
                Новини
              </NavLink>
            </li>
            <li className='manu__item'>
              <NavLink to='/contacts' activeClassName='manu__link--active' className='manu__link'>
                Контакти
              </NavLink>
            </li>
          </ul>

          <div className='logo'>
            <img src={logo} alt='logo' className='logo__img' />
          </div>

          <Basket />
        </div>
      </div>
    </div >
  );
}

export default Nav;
