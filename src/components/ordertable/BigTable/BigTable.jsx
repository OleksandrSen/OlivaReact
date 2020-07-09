import React from 'react';
import OrderBtn from '../button';

import './bigTable.scss';

function BigTable() {
  return (
    <div className='orderTable__main__table__big'>
      <h5 className='orderTable__main__table__big__title'>
        Столик
        <br /> для святкування
      </h5>
      <p className='orderTable__main__table__big__info'>
        Ідеальний для
        <br /> особливих подій
      </p>
      <OrderBtn />
    </div>
  );
}

export default BigTable;
