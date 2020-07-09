import React from 'react';
import OrderBtn from '../button';

import './midTable.scss';

function MidTable() {
  return (
    <div className='orderTable__main__table__middle'>
      <h5 className='orderTable__main__table__middle__title'>
        Столик для
        <br /> компанії
      </h5>
      <p className='orderTable__main__table__middle__info'>
        Ідеальний для обіду в
        <br /> колі друзів та рідних
      </p>
      <OrderBtn />
    </div>
  );
}

export default MidTable;
