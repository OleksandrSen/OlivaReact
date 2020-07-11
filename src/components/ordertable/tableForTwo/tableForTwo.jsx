import React, { useState } from 'react';
import TableForm from '../form/tableform';

import './tableForTwo.scss';

function TableForTwo() {
  const [TableFormIsOpen, setTableFormIsOpen] = useState(false);
  return (
    <div className='orderTable__main__table__fortwo'>
      <h5 className='orderTable__main__table__fortwo__title'>
        Столик для двох
      </h5>
      <p className='orderTable__main__table__fortwo__info'>
        Ідеальний для
        <br /> романтичної вечері
      </p>
      <button
        className='orderTable__main__table__button'
        onClick={() => setTableFormIsOpen(true)}
      >
        Замовити
      </button>
      <TableForm
        TableFormIsOpen={TableFormIsOpen}
        setTableFormIsOpen={setTableFormIsOpen}
      />
    </div>
  );
}

export default TableForTwo;
