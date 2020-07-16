import React, { useState } from 'react';
import './menu_nav.scss';


export default function MenuNav({ openAppetizer, showMeal, openSalad,
  openFirst, openPaste, openRavioli,
  openPizza, openDessert, showAppetizer }) {

  // const [activeAp, setActiveAp] = useState(true);

  return (
    <ul className='menu__info__navigation'>
      <li onClick={openAppetizer}
        className={(showAppetizer) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}>
        Закуски
      </li>
      <li className={(showMeal === ('salad')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openSalad}>
        Салати
      </li>
      <li className={(showMeal === ('first')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openFirst}>
        Перші страви
      </li>
      <li className={(showMeal === ('paste')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openPaste}>
        Паста
      </li>
      <li className={(showMeal === ('ravioli')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openRavioli}>
        Равіолі
      </li>
      <li className={(showMeal === ('pizza')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openPizza}>
        Піца
      </li>
      <li className={(showMeal === ('dessert')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openDessert}>
        Десерти
      </li>
    </ul >
  );
}
