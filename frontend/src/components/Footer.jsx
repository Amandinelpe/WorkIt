import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__text">
        <h3>WorkIT, cabinet de recrutement informatique</h3>
        <p>
          WorkIT c’est un cabinet de recrutement informatique et de conseil RH
          qui répond aux vrais besoins de vraies personnes.
        </p>
      </div>
      <div>
        <h3>Informations</h3>
        <ul className="liste">
          <li>
            <a href="/#">Fiches métiers</a>
            <a href="/#">Mentions Légales</a>
            <a href="/#">Politique de confidentialité</a>
            <a href="/#">Politique de cookies</a>
            <a href="/#">Plan du site</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
