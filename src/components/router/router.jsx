import React from 'react';

import Nav from '../nav/nav'
import Footer from '../footer/footer'

import Home from './home'
import Menu from './menu'
import Photo from './photo'
import New from './new'
import Contact from './contact'
import FirstPage from './firstPage'

import { BrowserRouter as Router } from 'react-router-dom';

export default function MainRouter() {
  return (
    <Router>
      <Nav />
      <FirstPage />
      <Home />
      <Menu />
      <Photo />
      <New />
      <Contact />
      <Footer />
    </Router>
  )
}

