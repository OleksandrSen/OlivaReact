import React from 'react';

import HeaderM from '../headerM/headerM';
import MainMenu from '../main_menu/main_menu';
import SeasonBtn from '../season_btn/season_btn';

import { BrowserRouter as Route } from 'react-router-dom';


export default function Menu() {
  return (
    <div>
      <HeaderM />
      <MainMenu />
      <SeasonBtn />
    </div>
  )
}