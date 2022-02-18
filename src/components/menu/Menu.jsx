import React from 'react';
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return <div className={'menu ' + (menuOpen && "active")}>
    < ul >
      <li onClick={() => setMenuOpen(false)}>
        <a href='#home'>HOME</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href='#about'>ABOUT</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href='#work'>WORK</a>
      </li>
      <li onClick={() => setMenuOpen(false)}>
        <a href='#contact'>CONTACT</a>
      </li>
    </ul >
  </div >;
}
