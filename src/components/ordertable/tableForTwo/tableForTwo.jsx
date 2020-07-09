import React from 'react';
import OrderBtn from '../button';

import './tableForTwo.scss';

function TableForTwo() {
  return (
    <div className='orderTable__main__table__fortwo'>
      <h5 className='orderTable__main__table__fortwo__title'>
        Столик для двох
      </h5>
      <p className='orderTable__main__table__fortwo__info'>
        Ідеальний для
        <br /> романтичної вечері
      </p>
      <OrderBtn />
    </div>
  );
}

export default TableForTwo;
