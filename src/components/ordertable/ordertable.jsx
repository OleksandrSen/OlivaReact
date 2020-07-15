import React from 'react';
import TableForTwo from './tableForTwo/tableForTwo';
import BigTable from './BigTable/BigTable';
import MidTable from './midTable/midtable';
import MidTableMirror from './midTable/midtablemir';
import './ordertable.scss';

function Order() {
  return (
    <section className='orderTable'>
      <div className='container'>
        <div className='row'>
          <h1 className='col-12 orderTable__title'>
            Забронювати
            <br /> столик
          </h1>
        </div>
        <div className='row'>
          <div className='col-12 orderTable__main'>
            <div className='orderTable__main__table'>
              <div className='orderTable__main__table__num'>1</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table2'>
              <div className='orderTable__main__table__num'>2</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table3'>
              <div className='orderTable__main__table__num'>3</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table4'>
              <div className='orderTable__main__table__num'>4</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table5'>
              <div className='orderTable__main__table__num'>5</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table6'>
              <div className='orderTable__main__table__num'>6</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table7'>
              <div className='orderTable__main__table__num'>7</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table8'>
              <div className='orderTable__main__table__num'>8</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table9'>
              <div className='orderTable__main__table__num'>9</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table10'>
              <div className='orderTable__main__table__num'>10</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table11'>
              <div className='orderTable__main__table__num'>11</div>
              <MidTable />
            </div>
            <div className='orderTable__main__table table12'>
              <div className='orderTable__main__table__num'>12</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table13'>
              <div className='orderTable__main__table__num'>13</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table14'>
              <div className='orderTable__main__table__num'>14</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table15'>
              <div className='orderTable__main__table__num'>15</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table16'>
              <div className='orderTable__main__table__num'>16</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table17'>
              <div className='orderTable__main__table__num'>17</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table18'>
              <div className='orderTable__main__table__num'>18</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table19'>
              <div className='orderTable__main__table__num'>19</div>
              <BigTable />
            </div>
            <div className='orderTable__main__table table20'>
              <div className='orderTable__main__table__num'>20</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table21'>
              <div className='orderTable__main__table__num'>21</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table22'>
              <div className='orderTable__main__table__num'>22</div>
              <MidTableMirror />
            </div>
            <div className='orderTable__main__table table23'>
              <div className='orderTable__main__table__num'>23</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table24'>
              <div className='orderTable__main__table__num'>24</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table25'>
              <div className='orderTable__main__table__num'>25</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table26'>
              <div className='orderTable__main__table__num'>26</div>
              <TableForTwo />
            </div>
            <div className='orderTable__main__table table27'>
              <div className='orderTable__main__table__num'>27</div>
              <TableForTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
