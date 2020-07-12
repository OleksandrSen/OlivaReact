import React, { Component } from 'react';
import 'reset-css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';

// import ThankOrder from './components/ordertable/thankorder/thankorder';
// import TableForm from './components/ordertable/form/tableform';

import Home from './components/router/home'
import Menu from './components/router/menu'
import Photo from './components/router/photo'
import New from './components/router/new'
import Contact from './components/router/contact'
import FirstPage from './components/router/firstPage'


export default class App extends Component {

  render() {
    return (
      <Router>

        <div className='app'>
          <Nav />

          <Route path='/main-header' exact>
            <Home />
          </Route>

          <Route path='/menu' exact>
            <Menu />
          </Route>

          <Route path='/photo' exact>
            <Photo />
          </Route>

          <Route path='/news' exact>
            <New />
          </Route>

          <Route path='/contacts' exact>
            <Contact />
          </Route>

          <Route path='/' exact>
            <FirstPage />
          </Route>

          <Footer />
        </div>
      </Router>
    );
  }
}
