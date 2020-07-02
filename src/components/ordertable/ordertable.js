import React from 'react';
import './ordertable.scss';

function Order() {
  return (
    <section className='orderTable'>
      <div className='row'>
        <h1 className='offset-3 col-6 orderTable__title'>
          Забронювати
          <br /> столик
        </h1>
      </div>
      <div className='row'>
        <div className='col-12 orderTable__main'>
          <div className='orderTable__main__table'>
            <div className='orderTable__main__table__num'>1</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
