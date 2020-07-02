import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import News from './components/news/news'

ReactDOM.render(
  <div>
    <MainHeader />
    <Main />
    <Footer />
    <Header />
    <News />
  </div>,
  document.getElementById('root')
);
