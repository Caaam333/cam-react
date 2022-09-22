import React from "react";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <Container id="contact">
      <h1 className="h1">CONTACT</h1>
      <ul className="contact-list">
        <li>
          <img src="./address.png" className="" />
          <p>1618 Châtel-Saint-Denis</p>
          <p>SUISSE</p>
        </li>
        <li>
          <img src="./email.png" className="" />
          <p>contact@camille-lgrr.com</p>
        </li>
        <li>
          <img src="./linkedin.png" className="" />
          <p>linkedin.com/in/camille-lgrr</p>
        </li>
        <li>
          <img src="./github.png" className="" />
          <p>github.com/Caaam333</p>
        </li>
      </ul>
    </Container>
  );
};

export default Contact;
