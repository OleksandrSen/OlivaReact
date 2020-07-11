import React, { useState } from 'react';
import TableForm from '../form/tableform';
import './bigTable.scss';

function BigTable() {
  const [TableFormIsOpen, setTableFormIsOpen] = useState(false);
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

export default BigTable;
