import React, { useState } from 'react';
import sprite from '../../img/icons-sprite.svg';
import './main_menu.scss';
import MenuNav from './menu_nav/menu_nav';
import MenuHeaderRow from './menu_header-row/menu_header-row';

import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { on } from 'cluster';

function MainMenu() {
  const [showFood, setShowFood] = useState(false);

  const [showAppetizer, setShowAppetizer] = useState('');

  const openAppetizer = () => {
    setShowFood(true);
    setShowAppetizer('appetizer');
  };

  const openSalad = () => {
    setShowFood(true);
    setShowAppetizer('salad');
  };

  const openFirst = () => {
    setShowFood(true);
    setShowAppetizer('first');
  };

  const openPaste = () => {
    setShowFood(true);
    setShowAppetizer('paste');
  };

  const openRavioli = () => {
    setShowFood(true);
    setShowAppetizer('ravioli');
  };

  const openPizza = () => {
    setShowFood(true);
    setShowAppetizer('pizza');
  };


  const openDessert = () => {
    setShowFood(true);
    setShowAppetizer('dessert');
  };

  const food = [
    {
      meal: 'Прошутто крудо з грушею',
      desk: '',
      weight: 165,
      cost: 71,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: "Італійські м'ясні делікатеси",
      desk: '(прошутто крудо, брезаола, салямі, салямі гостра)',
      weight: 120,
      cost: 119,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Сирна палітра',
      desk: '(сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція)',
      weight: 205,
      cost: 121,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Карпаччо із лосося',
      desk: '(з грінками)',
      weight: 110,
      cost: 99,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Тартар із лосося',
      desk: '(з грінками)',
      weight: 160,
      cost: 119,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Антіпасті на двох',
      desk: "(італійські м'ясні та сирні делікатеси)",
      weight: 390,
      cost: 248,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Брускети з соусом із консервованого тунця',
      desk: '(подаються з овочами)',
      weight: 160,
      cost: 51,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Брускети з паштетом з гусячої печінки',
      desk: '(під вишневим соусом)',
      weight: 140,
      cost: 61,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: "Брускети з в'яленими томатами",
      desk: '',
      weight: 100,
      cost: 51,
      type: 'appetizer',
      qty: 0,
    },
    {
      meal: 'Вітелло тоннато',
      desk: '(тонко нарізана телятина під соусом із тунця)',
      weight: 130,
      cost: 69,
      type: 'appetizer',
      qty: 0,
    },
    // salad
    {
      meal: 'Олів’є з курятиною, шинкою та молодим горошком',
      desk: '',
      weight: 250,
      cost: 145,
      type: 'salad',
      qty: 0,
    },
    {
      meal: "Салат Романо Houston's",
      desk: '(з домашнім курчам-гриль і арахісовим соусом)',
      weight: 300,
      cost: 165,
      type: 'salad',
      qty: 0,
    },
    {
      meal:
        'Овочевий салат із булгуром, кінзою, зеленим соусом та гарбузовим насінням',
      desk: '',
      weight: 200,
      cost: 115,
      type: 'salad',
      qty: 0,
    },
    {
      meal: 'Цуккіні',
      desk:
        '(карпачо з базиліком, рікотою, гарбузовим насінням та соусом горгонзола)',
      weight: 160,
      cost: 115,
      type: 'salad',
      qty: 0,
    },
    {
      meal: 'Ризото з лисичками та пармезаном ',
      desk: '',
      weight: 250,
      cost: 250,
      type: 'salad',
      qty: 0,
    },
    {
      meal: 'Зелений салат',
      desk:
        '(із молодим шпинатом, руколою, свіжою м’ятою, грейпфрутом і креветками під чилі- соусом. )',
      weight: 200,
      cost: 265,
      type: 'salad',
      qty: 0,
    },
    // first
    {
      meal: 'Андалузький гаспачо з овечою фетою',
      desk: '',
      weight: 300,
      cost: 139,
      type: 'first',
      qty: 0,
    },
    {
      meal: 'Окрошка',
      desk: '(з телятиною та шинкою на квасі зі сметаною та гірчицею)',
      weight: 250,
      cost: 130,
      type: 'first',
      qty: 0,
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з курочкою)',
      weight: 300,
      cost: 190,
      type: 'first',
      qty: 0,
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з креветками)',
      weight: 300,
      cost: 240,
      type: 'first',
      qty: 1,
    },
    {
      meal: 'Борщ український',
      desk: '(з реберцем та пампушками)',
      weight: 330,
      cost: 99,
      type: 'first',
      qty: 1,
    },
    {
      meal: 'Андалузький гаспачо з овечою фетою',
      desk: '',
      weight: 300,
      cost: 139,
      type: 'first',
      qty: 0,
    },
    {
      meal: 'Окрошка',
      desk: '(з телятиною та шинкою на квасі зі сметаною та гірчицею)',
      weight: 250,
      cost: 130,
      type: 'first',
      qty: 0,
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з курочкою)',
      weight: 300,
      cost: 190,
      type: 'first',
      qty: 0,
    },
    {
      meal: 'Том Ка Гай',
      desk: '(з креветками)',
      weight: 300,
      cost: 240,
      type: 'first',
      qty: 1,
    },
    {
      meal: 'Борщ український',
      desk: '(з реберцем та пампушками)',
      weight: 330,
      cost: 99,
      type: 'first',
      qty: 1,
    },
    // paste
    {
      meal: 'Тальятелле с телятиной',
      desk: '(в соусе Демиглас, томатами и базиликом)',
      weight: 300,
      cost: 158,
      type: 'paste',
      qty: 0,
    },
    {
      meal: "Паста Четыре сыра",
      desk: '',
      weight: 350,
      cost: 168,
      type: 'paste',
      qty: 0,
    },
    {
      meal: 'Спагетти с соусом Карбонара',
      desk: '',
      weight: 220,
      cost: 98,
      type: 'paste',
      qty: 0,
    },
    {
      meal: 'Спагетти с креветками',
      desk: '',
      weight: 280,
      cost: 168,
      type: 'paste',
      qty: 0,
    },
    {
      meal: 'Тальятелле с телятиной',
      desk: '(в соусе Демиглас, томатами и базиликом)',
      weight: 300,
      cost: 158,
      type: 'paste',
      qty: 0,
    },
    {
      meal: "Паста Четыре сыра",
      desk: '',
      weight: 350,
      cost: 168,
      type: 'paste',
      qty: 0,
    },
    {
      meal: 'Спагетти с соусом Карбонара',
      desk: '',
      weight: 220,
      cost: 98,
      type: 'paste',
      qty: 0,
    },
    {
      meal: 'Спагетти с креветками',
      desk: '',
      weight: 280,
      cost: 168,
      type: 'paste',
      qty: 0,
    },
    // ravioli
    {
      meal: 'Равиоли с кроликом',
      desk: '',
      weight: 250,
      cost: 128,
      type: 'ravioli',
      qty: 0,
    },
    {
      meal: 'Равиоли с рикоттой',
      desk: "",
      weight: 250,
      cost: 123,
      type: 'ravioli',
      qty: 0,
    },
    {
      meal: 'Равиоли з соусом із консервованого тунця',
      desk: '(подаються з овочами)',
      weight: 160,
      cost: 51,
      type: 'ravioli',
      qty: 0,
    },
    {
      meal: 'Равиоли з паштетом з гусячої печінки',
      desk: '(під вишневим соусом)',
      weight: 140,
      cost: 61,
      type: 'ravioli',
      qty: 0,
    },
    {
      meal: "Равиоли з в'яленими томатами",
      desk: '',
      weight: 100,
      cost: 51,
      type: 'ravioli',
      qty: 0,
    },
    {
      meal: 'Вітелло тоннато',
      desk: '(тонко нарізана телятина під соусом із тунця)',
      weight: 130,
      cost: 69,
      type: 'ravioli',
      qty: 0,
    },
    // pizza
    {
      meal: 'Піца "Мисливська"',
      desk: '',
      weight: 480,
      cost: 125,
      type: 'pizza',
      qty: 0,
    },
    {
      meal: 'Піца "Барбекю" ',
      desk: "",
      weight: 480,
      cost: 125,
      type: 'pizza',
      qty: 0,
    },
    {
      meal: 'Піца "Мексиканська"',
      desk: '',
      weight: 520,
      cost: 125,
      type: 'pizza',
      qty: 0,
    },
    {
      meal: 'Піца "Street Food"',
      desk: '',
      weight: 520,
      cost: 125,
      type: 'pizza',
      qty: 0,
    },
    {
      meal: 'Піца "4 м`яса"',
      desk: '',
      weight: 480,
      cost: 125,
      type: 'pizza',
      qty: 0,
    },
    // dessert
    {
      meal: 'Вареники з вишнею ',
      desk: '',
      weight: 220,
      cost: 120,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: "Торт на гречаному меду із трюфельним кремом та соусом сабайон",
      desk: '',
      weight: 145,
      cost: 125,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: 'Сирна палітра',
      desk: '(сир Пармезан, сир Брі, сир Горгонзола, сир Скаморція)',
      weight: 205,
      cost: 121,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: 'Ромова баба з кремом Шантілі ',
      desk: '',
      weight: 150,
      cost: 95,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: 'Штрудель із вишнею, волоськими горіхами та ванільним морозивом ',
      desk: '',
      weight: 170,
      cost: 125,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: 'Ягідний тірамісу ',
      desk: "(італійські м'ясні та сирні делікатеси)",
      weight: 150,
      cost: 125,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: 'Сорбети власного виробництва ',
      desk: '(подаються з овочами)',
      weight: 50,
      cost: 60,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: 'Сирники',
      desk: '(з в’яленим виноградом і морозивом сабайон на основі домашньої сметани)',
      weight: 150,
      cost: 98,
      type: 'dessert',
      qty: 0,
    },
    {
      meal: "Джелато власного виробництва",
      desk: 'Трюфельне/ Ванільне/ Сабайон',
      weight: 50,
      cost: 69,
      type: 'dessert',
      qty: 0,
    },
  ];

  // let add = () => {
  //   console.log('add' + item)
  // }

  const basketList = []

  const Food = ({ food }) => (
    <tbody className='tbody__menu'>
      {food
        .filter((elem) => {
          if (elem.type === showAppetizer) {
            return elem;
          }
        })
        .map((item) => (
          <tr className='listRow' key={item.meal}>
            <td className='firstCol'>
              <h4 className='food__name'>{item.meal}</h4>
              {item.desk}
            </td>
            <td className='secondCol'>{item.weight} г</td>
            <td className='thirdCol'>{item.cost} грн.</td>
            <td className='fourthCol'>
              <svg className='orderIcon'
                onClick={() => {
                  console.log('add' + item.meal)
                  basketList.splice(item)
                  item.qty--
                  console.log(basketList)

                }}>
                <use href={sprite + '#minus'}></use>
              </svg>
              <span className='orderCounter'>{item.qty}</span>
              <svg className='orderIcon'
                onClick={() => {
                  console.log('add' + item.meal)
                  basketList.push(item)
                  item.qty++
                  console.log(basketList)

                }}>
                <use href={sprite + '#add'}></use>
              </svg>
            </td>
          </tr>
        ))}
    </tbody>
  );


  console.log(basketList)

  return (
    <section className='menu' id='menu'>
      <div className='row'>
        <h1 className='offset-4 col-4 menu__title'>Меню</h1>
      </div>
      <div className='row menu__info'>
        <div className='offset-4 col-8'>
          <MenuNav
            showFood={showFood}
            openAppetizer={openAppetizer}
            openSalad={openSalad}
            openFirst={openFirst}
            openPaste={openPaste}
            openRavioli={openRavioli}
            openPizza={openPizza}
            openDessert={openDessert}
            ShowAppetizer={showAppetizer}
          />
          <table className='menu__list'>
            <MenuHeaderRow />
            {showFood ? <Food food={food} /> : null}
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