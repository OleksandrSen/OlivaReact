import React from 'react';

import HeaderPhoto from '../header_photo/header_photo';
import Slider from '../slider/slider';

import { BrowserRouter as Route } from 'react-router-dom';


export default function Photo() {
  return (
    <div>
      <HeaderPhoto />
      <Slider />
    </div>
  )
}