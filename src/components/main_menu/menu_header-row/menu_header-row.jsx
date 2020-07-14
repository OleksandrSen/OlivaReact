import React from 'react';
import './menu_header-row.scss';

export default function MenuHeaderRow() {
  return (
    <thead>
      <tr className='headerRow'>
        <th className='firstCol firstColH'>Назва страви</th>
        <th className='secondCol secondColH'>Вага</th>
        <th className='thirdCol thirdColH'>Ціна</th>
        <th className='fourthCol fourthColH'>Замовити</th>
      </tr>
    </thead>
  );
}
