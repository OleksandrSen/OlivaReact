import React from 'react';

import Header from '../header/header';
import MainMenu from '../main_menu/main_menu';
import Season from '../season/season';

export default function Menu() {
  return (
    <div>
      <Header title={'Меню'} />
      <MainMenu />
      <Season />
    </div>
  );
}
