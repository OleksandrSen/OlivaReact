import React from 'react';
import Modal from 'react-modal';
import register from '../../../img/thankorder.png';
import Cross from '../../cross/cross';
import './thankorder.scss';

Modal.setAppElement('#root');

function ThankOrder({ ThankIsOpen, setThankIsOpen, setTableFormIsOpen }) {
  return (
    <div>
      <Modal
        isOpen={ThankIsOpen}
        onRequestClose={() => {
          setThankIsOpen(false);
          setTableFormIsOpen(false);
        }}
        style={{
          content: {
            width: '550px',
            height: '350px',
            margin: 'auto',
            borderRadius: '15px',
            overflow: 'hidden',
          },
        }}
      >
        <section className='thankorder'>
          <div className='container'>
            <Cross
              onClick={() => {
                setThankIsOpen(false);
                setTableFormIsOpen(false);
              }}
            />
            <div className='thankorder__icon'>
              <img src={register} alt='thankicon' />
            </div>
            <h3 className='thankorder__title'>
              Дякуємо, столик
              <br /> заброньовано!
            </h3>
          </div>
        </section>
      </Modal>
    </div>
  );
}

export default ThankOrder;
