import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu_nav.scss';

export default function MenuNav() {
  return (
    <ul className='menu__info__navigation'>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to='/main-header/a'>Закуски</NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to="/main-header/s">Салати</NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to='/'>Перші страви</NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to='/'>Паста</NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to='/'>Равіолі</NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to='/'>Піца</NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink className='menu__info__navigation__link' to='/'>Десерти</NavLink>
      </li>
    </ul>
  )
}
