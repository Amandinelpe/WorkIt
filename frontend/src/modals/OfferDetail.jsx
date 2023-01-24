import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { GetOfferById } from "../apis/offerApi";
import close from "../assets/img/annuler.png";
import "../styles/Modal.css";

const OfferDetail = ({ show, onClose, id }) => {
  if (!show) {
    return null;
  }

  const [dataOffer, setDataOffer] = useState({});

  useEffect(() => {
    GetOfferById(id).then((res) => setDataOffer(res.data));
  }, []);
  /* eslint no-return-assign: "error" */
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
          <div className="header-img">
            <img src={dataOffer.logo_url} alt={dataOffer.logo_url} width="8%" />
            <img
              aria-hidden="true"
              onClick={onClose}
              onKeyDown={onClose}
              src={close}
              alt="close"
              width="4%"
            />
          </div>
          <div>
            <h1 className="modal-title"> {dataOffer.title} </h1>
            <p>
              {" "}
              {dataOffer.firm_city}
              {"   /offre publiée le "}{" "}
              {new Date(dataOffer.date).toLocaleDateString()}{" "}
            </p>
          </div>
        </div>
        <div className="modal-body">
          <h2 className="modal-subtitle">Description de la société</h2>
          <p className="modal-text"> {dataOffer.description_firm} </p>
          <h2 className="modal-subtitle">Mission proposée</h2>
          <p className="modal-text"> {dataOffer.description_mission} </p>
          <h2 className="modal-subtitle">Environnement technique</h2>
          <p className="modal-text"> {dataOffer.hard_skills} </p>

          {
            (dataOffer.soft_skills = !"-" && (
              <div>
                <h2 className="modal-subtitle">Compétences relationnelles</h2>
                <p className="modal-text"> {dataOffer.soft_skills} </p>{" "}
              </div>
            ))
          }

          <h2 className="modal-subtitle">Expérience requise</h2>
          <p className="modal-text">{dataOffer.experience} </p>
        </div>
        <div className="modal-footer">
          <button type="submit" className="postule-button">
            {" "}
            Je postule{" "}
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("app")
  );
};

OfferDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default OfferDetail;
