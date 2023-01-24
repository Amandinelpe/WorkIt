import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../styles/Modal.css";


const OfferDetail = ({ show, onClose, id }) => {
  if (!show) {
    return null;
  }
  console.warn(id, "id");

  return ReactDOM.createPortal(
    <div
      className="modalBox"
      onClick={onClose}
      onKeyDown={onClose}
      role="textbox"
      tabIndex={0}
    >
      <div
        role="textbox"
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        tabIndex={0}
      >
        <div className="modal-header">
          <h1> Titre de l'offre </h1>
        </div>
        <div className="modal-body">
          <p> Lieu</p>
          <p> Date de publication</p>
          <p> Salaire</p>
          <p> Entreprise</p>
          <p> Description entreprise</p>
          <p> Description</p>
          <p>Soft skills</p>
          <p>Hard skills</p>
          <p>Experience</p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} type="submit">
            {" "}
            Fermer
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

OfferDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default OfferDetail;
