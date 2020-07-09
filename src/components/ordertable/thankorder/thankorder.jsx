import React from 'react';
import register from '../../../img/thankorder.png';
import Cross from '../../cross/cross';
import './thankorder.scss';

function ThankOrder() {
  return (
    <section className='thankorder'>
      <div className='container'>
        <Cross />
        <div className='thankorder__icon'>
          <img src={register} alt='thankicon' />
        </div>
        <h3 className='thankorder__title'>
          Дякуємо, столик
          <br /> заброньовано!
        </h3>
      </div>
    </section>
  );
}

export default ThankOrder;
