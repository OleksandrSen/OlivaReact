import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';

import Nav from './components/nav/nav';
import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Order from './components/ordertable/ordertable';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import News from './components/news/news';
import Contacts from './components/contacts/contacts';
import Maps from './components/map/map';
import MainMenu from './components/main_menu/main_menu';
import Slider from './components/slider/slider';

ReactDOM.render(
  <div>
    <Nav />
    <MainHeader />
    <Main />
    <MainMenu />
    <Order />
    <Footer />
    <Header />
    <News />
    <Contacts />
    <Maps />
    <Slider />
  </div>,
  document.getElementById('root')
);
