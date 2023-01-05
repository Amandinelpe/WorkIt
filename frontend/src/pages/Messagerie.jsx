import React from "react";
import NavBar from "../components/NavBar";

const Messagerie = () => {
  return (
    <div className="messagerie">
      <NavBar />
      <div className="button_accueil">
        <button type="submit">Bonjour Luc</button>
      </div>
    </div>
  );
};

export default Messagerie;
