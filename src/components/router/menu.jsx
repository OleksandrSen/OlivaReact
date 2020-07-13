import React from 'react';

import Header from '../header/header';
import MainMenu from '../main_menu/main_menu';
import SeasonBtn from '../season_btn/season_btn';

export default function Menu() {
  return (
    <div>
      <Header title={'Меню'} />
      <MainMenu />
      <SeasonBtn />
    </div>
  );
}
