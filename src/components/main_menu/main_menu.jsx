import React, { useState } from 'react';
import sprite from '../../img/icons-sprite.svg';
import './main_menu.scss';
import MenuNav from './menu_nav/menu_nav';
import MenuHeaderRow from './menu_header-row/menu_header-row';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { on } from 'cluster';

function MainMenu() {

  const food = [
    {
      meal: 'Прошутто крудо з грушею',
      desk: '',
      weight: 165,
      cost: 71,
      type: 'appetizer'
    },
    {
      meal: "Італійські м'ясні делікатеси",
      desk: '(прошутто крудо, брезаола, салямі, салямі гостра)',
      weight: 120,
      cost: 119,
      type: 'appetizer'
    },
    {
      meal: 'Сирна палітра',
      desk: '(сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція)',
      weight: 205,
      cost: 121,
      type: 'appetizer'
    },
    {
      meal: 'Карпаччо із лосося',
      desk: '(з грінками)',
      weight: 110,
      cost: 99,
      type: 'appetizer'
    },
    {
      meal: 'Тартар із лосося',
      desk: '(з грінками)',
      weight: 160,
      cost: 119,
      type: 'appetizer'
    },
    {
      meal: 'Антіпасті на двох',
      desk: "(італійські м'ясні та сирні делікатеси)",
      weight: 390,
      cost: 248,
      type: 'appetizer'
    },
    {
      meal: 'Брускети з соусом із консервованого тунця',
      desk: '(подаються з овочами)',
      weight: 160,
      cost: 51,
      type: 'appetizer'
    },
    {
      meal: 'Брускети з паштетом з гусячої печінки',
      desk: '(під вишневим соусом)',
      weight: 140,
      cost: 61,
      type: 'appetizer'
    },
    {
      meal: "Брускети з в'яленими томатами",
      desk: '',
      weight: 100,
      cost: 51,
      type: 'appetizer'
    },
    {
      meal: 'Вітелло тоннато',
      desk: '(тонко нарізана телятина під соусом із тунця)',
      weight: 130,
      cost: 69,
      type: 'appetizer'
    },
    // salad
    {
      meal: 'Олів’є з курятиною, шинкою та молодим горошком',
      desk: '',
      weight: 250,
      cost: 145,
      type: 'salad'
    },
    {
      meal: "Салат Романо Houston's",
      desk: '(з домашнім курчам-гриль і арахісовим соусом)',
      weight: 300,
      cost: 165,
      type: 'salad'
    },
    {
      meal:
        'Овочевий салат із булгуром, кінзою, зеленим соусом та гарбузовим насінням',
      desk: '',
      weight: 200,
      cost: 115,
      type: 'salad'
    },
    {
      meal: 'Цуккіні',
      desk:
        '(карпачо з базиліком, рікотою, гарбузовим насінням та соусом горгонзола)',
      weight: 160,
      cost: 115,
      type: 'salad'
    },
    {
      meal: 'Ризото з лисичками та пармезаном ',
      desk: '',
      weight: 250,
      cost: 250,
      type: 'salad'
    },
    {
      meal: 'Зелений салат',
      desk:
        '(із молодим шпинатом, руколою, свіжою м’ятою, грейпфрутом і креветками під чилі- соусом. )',
      weight: 200,
      cost: 265,
      type: 'salad'
    },
    // first
    {
      meal: 'Андалузький гаспачо з овечою фетою',
      desk: '',
      weight: 300,
      cost: 139,
      type: 'first'
    },
    {
      meal: "Окрошка",
      desk: '(з телятиною та шинкою на квасі зі сметаною та гірчицею)',
      weight: 250,
      cost: 130,
      type: 'first'
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з курочкою)',
      weight: 300,
      cost: 190,
      type: 'first'
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з креветками)',
      weight: 300,
      cost: 240,
      type: 'first'
    },
    {
      meal: 'Борщ український',
      desk: '(з реберцем та пампушками)',
      weight: 330,
      cost: 99,
      type: 'first'
    }
  ]

  const Food = ({ food }) => (
    <tbody className='tbody__menu'>
      {food.filter((elem) => {
        if (elem.type === 'appetizer') {
          return elem
        }
        if (elem.type === 'salad') {
          return elem
        }
      }).map((item) => (
        <tr className='listRow' key={item.appetizer}>
          <td className='firstCol'>
            <h4 className='food__name'>{item.meal}</h4>
            {item.desk}
          </td>
          <td className='secondCol'>{item.weight} г</td>
          <td className='thirdCol'>{item.cost} грн.</td>
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
      ))
      }
    </tbody>
  );


  const [showAppetizer, setShowAppetizer] = useState(true);
  const [showSalad, setShowSalad] = useState(false);


  const openAppetizer = () => {
    setShowAppetizer(true);
    setShowSalad(false);
  }

  const openSalad = () => {
    setShowSalad(true);
    setShowAppetizer(false);
  }

  return (
    <section className='menu' id='menu'>
      <div className='row'>
        <h1 className='offset-4 col-4 menu__title'>Меню</h1>
      </div>
      <div className='row menu__info'>
        <div className='offset-4 col-8'>
          <MenuNav
            openAppetizer={openAppetizer}
            showAppetizer={showAppetizer}
            openSalad={openSalad}
            showSalad={showSalad} />
          <table className='menu__list'>
            <MenuHeaderRow />

            {/* {showAppetizer ? <Appetizer appetizer={appetizer} /> : null}
            {showSalad ? <Salad salad={salad} /> : null} */}

            {showAppetizer ? <Food food={food} /> : null}

          </table>
        </div>
      </div>
      <div className='row'>
        <button className='menu__button'>Додати до кошика</button>
      </div>
    </section>
  );
}

export default MainMenu;



  // const Appetizer = ({ appetizer }) => (
  //   <tbody className='tbody__menu'>
  //     {appetizer.map((item) => (
  //       <tr className='listRow' key={item.appetizer}>
  //         <td className='firstCol'>
  //           <h4 className='food__name'>{item.meal}</h4>
  //           {item.desk}
  //         </td>
  //         <td className='secondCol'>{item.weight} г</td>
  //         <td className='thirdCol'>{item.cost} грн.</td>
  //         <td className='fourthCol'>
  //           <svg className='orderIcon'>
  //             <use href={sprite + '#minus'}></use>
  //           </svg>
  //           <span className='orderCounter'>0</span>
  //           <svg className='orderIcon'>
  //             <use href={sprite + '#add'}></use>
  //           </svg>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // );

  // const Salad = ({ salad }) => (
  //   <tbody className='tbody__menu'>
  //     {salad.map((item) => (
  //       <tr className='listRow' key={item.salad}>
  //         <td className='firstCol'>
  //           <h4 className='food__name'>{item.meal}</h4>
  //           {item.desk}
  //         </td>
  //         <td className='secondCol'>{item.weight} г</td>
  //         <td className='thirdCol'>{item.cost} грн.</td>
  //         <td className='fourthCol'>
  //           <svg className='orderIcon'>
  //             <use href={sprite + '#minus'}></use>
  //           </svg>
  //           <span className='orderCounter'>0</span>
  //           <svg className='orderIcon'>
  //             <use href={sprite + '#add'}></use>
  //           </svg>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // );
