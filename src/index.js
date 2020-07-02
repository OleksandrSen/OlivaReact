import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Order from './components/ordertable/ordertable';
import Footer from './components/footer/footer';

ReactDOM.render(
  <div>
    <MainHeader />
    <Main />
    <Order />
    <Footer />
  </div>,
  document.getElementById('root')
);
