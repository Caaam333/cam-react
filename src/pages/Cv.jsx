import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Cv = () => {
  return (
    <Container id="cv">
      <h1 className="h1">CV</h1>
      <Link
        to="/pdf/CV_Camille_LAGUERRE_2022_FR.pdf"
        className="button visible"
        target="_blank"
        rel="noopener"
      >
        &gt;  Téléchargez mon CV  &lt;
      </Link>
    </Container>
  );
};

export default Cv;
