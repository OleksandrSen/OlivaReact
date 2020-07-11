import React from 'react';

import Header from '../header/header';
import Contacts from '../contacts/contacts';
import Maps from '../map/map';

import { BrowserRouter as Route } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <Header />
      <Contacts />
      <Maps />
    </div>
  )
}
