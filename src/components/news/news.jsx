import React from 'react';
import './news.scss';
import boll from '../../img/red-boll.png';
import news1 from '../../img/news1.png';
import news2 from '../../img/news2.png';
import news3 from '../../img/news3.png';
import news4 from '../../img/news4.png';
import news5 from '../../img/news5.png';
import news6 from '../../img/news6.png';
import news7 from '../../img/news7.png';
import news8 from '../../img/news8.png';

function News() {
  return (
    <div className='news container'>
      <div className='row'>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Сніданки весь день</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news1} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Пісне меню від шефа</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news2} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Італійський обід</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news3} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Шеф рекомендує</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news4} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Весняне меню</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news5} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Спробуйте щось особливе</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news6} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Нове зимове меню</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news7} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
        <div className='col-12 col-md-6 news-block'>
          <h3 className='news-block__title'>Пісне меню</h3>
          <div className='news-block__images'>
            <img src={boll} alt='boll' className='news-block__red-boll' />
            <img src={news8} alt='meal' className='news-block__img' />
          </div>
          <button className='news-block__btn'>Детальніше</button>
        </div>
      </div>
    </div>
  );
}
export default News;
