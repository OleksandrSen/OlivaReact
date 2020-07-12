import React from 'react';
import './menu_nav.scss';


export default function MenuNav({ openAppetizer, showAppetizer, openSalad, showSalad,
  showFood, openFood, openFirst }) {
  return (
    <ul className='menu__info__navigation'>
      <li className={showAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openAppetizer}>
        Закуски
      </li>
      <li className={showSalad ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openSalad}>
        Салати
      </li>
      <li className={showSalad ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openFirst}>
        Перші страви
      </li>
      <li className='menu__info__navigation__item'>
        Паста
      </li>
      <li className='menu__info__navigation__item'>
        Равіолі
      </li>
      <li className='menu__info__navigation__item'>
        Піца
      </li>
      <li className='menu__info__navigation__item'>
        Десерти
      </li>
    </ul >
  );
}
