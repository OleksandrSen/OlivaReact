import React from 'react';
import Modal from 'react-modal';
import './thank.scss';
import meal from '../../../img/meal.png';
import Cross from '../../cross/cross';

Modal.setAppElement('#root');

function Thank({
  ThankIsOpen,
  setThankIsOpen,
  setConfirmIsOpen,
  setBasketFormIsOpen,
}) {
  return (
    <div>
      <Modal
        isOpen={ThankIsOpen}
        onRequestClose={() => {
          setThankIsOpen(false);
          setConfirmIsOpen(false);
          setBasketFormIsOpen(false);
        }}
        style={{
          content: {
            maxWidth: '940px',
            height: '390px',
            margin: 'auto',
          },
        }}
      >
        <section className='thank'>
          <img src={meal} alt='meal' className='thank__img' />
          <h1 className='thank__title'>Дякуємо за замовлення!</h1>
          <h3 className='thank__subtitle'>Очікуйте дзвінка від кур’єра</h3>

          <Cross
            onClick={() => {
              setThankIsOpen(false);
              setConfirmIsOpen(false);
              setBasketFormIsOpen(false);
            }}
          />
        </section>
      </Modal>
    </div>
  );
}

export default Thank;
