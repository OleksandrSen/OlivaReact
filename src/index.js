import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/nav/nav';
import MainHeader from './components/main_header/main_header';
import Main from './components/main/main';
import Order from './components/ordertable/ordertable';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HeaderM from './components/headerM/headerM';
import News from './components/news/news';
import Contacts from './components/contacts/contacts';
import Maps from './components/map/map';
import MainMenu from './components/main_menu/main_menu';

ReactDOM.render(
  <Router>
    <div>
      <Nav />
      <Route path="/"
        component={MainHeader}
        exact />
      <Route path="/"
        component={Main}
        exact />
      <Route path="/"
        component={MainMenu}
        exact />
      <Route path="/"
        component={Order}
        exact />

      <Route path="/main-header" component={MainHeader} />
      <Route path="/main-header" component={Main} />
      <Route path="/main-header" component={MainMenu} />
      <Route path="/main-header" component={Order} />

      <Route path="/manu" component={HeaderM} />
      <Route path="/manu" component={MainMenu} />

      <Route path="/photo" component={Header} />

      <Route path="/news" component={Header} />
      <Route path="/news" component={News} />

      <Route path="/contacts" component={Header} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/contacts" component={Maps} />

      <Footer />

      {/* <Header />
      <News />
      <Contacts />
      <Maps /> */}
    </div>
  </Router>,
  document.getElementById('root')
);
