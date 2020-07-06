import React from 'react';
import sprite from '../../img/icons-sprite.svg';
import './main_menu.scss';

function MainMenu() {
  return (
    <section className='menu'>
      <div className='row'>
        <h1 className='offset-4 col-4 menu__title'>Меню</h1>
      </div>
      <div className='row menu__info'>
        <div className='offset-4 col-8'>
          <ul className='menu__info__navigation'>
            <li className='menu__info__navigation__item'>Закуски</li>
            <li className='menu__info__navigation__item'>Салати</li>
            <li className='menu__info__navigation__item'>Перші страви</li>
            <li className='menu__info__navigation__item'>Паста</li>
            <li className='menu__info__navigation__item'>Равіолі</li>
            <li className='menu__info__navigation__item'>Піца</li>
            <li className='menu__info__navigation__item'>Десерти</li>
          </ul>
          <table className='menu__list'>
            <tbody>
              <tr className='headerRow'>
                <th className='firstCol'>Назва страви</th>
                <th className='secondCol'>Вага</th>
                <th className='thirdCol'>Ціна</th>
                <th className='fourthCol'>Замовити</th>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Прошутто крудо з грушею</h4>
                </td>
                <td className='secondCol'>165 г</td>
                <td className='thirdCol'>71 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Італійські м'ясні делікатеси</h4>
                  (прошутто крудо, брезаола, салямі, салямі гостра)
                </td>
                <td className='secondCol'>120 г</td>
                <td className='thirdCol'>119 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>1</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Сирна палітра</h4>
                  (сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція
                </td>
                <td className='secondCol'>205 г</td>
                <td className='thirdCol'>121 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Карпаччо із лосося</h4>
                  (з грінками)
                </td>
                <td className='secondCol'>110 г</td>
                <td className='thirdCol'>99 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Тартар із лосося</h4>
                  (з грінками)
                </td>
                <td className='secondCol'>160 г</td>
                <td className='thirdCol'>119 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Антіпасті на двох</h4>
                  (італійські м'ясні та сирні делікатеси)
                </td>
                <td className='secondCol'>390 г</td>
                <td className='thirdCol'>248 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>
                    Брускети з соусом із консервованого тунця
                  </h4>
                  (подаються з овочами)
                </td>
                <td className='secondCol'>160 г</td>
                <td className='thirdCol'>51 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>
                    Брускети з паштетом з гусячої печінки
                  </h4>
                  (під вишневим соусом)
                </td>
                <td className='secondCol'>140 г</td>
                <td className='thirdCol'>61 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Брускети з в'яленими томатами</h4>
                </td>
                <td className='secondCol'>100 г</td>
                <td className='thirdCol'>51 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>1</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
              <tr className='listRow'>
                <td className='firstCol'>
                  <h4 className='food__name'>Вітелло тоннато</h4>
                  (тонко нарізана телятина під соусом із тунця)
                </td>
                <td className='secondCol'>130 г</td>
                <td className='thirdCol'>69 грн.</td>
                <td className='fourthCol'>
                  <svg className='orderIcon'>
                    <use href={sprite + '#minus'}></use>
                  </svg>
                  <span className='orderCounter'>0</span>
                  <svg className='orderIcon'>
                    <use href={sprite + '#add'}></use>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default MainMenu;
