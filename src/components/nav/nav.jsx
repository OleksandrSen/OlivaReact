import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './nav.scss';
import Basket from '../basket/basket';

function Nav() {
  const [ItemMainClicked, setItemMainClicked] = useState(false)
  const [ItemMenuClicked, setItemMenuClicked] = useState(false)
  const [ItemPhotoClicked, setItemPhotoClicked] = useState(false)
  const [ItemNewsClicked, setItemNewsClicked] = useState(false)
  const [ItemContactsClicked, setItemContactsClicked] = useState(false)


  return (
    <div className='navigation'>
      <div className='container'>
        <div className='navigation__block row'>
          <ul className='manu manu--left col-5'>
            <li className={ItemMainClicked ? 'manu__item--active' : 'manu__item'}
              onClick={() => {
                setItemMainClicked(true)
                setItemMenuClicked(false)
                setItemPhotoClicked(false)
                setItemNewsClicked(false)
                setItemContactsClicked(false)
              }}
              isOpen={ItemMainClicked}>
              <Link to='/main-header' className='manu__link'>
                Головна
              </Link>
            </li>
            <li className={ItemMenuClicked ? 'manu__item--active' : 'manu__item'}
              onClick={() => {
                setItemMenuClicked(true)
                setItemMainClicked(false)
                setItemPhotoClicked(false)
                setItemNewsClicked(false)
                setItemContactsClicked(false)
              }}
              isOpen={ItemMenuClicked}>
              <Link to='/manu' className='manu__link'>
                Меню
              </Link>
            </li>
            <li className={ItemPhotoClicked ? 'manu__item--active' : 'manu__item'}
              onClick={() => {
                setItemPhotoClicked(true)
                setItemMenuClicked(false)
                setItemMainClicked(false)
                setItemNewsClicked(false)
                setItemContactsClicked(false)
              }}
              isOpen={ItemPhotoClicked}>
              <Link to='/photo' className='manu__link'>
                Фотогалерея
              </Link>
            </li>
          </ul>
          <ul className='manu manu--right offset-2 col-4'>
            <li className={ItemNewsClicked ? 'manu__item--active' : 'manu__item'}
              onClick={() => {
                setItemNewsClicked(true)
                setItemPhotoClicked(false)
                setItemMenuClicked(false)
                setItemMainClicked(false)
                setItemContactsClicked(false)
              }}
              isOpen={ItemNewsClicked}>
              <Link to='/news' className='manu__link'>
                Новини
              </Link>
            </li>
            <li className={ItemContactsClicked ? 'manu__item--active' : 'manu__item'}
              onClick={() => {
                setItemContactsClicked(true)
                setItemNewsClicked(false)
                setItemPhotoClicked(false)
                setItemMenuClicked(false)
                setItemMainClicked(false)
              }}
              isOpen={ItemContactsClicked}>
              <Link to='/contacts' className='manu__link'>
                Контакти
              </Link>
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
