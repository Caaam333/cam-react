import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Cv = () => {
  return (
    <Container id="cv">
      <h1 className="h1">CV</h1>
      <Link
        to="/pdf/CV_Camille_LAGUERRE_2022_FR.pdf"
        // className="link"
        target="_blank"
      >
        Téléchargez mon CV ↓
      </Link>
    </Container>
  );
};

export default Cv;
