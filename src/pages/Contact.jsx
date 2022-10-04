import React from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";

const Contact = () => {
  const [click, setClick] = useState(false);
  const [clickLoc, setClickLoc] = useState(false);
  const [clickMail, setClickMail] = useState(false);
  const [clickDin, setClickDin] = useState(false);
  const [clickHub, setClickHub] = useState(false);

  const handleVisibility = () => {
    setClick(true);
    setClickLoc(false);
    setClickMail(false);
    setClickDin(false);
    setClickHub(false);
  };

  const handleClickLoc = () => setClickLoc(!clickLoc);
  const handleClickMail = () => setClickMail(!clickMail);
  const handleClickDin = () => setClickDin(!clickDin);
  const handleClickHub = () => setClickHub(!clickHub);

  return (
    <Container id="contact">
      <h1 className="h1">CONTACT</h1>
      <ul className="contact-logo">
        <li>
          <img
            src="./assets/images/icons/location-pin_4.png"
            className=""
            onClick={() => {
              handleVisibility();
              handleClickLoc();
            }}
          />
        </li>
        <li>
          <img
            src="./assets/images/icons/email_4.png"
            className=""
            onClick={() => {
              handleVisibility();
              handleClickMail();
            }}
          />
        </li>
        <li>
          <img
            src="./assets/images/icons/linkedin_4.png"
            className=""
            onClick={() => {
              handleVisibility();
              handleClickDin();
            }}
          />
        </li>
        <li>
          <img
            src="./assets/images/icons/github_4.png"
            className=""
            onClick={() => {
              handleVisibility();
              handleClickHub();
            }}
          />
        </li>
      </ul>
      <ul className="contact-element">
        <li className={click ? "" : "visible"}>
          <p>Contactez moi</p>
        </li>
        <li className={clickLoc ? "visible" : ""}>
          {clickLoc && <p>1618 Châtel-Saint-Denis - Suisse</p>}
        </li>
        <li className={clickMail ? "visible" : ""}>
          {clickMail && <p>contact@camille-lgrr.com</p>}
        </li>
        <li className={clickDin ? "button visible" : ""}>
          {clickDin && (
            <a href="https://www.linkedin.com/in/camille-lgrr/">
              &gt; Linkedin &lt;
            </a>
          )}
        </li>
        <li className={clickHub ? "button visible" : ""}>
          {clickHub && (
            <a href="https://github.com/Caaam333">&gt; Github &lt;</a>
          )}
        </li>
      </ul>
    </Container>
  );
};

export default Contact;
