import React from "react";
import PropTypes from "prop-types";
import "../styles/Modal.css";

const OfferDetail = ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) {
    return null;
  }
  const postuler = () => {};
  const ajouter = () => {};

  return (
    <div className="modalBox">
      <h1> Titre de l'offre </h1>
      <div>
        <p> Lieu</p>
        <p> Date de publication</p>
        <p> Salaire</p>
        <p> Entreprise</p>
        <p> Description entreprise</p>
        <p> Description</p>
        <p>Soft skills</p>
        <p>Hard skills</p>
        <p>Experience</p>
        <button type="submit" onClick={postuler}>
          Postuler
        </button>
        <button type="submit" onClick={ajouter}>
          Ajouter à ses coups de coeur
        </button>
        <button type="submit" onClick={setIsModalOpen}>
          {" "}
          Fermer
        </button>
      </div>
    </div>
  );
};

OfferDetail.propTypes = {
  isModalOpen: PropTypes.func.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};
export default OfferDetail;
