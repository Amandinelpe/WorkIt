import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { GetOfferById } from "../apis/offerApi";
import "../styles/Modal.css";

const OfferDetail = ({ show, onClose, id }) => {
  if (!show) {
    return null;
  }
  
  const [dataOffer, setDataOffer] = useState({});
 
  useEffect(() => {GetOfferById(id).then((res) => setDataOffer(res.data))}, []);

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
          <h1> {dataOffer.title} </h1>
        </div>
        <div className="modal-body">
          <p> {dataOffer.firm_city} </p>
          <p> {dataOffer.date} </p>
          <p> {dataOffer.description_firm} </p>
          <p> {dataOffer.description_mission} </p>
          <p> {dataOffer.hard_skills}  </p>
          <p> {dataOffer.soft_skills} </p>
          <p>{dataOffer.experience} </p>
          <p>{dataOffer.logo_url} </p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} type="submit">
            {" "}
            Fermer
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
