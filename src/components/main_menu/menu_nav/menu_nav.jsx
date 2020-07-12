import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu_nav.scss';

// import { BrowserRouter as Router } from 'react-router-dom';

export default function MenuNav() {
  return (
    <ul className='menu__info__navigation'>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/appetizer'
        >
          Закуски
        </NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/salad'
        >
          Салати
        </NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/firstmeal'
        >
          Перші страви
        </NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/paste'
        >
          Паста
        </NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/ravioli'
        >
          Равіолі
        </NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/pizza'
        >
          Піца
        </NavLink>
      </li>
      <li className='menu__info__navigation__item'>
        <NavLink
          activeClassName='menu__info__navigation__link--active'
          className='menu__info__navigation__link'
          to='/main-header/dessert'
        >
          Десерти
        </NavLink>
      </li>
    </ul>
  );
}
