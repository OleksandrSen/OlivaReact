import React from 'react';
import Modal from 'react-modal'
import './thank.scss'
import sprite from '../../img/icons-sprite.svg';
import meal from '../../img/meal.png';

Modal.setAppElement('#root')

function Thank({ ThankIsOpen, setThankIsOpen }) {

  return (
    <div>
      <Modal isOpen={ThankIsOpen} onRequestClose={() => setThankIsOpen(false)}
        style={
          {
            content: {
              width: '940px',
              height: '390px'
            }
          }
        }>
        <section className="thank">
          <img src={meal} alt="meal" class="thank__img" />
          <h1 className="thank__title">Дякуємо за замовлення!</h1>
          <h3 className="thank__subtitle">Очікуйте дзвінка від кур’єра</h3>
          <svg class="thank__cross" onClick={() => setThankIsOpen(false)}>
            <use href={sprite + '#cross'}></use>
          </svg>
        </section>
      </Modal>
    </div>
  )
}


export default Thank