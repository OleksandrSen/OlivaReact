import React from 'react';

import Header from '../header/header';
import News from '../news/news';

import { BrowserRouter as Route } from 'react-router-dom';


export default function New() {
  return (
    <Route path='/news' exact>
      <Header />
      <News />
    </Route>
  )
}