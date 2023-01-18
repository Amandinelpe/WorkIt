import React from "react";
import SearchBar from "./SearchBar";
import "../styles/Candidature.css";

const Candidature = () => {
  return (
    <div className="container_body">
      <SearchBar />
      <div className="container">
        <div className="nouvelles_candidatures">
          <h2>Nouvelles candidatures spontanées</h2>
        </div>
        <div className="dashboard_candidature">
          <button type="submit" className="btn-container">
            Actualiser
          </button>
          <div className="text_cross">
            <p>Date d'arrivée</p>
            <p>Nom Prénom</p>
            <p>Id candidat</p>
            <p>Intitulé du poste</p>
            <p>Compte client</p>
            <p>Traitement</p>
            <p>Etat</p>
          </div>
          {/* <div>
            <p>Appel back candidature</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Candidature;
