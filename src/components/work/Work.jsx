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
          <span>Built the server-side (REST API and database) and client-side of a movie collection web application which provide access to information about different movies, directors, and genres for users to be able to sign up, update their personal information, and create a list of their favourite movies.</span>
        </div>
      </div>
      <div className="item">
        <h3>MYFLIX REACT CLIENT</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/myFlix-React-client'>GITHUB {'>'} CODE</a><br></br>
          <span>Using React and redux, I built the client-side for an application called myFlix built with the MERN stack.<br></br>This web app provides users with information about movies, directors and genres. Users are able to sign up, update personal information and select their favorites movies.</span>
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
        <h3>CHATT APPP</h3>
        <div className='text-box'>
          <a href='https://github.com/nicolaspartearroyo/Chat-app'>GITHUB {'>'} CODE</a><br></br>
          <span>A chat app for mobile devices using React Native. Wrote code that connects to the chat server, sends and receives messages, and displays them in the app. The app provide users with a chat interface and options to share images and their location.
          </span>
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
