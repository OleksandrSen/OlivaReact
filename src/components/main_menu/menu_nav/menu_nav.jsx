import React from 'react';
import './menu_nav.scss';


export default function MenuNav({ openAppetizer, showAppetizer, openSalad, showSalad,
  showFood, openFood, openFirst, openPaste, openRavioli, openPizza, openDessert }) {
  return (
    <ul className='menu__info__navigation'>
      <li className={openAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openAppetizer}>
        Закуски
      </li>
      <li className={openSalad ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openSalad}>
        Салати
      </li>
      <li className={openFirst ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openFirst}>
        Перші страви
      </li>
      <li className={openPaste ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openPaste}>
        Паста
      </li>
      <li className={openRavioli ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openRavioli}>
        Равіолі
      </li>
      <li className={openPizza ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openPizza}>
        Піца
      </li>
      <li className={openDessert ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openDessert}>
        Десерти
      </li>
    </ul >
  );
}
