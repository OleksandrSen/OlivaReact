import React from 'react';
import './header_photo.scss';
import Social from '../social/social'

function HeaderPhoto() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Галерея</h1>
      </div>
      <Social />
    </header >
  );
}
export default HeaderPhoto;