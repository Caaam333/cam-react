import React from 'react';

const Projets = () => {
  return (
    <div>
      <div className="candiloc">
        <div>
          {/* <a href="https://candiloc.herokuapp.com/" target="_blank"><img "CANDILOC.png" /></a> */}
        </div>
        <div className="candi-content">
          <h3>CANDILOC</h3>
          <h4>Louez votre candidat politique préféré.</h4>
          <p>
            <span className="underline">OBJECTIF</span> : création d'un site de location type "airbnb" avec un tout autre thème.
            <br/>
            <span className="underline">TEMPS</span> : 1 semaine
            <br/>
            Application web réalisée en équipe lors de ma formation au Wagon.<br/>
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="pets">
        <div className="pets-content">
          <h3>PLACE FOR PETS</h3>
          <h4>Vous partez en vacances ? Eux aussi.</h4>
          <p>
            <span className="underline">OBJECTIF</span> : Réalisation d'une application qui calcule en temps réel le nombre de place restante dans des pensions à une courte distance d'un trajet en fonction du type d'animal.
            <br/>
            <span className="underline">TEMPS</span> : 3 semaines
            <br/>
            Application web format mobile (390x844) réalisée en équipe lors de ma formation au Wagon.<br/>
          </p>
        </div>
        <div>
          {/* <a href="https://www.placeforpets.xyz/" target="_blank"><%= image_tag "PLACE_FOR_PETS.png" %></a> */}
        </div>
      </div>
    </div>
  );
};

export default Projets;