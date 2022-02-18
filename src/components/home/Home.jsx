import React from 'react';
import "./home.scss";

export default function Home() {
  return <div className='home' id='home'>
    <div className="left">
      <div className="name">NICOLAS</div>
      <div className="name">PARTEARROYO</div>
    </div>

    <div className="center">
      <div>
        <a href='#home'>HOME</a>
      </div>
      <div>
        <a href='#about'>ABOUT</a>
      </div>
      <div>
        <a href='#work'>WORK</a>
      </div>
      <div>
        <a href='#contact'>CONTACT</a>
      </div>
    </div>

    <div className="right">
      <div className="imgContainer">
        <img src="assets/profile.JPG" alt='profile'></img>
      </div>
    </div>
  </div>;
}
