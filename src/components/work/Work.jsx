import React from 'react';
import "./work.scss";

export default function Work() {
  return <div className='work' id='work'>
    <h1>WORK {'>>'}</h1>
    <div className="container">
      <div className="item">
        <h3>MYFLIX API</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/myFlix-API'>GITHUB {'>'} CODE</a><br></br>
          <span>I built the server-side component of a “movies” web application (myFlix). <br></br>The web application provide users with access to information about different movies, directors, and genres.<br></br>Users can sign up, update their personal information, and create a list of their favorite movies.</span>
        </div>
      </div>
      <div className="item">
        <h3>MYFLIX REACT CLIENT</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/myFlix-React-client'>GITHUB {'>'} CODE</a><br></br>
          <span>Using React, I built the client-side for an application called myFlix built with the MERN stack and its own API.<br></br>This web app provides users with information about movies, directors and genres. Users are able to sign up, update personal information and select their favorites movies.</span>
        </div>
      </div>
      <div className="item">
        <h3>MYFLIX ANGULAR CLIENT</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/myFlix-Angular-client'>GITHUB {'>'} CODE</a><br></br>
          <span>Using Angular, I built the client-side for an application called myFlix built with the MEAN stack and its own API.<br></br>This web app provides users with information about movies, directors and genres. Users are able to sign up, update personal information and select their favorites movies.</span>
        </div>
      </div>
      <div className="item">
        <h3>MEET APP</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/meet'>GITHUB {'>'} CODE</a><br></br>
          <span>A serverless PWA using Create React App that can display and filter meetup events from the Google calender API.<br></br>It is developed using Test-Drive-Development techniques to ensure a high test coverage rate.</span>
        </div>
      </div>
      <div className="item">
        <h3>TO DO LIST APP</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/to-do-list-app'>GITHUB {'>'} CODE</a><br></br>
          <span>This is a short mini-project in which I will be implementing jQuery to build a basic To-Do List app.</span>
        </div>
      </div>
      <div className="item">
        <h3>POKEDEX</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/Pokedex'>GITHUB {'>'} CODE</a><br></br>
          <span>Small Pokédex web app coded in HTML, CSS, JavaScript, jQuery and Bootsrap that display a list of Pokémon which are taken from an external API and enables the viewing of data points in detail.</span>
        </div>
      </div>
    </div>
  </div >;
}
