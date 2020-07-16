import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import './nav.scss';
import Basket from '../basket/basket';
import sprite from '../../img/icons-sprite.svg';


function Nav() {

  const [active, setActive] = useState(false);

  const toogle = () => {
    setActive(!active)
  }

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

          <div className={active ? 'active' : "manu__burger"}
            onClick={toogle}>
            <span className="manu__burger-span"></span>
          </div>

          <div className={active ? "manu__adapt--active" : "manu__adapt"}
            onRequestClose={() => setActive(false)}>
            <ul className="manu__adapt__list">
              <li className='manu__adapt__item'>
                <NavLink activeClassName='manu__link--active' className='manu__link' to='/main-header'>
                  Головна
              </NavLink>
              </li>
              <li className='manu__adapt__item'>
                <NavLink activeClassName='manu__link--active' className='manu__link' to='/menu' >
                  Меню
              </NavLink>
              </li>
              <li className='manu__adapt__item'>
                <NavLink to='/photo' activeClassName='manu__link--active' className='manu__link'>
                  Фотогалерея
              </NavLink>
              </li>
              <li className='manu__adapt__item'>
                <NavLink to='/news' activeClassName='manu__link--active' className='manu__link'>
                  Новини
              </NavLink>
              </li>
              <li className='manu__adapt__item'>
                <NavLink to='/contacts' activeClassName='manu__link--active' className='manu__link'>
                  Контакти
              </NavLink>
              </li>
            </ul>

            {/* <div className='manu__adapt__social'> */}
            <ul className='manu__adapt__social'>
              <li className='social__item--adapt'>
                <a href='#s' className='social__link'>
                  <svg className='social__svg'>
                    <use href={sprite + '#facebook'}></use>
                  </svg>
                </a>
              </li>
              <li className='social__item--adapt'>
                <a href='#s' className='social__link'>
                  <svg className='social__svg'>
                    <use href={sprite + '#instagram'}></use>
                  </svg>
                </a>
              </li>
              <li className='social__item--adapt'>
                <a href='#s' className='social__link'>
                  <svg className='social__svg'>
                    <use href={sprite + '#twitter'}></use>
                  </svg>
                </a>
              </li>
              <li className='social__item--adapt'>
                <a href='#s' className='social__link'>
                  <svg className='social__svg'>
                    <use href={sprite + '#phone'}></use>
                  </svg>
                </a>
              </li>
            </ul>
            {/* </div> */}

          </div>

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
