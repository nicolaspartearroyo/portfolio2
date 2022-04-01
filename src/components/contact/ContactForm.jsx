import React, { useState } from "react";
import "./contact.scss";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
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
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>
    </div>
  </div >;
};

export default ContactForm;