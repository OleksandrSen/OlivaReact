import React from 'react';
import OrderBtn from '../button';
import Cross from '../../cross/cross';

import './tableform.scss';

function TableForm() {
  return (
    <section className='tableForm'>
      <div className='container'>
        <Cross />
        <div className='row date'>
          <h3 className='date__title'>Оберіть дату</h3>
          <input className='date__input' type='date' placeholder='дд.мм.рр' />
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
          <OrderBtn />
        </div>
      </div>
    </section>
  );
}

export default TableForm;
