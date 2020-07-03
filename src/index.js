import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';

import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Order from './components/ordertable/ordertable';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import News from './components/news/news'
import Contacts from './components/contacts/contacts'



ReactDOM.render(
  <div>
    <MainHeader />
    <Main />
    <Order />
    <Footer />
    <Header />
    <News />
    <Contacts />
  </div>,
  document.getElementById('root')
);
