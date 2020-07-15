import React, { useState } from 'react';
import sprite from '../../img/icons-sprite.svg';
import './main_menu.scss';
import MenuNav from './menu_nav/menu_nav';
import MenuHeaderRow from './menu_header-row/menu_header-row';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { on } from 'cluster';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../reducer/actions';

function MainMenu({ basketList, pushMeal, changeCount }) {
  const [showFood, setShowFood] = useState(false);
  const [showMeal, setShowMeal] = useState('appetizer');

  const [showAppetizer, setShowAppetizer] = useState(true);



  const openAppetizer = () => {
    setShowAppetizer(true);
    setShowMeal('appetizer');
  };

  const openSalad = () => {
    setShowFood(true);
    setShowMeal('salad');
    setShowAppetizer(false);
  };

  const openFirst = () => {
    setShowFood(true);
    setShowMeal('first');
    setShowAppetizer(false);
  };

  const openPaste = () => {
    setShowFood(true);
    setShowMeal('paste');
    setShowAppetizer(false);
  };

  const openRavioli = () => {
    setShowFood(true);
    setShowMeal('ravioli');
    setShowAppetizer(false);
  };

  const openPizza = () => {
    setShowFood(true);
    setShowMeal('pizza');
    setShowAppetizer(false);
  };

  const openDessert = () => {
    setShowFood(true);
    setShowMeal('dessert');
    setShowAppetizer(false);
  };

  const food = [
    {
      meal: 'Прошутто крудо з грушею',
      desk: '',
      weight: 165,
      cost: 71,
      type: 'appetizer',
      qty: 0,
      id: 0
    },
    {
      meal: "Італійські м'ясні делікатеси",
      desk: '(прошутто крудо, брезаола, салямі, салямі гостра)',
      weight: 120,
      cost: 119,
      type: 'appetizer',
      qty: 0,
      id: 1
    },
    {
      meal: 'Сирна палітра',
      desk: '(сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція)',
      weight: 205,
      cost: 121,
      type: 'appetizer',
      qty: 0,
      id: 2
    },
    {
      meal: 'Карпаччо із лосося',
      desk: '(з грінками)',
      weight: 110,
      cost: 99,
      type: 'appetizer',
      qty: 0,
      id: 3
    },
    {
      meal: 'Тартар із лосося',
      desk: '(з грінками)',
      weight: 160,
      cost: 119,
      type: 'appetizer',
      qty: 0,
      id: 4
    },
    {
      meal: 'Антіпасті на двох',
      desk: "(італійські м'ясні та сирні делікатеси)",
      weight: 390,
      cost: 248,
      type: 'appetizer',
      qty: 0,
      id: 5
    },
    {
      meal: 'Брускети з соусом із консервованого тунця',
      desk: '(подаються з овочами)',
      weight: 160,
      cost: 51,
      type: 'appetizer',
      qty: 0,
      id: 6
    },
    {
      meal: 'Брускети з паштетом з гусячої печінки',
      desk: '(під вишневим соусом)',
      weight: 140,
      cost: 61,
      type: 'appetizer',
      qty: 0,
      id: 7
    },
    {
      meal: "Брускети з в'яленими томатами",
      desk: '',
      weight: 100,
      cost: 51,
      type: 'appetizer',
      qty: 0,
      id: 8
    },
    {
      meal: 'Вітелло тоннато',
      desk: '(тонко нарізана телятина під соусом із тунця)',
      weight: 130,
      cost: 69,
      type: 'appetizer',
      qty: 0,
      id: 9
    },
    // salad
    {
      meal: 'Олів’є з курятиною, шинкою та молодим горошком',
      desk: '',
      weight: 250,
      cost: 145,
      type: 'salad',
      qty: 0,
      id: 10
    },
    {
      meal: "Салат Романо Houston's",
      desk: '(з домашнім курчам-гриль і арахісовим соусом)',
      weight: 300,
      cost: 165,
      type: 'salad',
      qty: 0,
      id: 11
    },
    {
      meal:
        'Овочевий салат із булгуром, кінзою, зеленим соусом та гарбузовим насінням',
      desk: '',
      weight: 200,
      cost: 115,
      type: 'salad',
      qty: 0,
      id: 12
    },
    {
      meal: 'Цуккіні',
      desk:
        '(карпачо з базиліком, рікотою, гарбузовим насінням та соусом горгонзола)',
      weight: 160,
      cost: 115,
      type: 'salad',
      qty: 0,
      id: 13
    },
    {
      meal: 'Ризото з лисичками та пармезаном ',
      desk: '',
      weight: 250,
      cost: 250,
      type: 'salad',
      qty: 0,
      id: 14
    },
    {
      meal: 'Зелений салат',
      desk:
        '(із молодим шпинатом, руколою, свіжою м’ятою, грейпфрутом і креветками під чилі- соусом. )',
      weight: 200,
      cost: 265,
      type: 'salad',
      qty: 0,
      id: 15
    },
    // first
    {
      meal: 'Андалузький гаспачо з овечою фетою',
      desk: '',
      weight: 300,
      cost: 139,
      type: 'first',
      qty: 0,
      id: 16
    },
    {
      meal: 'Окрошка',
      desk: '(з телятиною та шинкою на квасі зі сметаною та гірчицею)',
      weight: 250,
      cost: 130,
      type: 'first',
      qty: 0,
      id: 17
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з курочкою)',
      weight: 300,
      cost: 190,
      type: 'first',
      qty: 0,
      id: 18
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з креветками)',
      weight: 300,
      cost: 240,
      type: 'first',
      qty: 0,
      id: 19
    },
    {
      meal: 'Борщ український',
      desk: '(з реберцем та пампушками)',
      weight: 330,
      cost: 99,
      type: 'first',
      qty: 0,
      id: 20
    },
    {
      meal: 'Андалузький гаспачо з овечою фетою',
      desk: '',
      weight: 300,
      cost: 139,
      type: 'first',
      qty: 0,
      id: 21
    },
    {
      meal: 'Окрошка',
      desk: '(з телятиною та шинкою на квасі зі сметаною та гірчицею)',
      weight: 250,
      cost: 130,
      type: 'first',
      qty: 0,
      id: 22
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з курочкою)',
      weight: 300,
      cost: 190,
      type: 'first',
      qty: 0,
      id: 23
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з креветками)',
      weight: 300,
      cost: 240,
      type: 'first',
      qty: 0,
      id: 24
    },
    {
      meal: 'Борщ український',
      desk: '(з реберцем та пампушками)',
      weight: 330,
      cost: 99,
      type: 'first',
      qty: 1,
      id: 25
    },
    // paste
    {
      meal: 'Тальятелле с телятиной',
      desk: '(в соусе Демиглас, томатами и базиликом)',
      weight: 300,
      cost: 158,
      type: 'paste',
      qty: 0,
      id: 26
    },
    {
      meal: 'Паста Четыре сыра',
      desk: '',
      weight: 350,
      cost: 168,
      type: 'paste',
      qty: 0,
      id: 27
    },
    {
      meal: 'Спагетти с соусом Карбонара',
      desk: '',
      weight: 220,
      cost: 98,
      type: 'paste',
      qty: 0,
      id: 28
    },
    {
      meal: 'Спагетти с креветками',
      desk: '',
      weight: 280,
      cost: 168,
      type: 'paste',
      qty: 0,
      id: 29
    },
    {
      meal: 'Тальятелле с телятиной',
      desk: '(в соусе Демиглас, томатами и базиликом)',
      weight: 300,
      cost: 158,
      type: 'paste',
      qty: 0,
      id: 30
    },
    {
      meal: 'Паста Четыре сыра',
      desk: '',
      weight: 350,
      cost: 168,
      type: 'paste',
      qty: 0,
      id: 31
    },
    {
      meal: 'Спагетти с соусом Карбонара',
      desk: '',
      weight: 220,
      cost: 98,
      type: 'paste',
      qty: 0,
      id: 32
    },
    {
      meal: 'Спагетти с креветками',
      desk: '',
      weight: 280,
      cost: 168,
      type: 'paste',
      qty: 0,
      id: 33
    },
    // ravioli
    {
      meal: 'Равиоли с кроликом',
      desk: '',
      weight: 250,
      cost: 128,
      type: 'ravioli',
      qty: 0,
      id: 34
    },
    {
      meal: 'Равиоли с рикоттой',
      desk: '',
      weight: 250,
      cost: 123,
      type: 'ravioli',
      qty: 0,
      id: 35
    },
    {
      meal: 'Равиоли з соусом із консервованого тунця',
      desk: '(подаються з овочами)',
      weight: 160,
      cost: 51,
      type: 'ravioli',
      qty: 0,
      id: 36
    },
    {
      meal: 'Равиоли з паштетом з гусячої печінки',
      desk: '(під вишневим соусом)',
      weight: 140,
      cost: 61,
      type: 'ravioli',
      qty: 0,
      id: 37
    },
    {
      meal: "Равиоли з в'яленими томатами",
      desk: '',
      weight: 100,
      cost: 51,
      type: 'ravioli',
      qty: 0,
      id: 38
    },
    {
      meal: 'Вітелло тоннато',
      desk: '(тонко нарізана телятина під соусом із тунця)',
      weight: 130,
      cost: 69,
      type: 'ravioli',
      qty: 0,
      id: 39
    },
    // pizza
    {
      meal: 'Піца "Мисливська"',
      desk: '',
      weight: 480,
      cost: 125,
      type: 'pizza',
      qty: 0,
      id: 40
    },
    {
      meal: 'Піца "Барбекю" ',
      desk: '',
      weight: 480,
      cost: 125,
      type: 'pizza',
      qty: 0,
      id: 41
    },
    {
      meal: 'Піца "Мексиканська"',
      desk: '',
      weight: 520,
      cost: 125,
      type: 'pizza',
      qty: 0,
      id: 42
    },
    {
      meal: 'Піца "Street Food"',
      desk: '',
      weight: 520,
      cost: 125,
      type: 'pizza',
      qty: 0,
      id: 43
    },
    {
      meal: 'Піца "4 м`яса"',
      desk: '',
      weight: 480,
      cost: 125,
      type: 'pizza',
      qty: 0,
      id: 44
    },
    // dessert
    {
      meal: 'Вареники з вишнею ',
      desk: '',
      weight: 220,
      cost: 120,
      type: 'dessert',
      qty: 0,
      id: 45
    },
    {
      meal: 'Торт на гречаному меду із трюфельним кремом та соусом сабайон',
      desk: '',
      weight: 145,
      cost: 125,
      type: 'dessert',
      qty: 0,
      id: 46
    },
    {
      meal: 'Сирна палітра',
      desk: '(сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція)',
      weight: 205,
      cost: 121,
      type: 'dessert',
      qty: 0,
      id: 47
    },
    {
      meal: 'Ромова баба з кремом Шантілі ',
      desk: '',
      weight: 150,
      cost: 95,
      type: 'dessert',
      qty: 0,
      id: 48
    },
    {
      meal: 'Штрудель із вишнею, волоськими горіхами та ванільним морозивом ',
      desk: '',
      weight: 170,
      cost: 125,
      type: 'dessert',
      qty: 0,
      id: 49
    },
    {
      meal: 'Ягідний тірамісу ',
      desk: "(італійські м'ясні та сирні делікатеси)",
      weight: 150,
      cost: 125,
      type: 'dessert',
      qty: 0,
      id: 50
    },
    {
      meal: 'Сорбети власного виробництва ',
      desk: '(подаються з овочами)',
      weight: 50,
      cost: 60,
      type: 'dessert',
      qty: 0,
      id: 51
    },
    {
      meal: 'Сирники',
      desk:
        '(з в’яленим виноградом і морозивом сабайон на основі домашньої сметани)',
      weight: 150,
      cost: 98,
      type: 'dessert',
      qty: 0,
      id: 52
    },
    {
      meal: 'Джелато власного виробництва',
      desk: 'Трюфельне/ Ванільне/ Сабайон',
      weight: 50,
      cost: 69,
      type: 'dessert',
      qty: 0,
      id: 53
    },
  ];

  const Food = ({ food }) => (
    <tbody className='tbody__menu'>
      {food
        .filter((elem) => {
          if (elem.type === showMeal) {
            return elem;
          }
        })
        .map((item) => (
          <tr className='listRow' key={item.id}>
            <td className='firstCol'>
              <h4 className='food__name'>{item.meal}</h4>
              {item.desk}
            </td>
            <td className='secondCol'>{item.weight} г</td>
            <td className='thirdCol'>{item.cost} грн.</td>
            <td className='fourthCol'>
              <svg
                className='orderIcon'
                onClick={() => {
                  // console.log('add' + item.meal);
                  // basketList.push(item);
                  // item.qty--;
                  changeCount(item.id, 1)
                }}
              >
                <use href={sprite + '#minus'}></use>
              </svg>
              <span className='orderCounter'>{item.qty}</span>
              <svg
                className='orderIcon'
                onClick={() =>
                  changeCount(item.id, 1)
                  // basketList.push(item)
                }
              >
                <use href={sprite + '#add'}></use>
              </svg>
            </td>
          </tr>
        ))
      }
    </tbody >
  );

  console.log(basketList);

  return (
    <section className='menu' id='menu'>
      <div className='container'>
        <div className='row'>
          <h1 className='col-12 menu__title'>Меню</h1>
        </div>
        <div className='row menu__info'>
          <div className='col-12 offset-md-4 col-md-8'>
            <MenuNav
              showFood={showFood}
              openAppetizer={openAppetizer}
              openSalad={openSalad}
              openFirst={openFirst}
              openPaste={openPaste}
              openRavioli={openRavioli}
              openPizza={openPizza}
              openDessert={openDessert}
              showMeal={showMeal}
              showAppetizer={showAppetizer}
            />
            <table className='menu__list'>
              <MenuHeaderRow />
              <Food food={food} />
            </table>
          </div>
        </div>
        <div className='row'>
          <button className='menu__button'>Додати до кошика</button>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    basketList: state.basketList,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { pushMeal, changeCount } = bindActionCreators(actions, dispatch);
  return {
    pushMeal,
    changeCount
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
