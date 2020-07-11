import React, { Component } from 'react';
import 'reset-css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import Nav from './components/nav/nav';
import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Order from './components/ordertable/ordertable';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeaderM from './components/headerM/headerM';
import HeaderPhoto from './components/header_photo/header_photo';

import News from './components/news/news';
import Contacts from './components/contacts/contacts';
import Maps from './components/map/map';
import MainMenu from './components/main_menu/main_menu';
import Slider from './components/slider/slider';
import SeasonBtn from './components/season_btn/season_btn';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Nav />
          <Route path='/' component={MainHeader} exact />
          <Route path='/' component={Main} exact />
          <Route path='/' component={MainMenu} exact />
          <Route path='/' component={SeasonBtn} exact />
          <Route path='/' component={Order} exact />

          <Route path='/main-header' component={MainHeader} />
          <Route path='/main-header' component={Main} />
          <Route path='/main-header' component={MainMenu} />
          <Route path='/main-header' component={SeasonBtn} />
          <Route path='/main-header' component={Order} />

          <Route path='/menu' component={HeaderM} />
          <Route path='/menu' component={MainMenu} />
          <Route path='/menu' component={SeasonBtn} />

          <Route path='/photo' component={HeaderPhoto} />
          <Route path='/photo' component={Slider} />

          <Route path='/news' component={Header} />
          <Route path='/news' component={News} />

          <Route path='/contacts' component={Header} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/contacts' component={Maps} />

          <Footer />
        </div>
      </Router>
    );
  }
}
