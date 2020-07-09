import React, { useState } from 'react';
import Modal from 'react-modal'
import './basket-form.scss'
import Confirm from '../confirm/confirm'
import sprite from '../../img/icons-sprite.svg';


Modal.setAppElement('#root')

function BasketForm({ BasketFormIsOpen, setBasketFormIsOpen }) {
  const [ConfirmIsOpen, setConfirmIsOpen] = useState(false)

  return (
    <div classNameName="basket-form__modal">
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
            <table className="basket-form__table col-12">
              <tbody>
                <tr>
                  <th className="basket-form__title basket-form__title--meal">Страва</th>
                  <th className="basket-form__title basket-form__title--amount">Кількість</th>
                  <th className="basket-form__title basket-form__title--cost">Ціна</th>
                  <td className="basket-form__title--delete"></td>
                </tr>
                <tr>
                  <td className="basket-form__meal">Італійські м'ясні делікатеси</td>
                  <td className="basket-form__amount">
                    <button className="basket-form__btn">-</button>
                    <div className="basket-form__number">1</div>
                    <button className="basket-form__btn">+</button>
                  </td>
                  <td>119 грн.</td>
                  <td><button className="basket-form__btn-delete">x</button></td>
                </tr>
                <tr>
                  <td className="basket-form__meal">Брускети з в'яленими томатами</td>
                  <td className="basket-form__amount">
                    <button className="basket-form__btn">-</button>
                    <div className="basket-form__number">1</div>
                    <button className="basket-form__btn">+</button>
                  </td>
                  <td>51 грн.</td>
                  <td><button className="basket-form__btn-delete">x</button></td>
                </tr>
                <tr>
                  <td colspan="2" className="basket-form__sum">
                    Сума замовлення:
						<span className="basket-form__sum--bold">170грн</span>
                  </td>
                  <td colspan="2"><button className="basket-form__button"
                    onClick={() => setConfirmIsOpen(true)}>Замовити</button></td>
                </tr>
              </tbody>
            </table>
            <svg className="basket-form__cross" onClick={() => setBasketFormIsOpen(false)}>
              <use href={sprite + '#cross'}></use>
            </svg>

            <Confirm
              ConfirmIsOpen={ConfirmIsOpen}
              setConfirmIsOpen={setConfirmIsOpen}
              setBasketFormIsOpen={setBasketFormIsOpen} />
          </div>
        </section>
      </Modal >
    </div >
  )
}


export default BasketForm