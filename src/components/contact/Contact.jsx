import React from 'react';
import "./contact.scss";
import { useState } from "react";


export default function Contact() {


  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return <div className="contact" id='contact'>
    <h1>CONTACT {'>>'}</h1>
    <div className="left">
      <a href="https://de.linkedin.com/in/nicolas-partearroyo-69820020a"><img src="assets/in.png" alt="linkedin" /></a>
      <a href="https://www.instagram.com/nicolasneik"><img src="assets/ig.png" alt="instagram" /></a>
      <a href="https://github.com/nicolaspartearroyo"><img src="assets/gh.png" alt="github" /></a>
      <a href="https://www.google.com/maps/place/Berlin"><img src="assets/loc.png" alt="instagram" /></a>
    </div>
    <div className="right">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder=' NAME' />
        <input type="text" placeholder=' EMAIL ADDRESS' />
        <textarea placeholder=' YOUR MESSAGE'></textarea>
        <button type="submit">SEND MESSAGE</button>
        {message && <span>THANKS :)</span>}
      </form>
    </div>
  </div >;
}
