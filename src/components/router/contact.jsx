import React from 'react';

import Header from '../header/header';
import Contacts from '../contacts/contacts';
import Maps from '../map/map';

export default function Contact() {
  return (
    <div>
      <Header title={'Контакти'} />
      <Contacts />
      <Maps />
    </div>
  );
}
