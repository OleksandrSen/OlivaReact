import React from 'react';
import './season.scss';
import season from '../../img/season.png';
import ellipses from '../../img/ellipses.png';



function Season() {
  return (
    <section className="season">
      <img src={ellipses} alt='ellipses' className="season__ellipses season__ellipses--top" />
      <img src={season} alt="recept" className="season__main-img" />
      <img src={ellipses} alt="ellipses" className="season__ellipses season__ellipses--bottom" />
    </section>
  );
}
export default Season;