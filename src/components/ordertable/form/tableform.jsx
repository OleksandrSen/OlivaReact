import React, { useState } from 'react';
import Modal from 'react-modal';
import ThankOrder from '../thankorder/thankorder';
import Cross from '../../cross/cross';
import './tableform.scss';

Modal.setAppElement('#root');

function TableForm({ TableFormIsOpen, setTableFormIsOpen }) {
  const [ThankIsOpen, setThankIsOpen] = useState(false);
  return (
    <div className='tableForm__modal'>
      <Modal
        isOpen={TableFormIsOpen}
        onRequestClose={() => setTableFormIsOpen(false)}
        style={{
          content: {
            width: '550px',
            height: '350px',
            margin: 'auto',
            borderRadius: '15px',
            overflow: 'hidden',
          },
        }}
      >
        <section className='tableForm'>
          <div className='container'>
            <Cross onClick={() => setTableFormIsOpen(false)} />
            <div className='row date'>
              <h3 className='date__title'>Оберіть дату</h3>
              <input
                className='date__input'
                type='date'
                placeholder='дд.мм.рр'
              />
            </div>
            <div className='row time'>
              <h3 className='time__title'>Оберіть час</h3>
              <input className='time__input' type='time' placeholder='00:00' />
            </div>
            <div className='row name'>
              <h3 className='name__title'>Ваше ім'я</h3>
              <input className='name__input' type='name' placeholder="Ім'я" />
            </div>
            <div className='row phone'>
              <h3 className='phone__title'>Ваш телефон</h3>
              <input
                className='phone__input'
                type='tel'
                placeholder='0 (хх) хх хх ххх'
              />
            </div>
            <div className='row'>
              <button
                className='orderTable__main__table__button'
                onClick={() => setThankIsOpen(true)}
              >
                Замовити
              </button>
            </div>
          </div>
          <ThankOrder
            ThankIsOpen={ThankIsOpen}
            setThankIsOpen={setThankIsOpen}
            setTableFormIsOpen={setTableFormIsOpen}
          />
        </section>
      </Modal>
    </div>
  );
}
export default TableForm;
