import React, { useState } from 'react';
import Modal from 'react-modal'
import './confirm.scss'
import 'reset-css'
import Thank from '../thank/thank'
import Cross from '../../cross/cross'

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
              maxWidth: '940px',
              // height: '100%',
              margin: 'auto'
            }
          }
        }>
        <section className="confirm">
          <div className="container confirm-block">
            <div className="row">
              <h1 className="confirm__caption col-12">Підтвердження</h1>
              <h4 className="confirm__title col-12">Контактна інформація</h4>
              <div className="confirm__input-block col-12 col-md-7">
                <div className="confirm__input-desc col-4">Ім’я</div>
                <input type="text" className="confirm__input col-8" placeholder="Ім’я" />
              </div>
              <div className="confirm__input-block col-12 col-md-7">
                <div className="confirm__input-desc col-4">Телефон</div>
                <input type="tel" className="confirm__input col-8" placeholder="0 (хх) хх хх ххх" />
              </div>

              <div className="confirm__radio col-12 col-md-7">
                <input className="confirm__radio-input" type="radio" id="scales" name="delivery" checked />
                <label className="confirm__radio-label col-8 col-md-3" for="scales">Самовивіз</label>
                <input className="confirm__radio-input" type="radio" id="horns" name="delivery" />
                <label className="confirm__radio-label col-8 col-md-3" for="horns">Доставка</label>
              </div>

              <h4 className="confirm__title col-12">Адреса доставки</h4>
              <div className="confirm__input-block col-12 col-md-7">
                <div className="confirm__input-desc col-4">Місто</div>

                <select className="confirm__city col-8" name="city" id="">
                  <option className="confirm__city" value="poltava" selected>Полтава</option>
                  <option className="confirm__city" value="kiev">Кременчук</option>
                  <option className="confirm__city" value="lviv">Суми</option>
                </select>
              </div>
              <div className="confirm__input-block confirm__input-block--street col-12 col-md-7">
                <div className="confirm__input-desc col-4">Вулиця</div>
                <input type="text" className="confirm__input col-8" placeholder="Вулиця" />
              </div>

              <div className="confirm__left-block col-12 col-md-7">
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Номер будинку</div>
                  <input type="number" className="confirm__input col-md-6" placeholder="Номер будинку" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Дверний код</div>
                  <input type="number" className="confirm__input col-md-6" placeholder="Дверний код" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Під’їзд</div>
                  <input type="number" className="confirm__input col-md-6" placeholder="Під’їзд" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Доставити в</div>
                  <input type="time" className="confirm__input col-md-6" placeholder="15:30" />
                </div>
              </div>
              <div className="confirm__right-block col-12 col-md-5">
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Корпус</div>
                  <input type="number" className="confirm__input col-md-6" placeholder="Корпус" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Квартира</div>
                  <input type="text" className="confirm__input col-md-6" placeholder="Квартира" />
                </div>
                <div className="confirm__input-block">
                  <div className="confirm__input-desc col-md-6">Поверх</div>
                  <input type="number" className="confirm__input col-md-6" placeholder="Поверх" />
                </div>
              </div>



              <h4 className="confirm__title col-12">Спосіб оплати</h4>
              <div className="confirm__radio col-12 col-md-7">
                <input className="confirm__radio-input" type="radio" id="" name="pay" checked />
                <label className="confirm__radio-label col-8 col-md-3" for="scales">Готівка</label>
                <input className="confirm__radio-input" type="radio" id="" name="pay" />
                <label className="confirm__radio-label col-8 col-md-3" for="horns">Карткою</label>
              </div>

              <div className="confirm__sum col-12">До сплати:
				<span className="confirm__sum--bold"> 170грн</span></div>

              <button className="confirm__button"
                onClick={() => setThankIsOpen(true)}>Підтвердити</button>
            </div>
          </div>
          <Cross onClick={() => {
            setConfirmIsOpen(false)
            setBasketFormIsOpen(false)
          }} />

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