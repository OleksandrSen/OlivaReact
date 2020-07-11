import React from 'react';
import sprite from '../../img/icons-sprite.svg';
import './main_menu.scss';
import MenuNav from './menu_nav/menu_nav'
import MenuHeaderRow from './menu_header-row/menu_header-row'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function MainMenu() {

  const appetizer = [
    {
      meal: 'Прошутто крудо з грушею',
      desk: '',
      weight: 165,
      cost: 71
    },
    {
      meal: "Італійські м'ясні делікатеси",
      desk: '(прошутто крудо, брезаола, салямі, салямі гостра)',
      weight: 120,
      cost: 119
    },
    {
      meal: 'Сирна палітра',
      desk: '(сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція)',
      weight: 205,
      cost: 121
    },
    {
      meal: "Карпаччо із лосося",
      desk: '(з грінками)',
      weight: 110,
      cost: 99
    },
    {
      meal: 'Тартар із лосося',
      desk: '(з грінками)',
      weight: 160,
      cost: 119
    },
    {
      meal: "Антіпасті на двох",
      desk: "(італійські м'ясні та сирні делікатеси)",
      weight: 390,
      cost: 248
    },
    {
      meal: 'Брускети з соусом із консервованого тунця',
      desk: '(подаються з овочами)',
      weight: 160,
      cost: 51
    },
    {
      meal: "Брускети з паштетом з гусячої печінки",
      desk: '(під вишневим соусом)',
      weight: 140,
      cost: 61
    },
    {
      meal: "Брускети з в'яленими томатами",
      desk: '',
      weight: 100,
      cost: 51
    },
    {
      meal: "Вітелло тоннато",
      desk: '(тонко нарізана телятина під соусом із тунця)',
      weight: 130,
      cost: 69
    }
  ]

  const salad = [
    {
      meal: 'Олів’є з курятиною, шинкою та молодим горошком',
      desk: '',
      weight: 250,
      cost: 145
    },
    {
      meal: "Салат Романо Houston's",
      desk: '(з домашнім курчам-гриль і арахісовим соусом)',
      weight: 300,
      cost: 165
    },
    {
      meal: 'Овочевий салат із булгуром, кінзою, зеленим соусом та гарбузовим насінням',
      desk: '',
      weight: 200,
      cost: 115
    },
    {
      meal: "Цуккіні",
      desk: '(карпачо з базиліком, рікотою, гарбузовим насінням та соусом горгонзола)',
      weight: 160,
      cost: 115
    },
    {
      meal: 'Ризото з лисичками та пармезаном ',
      desk: '',
      weight: 250,
      cost: 250
    },
    {
      meal: "Зелений салат",
      desk: "(із молодим шпинатом, руколою, свіжою м’ятою, грейпфрутом і креветками під чилі- соусом. )",
      weight: 200,
      cost: 265
    }
  ]

  const Appetizer = ({ appetizer }) => (
    <tbody>
      <MenuHeaderRow />
      {appetizer.map(item => (
        <tr className='listRow' key={item.appetizer} >
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
      ))}
    </tbody>
  )

  const Salad = ({ salad }) => (
    <tbody>
      <MenuHeaderRow />
      {salad.map(item => (
        <tr className='listRow' key={item.salad} >
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
      ))}
    </tbody>
  )



  return (
    <section className='menu' id='menu'>
      <div className='row'>
        <h1 className='offset-4 col-4 menu__title'>Меню</h1>
      </div>
      <div className='row menu__info'>
        <div className='offset-4 col-8'>
          <MenuNav />
          <table className='menu__list'>
            <Route path="/" component={Appetizer} exact>
              <Appetizer appetizer={appetizer} />
            </Route>
            <Route path="/" salad={salad} exact>
              <Salad salad={salad} />
            </Route>
            <Route path="/main-header/appetizer" component={Appetizer}>
              <Appetizer appetizer={appetizer} />
            </Route>
            <Route path="/main-header/salad" salad={salad}>
              <Salad salad={salad} />
            </Route>

            <Route path="/menu/a" component={Appetizer}>
              <Appetizer appetizer={appetizer} />
            </Route>
            <Route path="/menu/s" salad={salad}>
              <Salad salad={salad} />
            </Route>

            {/* <Salad salad={salad} /> */}

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


