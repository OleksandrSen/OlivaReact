import React from 'react';
import OrderBtn from '../button';

import './midTablemir.scss';

function MidTableMirror() {
  return (
    <div className='orderTable__main__table__middlemir'>
      <h5 className='orderTable__main__table__middlemir__title'>
        Столик для
        <br /> компанії
      </h5>
      <p className='orderTable__main__table__middlemir__info'>
        Ідеальний для обіду в
        <br /> колі друзів та рідних
      </p>
      <OrderBtn />
    </div>
  );
}

export default MidTableMirror;
