import React, { useState } from 'react';
import sprite from '../../img/icons-sprite.svg';
import './basket.scss';
import BasketForm from '../basket-form/basket-form'


function Basket() {
  const [BasketFormIsOpen, setBasketFormIsOpen] = useState(false)

  return (
    <div className="basket col-1">
      <svg className="basket__svg" onClick={() => setBasketFormIsOpen(true)}>
        <use href={sprite + '#basket'}></use>
      </svg>

      <BasketForm BasketFormIsOpen={BasketFormIsOpen} setBasketFormIsOpen={setBasketFormIsOpen} />
    </div>
  )
}

export default Basket;
