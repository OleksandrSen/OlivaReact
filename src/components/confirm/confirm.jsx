import React, { useState } from 'react';
import Modal from 'react-modal'
import './confirm.scss'
import 'reset-css'
import Thank from '../thank/thank'
import sprite from '../../img/icons-sprite.svg';


Modal.setAppElement('#root')

function Confirm({ ConfirmIsOpen, setConfirmIsOpen, setBasketFormIsOpen }) {
  const [ThankIsOpen, setThankIsOpen] = useState(false)

  return (
    <div>
      <Modal isOpen={ConfirmIsOpen} onRequestClose={() => {
        setConfirmIsOpen(false)
        setBasketFormIsOpen(false)
      }}
        style={
          {
            content: {
              width: '940px',
              // height: '100%',
              margin: ' 10px auto'
            }
          }
        }>
        <section className="confirm">
          <div className="container confirm-block">
            <div className="row">
              <h1 className="confirm__caption col-12">Підтвердження</h1>
              <h4 className="confirm__title col-12">Контактна інформація</h4>
              <div className="confirm__input-block col-7">
                <div className="confirm__input-desc col-4">Ім’я</div>
                <input type="text" className="confirm__input col-10" placeholder="Ім’я" />
              </div>
              <div className="confirm__input-block col-7">
                <div className="confirm__input-desc col-4">Телефон</div>
                <input type="tel" className="confirm__input col-10" placeholder="0 (хх) хх хх ххх" />
              </div>

              <div className="confirm__radio col-7">
                <input className="confirm__radio-input" type="radio" id="scales" name="delivery" checked />
                <label className="confirm__radio-label" for="scales">Самовивіз</label>
                <input className="confirm__radio-input" type="radio" id="horns" name="delivery" />
                <label className="confirm__radio-label" for="horns">Доставка</label>
              </div>

              <h4 className="confirm__title col-12">Адреса доставки</h4>
              <div className="confirm__input-block col-7">
                <div className="confirm__input-desc col-4">Місто</div>
                {/* <svg className="city__svg">
                        <use xlink:href="/images/sprite.svg#marker"></use>
				</svg> */}
                <select className="confirm__city col-10" name="city" id="">
                  <option className="confirm__city" value="poltava" selected>Полтава</option>
                  <option className="confirm__city" value="kiev">Київ</option>
                  <option className="confirm__city" value="lviv">Львів</option>
                </select>
              </div>
              <div className="confirm__input-block confirm__input-block--street col-7">
                <div className="confirm__input-desc col-4">Вулиця</div>
                <input type="text" className="confirm__input col-10" placeholder="Вулиця" />
              </div>

              <div className="confirm__left-block col-7">
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Номер будинку</div>
                  <input type="text" className="confirm__input col-6" placeholder="Номер будинку" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Дверний код</div>
                  <input type="text" className="confirm__input col-6" placeholder="Дверний код" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Під’їзд</div>
                  <input type="text" className="confirm__input col-6" placeholder="Під’їзд" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Доставити в</div>
                  <input type="text" className="confirm__input col-6" placeholder="15:30" />
                </div>
              </div>
              <div className="confirm__right-block col-5">
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Корпус</div>
                  <input type="text" className="confirm__input col-6" placeholder="Корпус" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Квартира</div>
                  <input type="text" className="confirm__input col-6" placeholder="Квартира" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-6">Поверх</div>
                  <input type="text" className="confirm__input col-6" placeholder="Поверх" />
                </div>
              </div>



              <h4 className="confirm__title col-12">Спосіб оплати</h4>
              <div className="confirm__radio">
                <input className="confirm__radio-input" type="radio" id="" name="pay" checked />
                <label className="confirm__radio-label" for="scales">Готівка</label>
                <input className="confirm__radio-input" type="radio" id="" name="pay" />
                <label className="confirm__radio-label" for="horns">Карткою</label>
              </div>

              <div className="confirm__sum col-12">До сплати:
				<span className="confirm__sum--bold"> 170грн</span></div>

              <button className="confirm__button"
                onClick={() => setThankIsOpen(true)}>Підтвердити</button>
            </div>
          </div>

          <svg class="confirm__cross" onClick={() => {
            setConfirmIsOpen(false)
            setBasketFormIsOpen(false)
          }}>
            <use href={sprite + '#cross'}></use>
          </svg>

          <Thank
            ThankIsOpen={ThankIsOpen}
            setThankIsOpen={setThankIsOpen}
            setConfirmIsOpen={setConfirmIsOpen}
            setBasketFormIsOpen={setBasketFormIsOpen} />
        </section>

      </Modal >
    </div >
  )
}


export default Confirm