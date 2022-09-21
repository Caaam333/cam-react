import React from 'react';
import Container from 'react-bootstrap/Container';


const Projets = () => {
  return (
    <Container id="projets">
      <h1 className="h1">PROJETS</h1>

      <div className="cards">
        <div className="candiloc card">
          <a href="https://candiloc.herokuapp.com/" target="_blank">
            <img src="./CANDILOC_v2.png" className=""/>
            <div className="card-content">
              <h3>CANDILOC</h3>
              <h4>Louez votre candidat politique préféré.</h4>
              <p>
                <u>OBJECTIF</u> : création d'un site de location type "airbnb" avec un tout autre thème.
                <br/>
                <u>TEMPS</u> : 1 semaine
                <br/>
                Application web réalisée en équipe lors de ma formation au Wagon.<br/>
              </p>
            </div>
          </a>
        </div>
        <div className="pets card">
          <a href="https://www.placeforpets.xyz/" target="_blank">
            <img src="./PLACE_FOR_PETS_v2.png" className=""/>
            <div className="card-content">
              <h3>PLACE FOR PETS</h3>
              <h4>Vous partez en vacances ? Eux aussi.</h4>
              <p>
                <u>OBJECTIF</u> : Réalisation d'une application qui calcule en temps réel le nombre de place restante dans des pensions à une courte distance d'un trajet en fonction du type d'animal.
                <br/>
                <u>TEMPS</u> : 3 semaines
                <br/>
                Application web format mobile (390x844) réalisée en équipe lors de ma formation au Wagon.<br/>
              </p>
            </div>
          </a>
        </div><div className="portfolio card">
          <a href="https://www.camille-lgrr.com/" target="_blank">
            <img src="./Visuel_v2.png" className=""/>
            <div className="card-content">
              <h3>PORTFOLIO</h3>
              <h4>Création d'un portfolio 'from scratch'.</h4>
              <p>
                <u>OBJECTIF</u> : Réalisation d'un site vitrine avec REACT. 
                <br/>
                <u>TEMPS</u> : 1 semaines
                <br/>
                Application web réalisée en solo après ma formation au Wagon.<br/>
              </p>
            </div>
          </a>
        </div> 
      </div>
    </Container>
  );
};

export default Projets;