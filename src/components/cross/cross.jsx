import React from 'react'
import sprite from '../../img/icons-sprite.svg';
import './cross.scss'


export default function Cross({ onClick }) {
  return (
    <svg className="cross" onClick={onClick}>
      <use href={sprite + '#cross'}></use>
    </svg>
  )
}
