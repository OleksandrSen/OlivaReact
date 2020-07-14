import React, { useState } from 'react';
import Modal from 'react-modal';
import './basket-form.scss';
import Confirm from '../confirm/confirm';
import sprite from '../../../img/icons-sprite.svg';
import Cross from '../../cross/cross';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../../reducer/actions'

Modal.setAppElement('#root');


function BasketForm({ BasketFormIsOpen, setBasketFormIsOpen, basketList }) {
  const [ConfirmIsOpen, setConfirmIsOpen] = useState(false);

  console.log(basketList)

  const newBasketList = basketList
  // .filter((elem) => {
  //   if (elem === null) {
  //     return null;
  //   }
  // })

  console.log({ newBasketList })



  const ShowMeals = ({ newBasketList }) => (
    <table className='basket-form__table col-10'>
      <tbody>
        <tr>
          <th className='basket-form__title basket-form__title--meal'>
            Страва
                  </th>
          <th className='basket-form__title basket-form__title--amount'>
            Кількість
                  </th>
          <th className='basket-form__title basket-form__title--cost'>
            Ціна
                  </th>
          <td className='basket-form__title--delete'></td>
        </tr>

        {newBasketList.map((item) => (
          <tr className='basket-form__line'>
            <td className='basket-form__meal'>
              {item.meal}
            </td>
            <td className='basket-form__amount'>
              <svg className='orderIcon'>
                <use href={sprite + '#minus'}></use>
              </svg>
              <span className='basket-form__number'>{item.qty}</span>
              <svg className='orderIcon'>
                <use href={sprite + '#add'}></use>
              </svg>
            </td>
            <td className='basket-form__cost'>{item.cost} грн.</td>
            <td className='basket-form__btn-delete'>
              <svg className='basket-form__cross-delete'>
                <use href={sprite + '#cross'}></use>
              </svg>
            </td>
          </tr>
        ))
        }

        < tr className='basket-form__bottom' >
          <td colspan='2' className='basket-form__sum'>
            Сума замовлення:
                    <span className='basket-form__sum--bold'>170грн</span>
          </td>
          <td colspan='2'>
            <button
              className='basket-form__button'
              onClick={() => setConfirmIsOpen(true)}
            >
              Замовити
                    </button>
          </td>
        </ tr>
      </tbody>
    </table >
  )

  const NoMeal = () => (
    <div className="noMeal">На жаль, ви ще нічого не замовили.</div>
  )

  return (
    <div className='basket-form__modal'>
      <Modal
        isOpen={BasketFormIsOpen}
        onRequestClose={() => setBasketFormIsOpen(false)}
        style={{
          content: {
            width: '940px',
            minHeight: '555px',
            margin: 'auto',
          },
        }}
      >
        <section className='basket-form container'>
          <div className='row'>
            <h3 className='basket-form__caption col-12'>Кошик</h3>

            {newBasketList.length < 1 ? <NoMeal /> : <ShowMeals newBasketList={newBasketList} />}

            <Cross onClick={() => setBasketFormIsOpen(false)} />

            <Confirm
              ConfirmIsOpen={ConfirmIsOpen}
              setConfirmIsOpen={setConfirmIsOpen}
              setBasketFormIsOpen={setBasketFormIsOpen}
            />
          </div>
        </section>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basketList: state.basketList
  }
}

const mapDispatchToProps = (dispatch) => {

  const { pushMeal } = bindActionCreators(actions, dispatch)
  return {
    pushMeal
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketForm)