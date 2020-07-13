import React from 'react';

import Header from '../header/header';
import Slider from '../slider/slider';

export default function Photo() {
  return (
    <div>
      <Header title={'Галерея'} />
      <Slider />
    </div>
  );
}
