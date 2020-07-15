import React from 'react';

import MainHeader from '../main_header/main_header';
import Main from '../main/main';
import Order from '../ordertable/ordertable';
import MainMenu from '../main_menu/main_menu';
// import SeasonBtn from '../season_btn/season_btn';

export default function Home() {
  return (
    <div>
      <MainHeader />
      <Main />
      <MainMenu />
      {/* <SeasonBtn /> */}
      <Order />
    </div>
  );
}
