import React, { useState } from 'react';
import Modal from 'react-modal'
import './basket-form.scss'
import Confirm from '../confirm/confirm'
import sprite from '../../img/icons-sprite.svg';


Modal.setAppElement('#root')

function BasketForm({ BasketFormIsOpen, setBasketFormIsOpen }) {
  const [ConfirmIsOpen, setConfirmIsOpen] = useState(false)

  return (
    <div className="basket-form__modal">
      <Modal
        isOpen={BasketFormIsOpen} onRequestClose={() => setBasketFormIsOpen(false)}
        style={
          {
            content: {
              width: '940px',
              height: '555px',
              margin: 'auto'
            }
          }
        }>
        <section className="basket-form container">
          <div className="row">
            <h3 className="basket-form__caption col-12">Кошик</h3>

            <h4 className="basket-form__title col-5">Страва</h4>
            <h4 className="basket-form__title col-3">Кількість</h4>
            <h4 className="basket-form__title col-3">Ціна</h4>

            <ul className="basket-form__list col-5">
              <li className="basket-form__meal col-12">Італійські м'ясні делікатеси</li>
              <li className="basket-form__meal col-12">Брускети з в'яленими томатами</li>
            </ul>

            <ul className="basket-form__amount col-3">
              <li className="basket-form__amount-item">
                <button className="basket-form__btn">-</button>
                <div className="basket-form__number">1</div>
                <button className="basket-form__btn">+</button>
              </li>
              <li className="basket-form__amount-item">
                <button className="basket-form__btn">-</button>
                <div className="basket-form__number">1</div>
                <button className="basket-form__btn">+</button>
              </li>
            </ul>

            <ul className="basket-form__cost col-3">
              <li>119 грн.</li>
              <li>51 грн.</li>
            </ul>

            <ul className="basket-form__delete col-1">
              <li>
                <button className="basket-form__btn">x</button>
              </li>
              <li>
                <button className="basket-form__btn">x</button>
              </li>
            </ul>

            <div className="basket-form__sum col-5">Сума замовлення:
				<span className="basket-form__sum--bold">170грн</span></div>

            <button className="basket-form__button offset-3 col-4"
              onClick={() => setConfirmIsOpen(true)}> Замовити</button>

            <svg class="basket-form__cross" onClick={() => setBasketFormIsOpen(false)}>
              <use href={sprite + '#cross'}></use>
            </svg>
          </div>

          <Confirm
            ConfirmIsOpen={ConfirmIsOpen}
            setConfirmIsOpen={setConfirmIsOpen}
            setBasketFormIsOpen={setBasketFormIsOpen} />
        </section>
      </Modal>
    </div>
  )
}


export default BasketForm