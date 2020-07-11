import React, { useState } from 'react';
import TableForm from '../form/tableform';

import './midTable.scss';

function MidTable() {
  const [TableFormIsOpen, setTableFormIsOpen] = useState(false);
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

export default MidTable;
