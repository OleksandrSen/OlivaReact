import React from 'react';
import './menu_nav.scss';


export default function MenuNav({ openAppetizer, showAppetizer, openSalad, showSalad,
  showFood, openFood, openFirst, openPaste, openRavioli, openPizza, openDessert, setShowAppetizer }) {


  return (
    <ul className='menu__info__navigation'>
      <li onClick={openAppetizer}
        className={(setShowAppetizer === ('appetizer')) ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}>
        Закуски
      </li>
      <li className={showAppetizer === ('salad') ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openSalad}>
        Салати
      </li>
      <li className={setShowAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openFirst}>
        Перші страви
      </li>
      <li className={setShowAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openPaste}>
        Паста
      </li>
      <li className={setShowAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openRavioli}>
        Равіолі
      </li>
      <li className={setShowAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openPizza}>
        Піца
      </li>
      <li className={setShowAppetizer ? 'menu__info__navigation__item--active' : 'menu__info__navigation__item'}
        onClick={openDessert}>
        Десерти
      </li>
    </ul >
  );
}
