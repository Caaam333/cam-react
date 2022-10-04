import React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <Container id="about">
      <h1 className="h1">A PROPOS</h1>
      <div className="about-content">
        <p className="about-text">
          Je suis Camille, j'ai grandi en Île-de-France, passionnée, la danse a
          rythmé ma vie. À mes 30 ans, je me lance un nouveau défi : passer la
          frontière Suisse et repartir à zéro. <br />
          Nouveau pays, nouvel environnement, pourquoi ne pas se fixer de
          nouveaux objectifs ? Après 5 ans à la SNCF, je me sentais prête à
          bouleverser ma carrière et me voici lancée dans la formation du Wagon
          pour être développeuse web. Ces 6 mois de formation m'ont permis de
          développer mon savoir technique et mon sens de l'écoute. Cela me
          passionne et me donne envie d'en apprendre encore plus. Je suis
          maintenant prête à acquérir une première expérience professionnelle.
        </p>
        <img src="./assets/images/PHOTO_1.jpg" className="img-fluid"/>
      </div>
    </Container>
  );
};

export default About;
