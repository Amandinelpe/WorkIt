import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { GetFirmData } from "../apis/firmApi";
import close from "../assets/img/annuler.png";
import "../styles/Modal.css";

const OfferForm = ({show, onClose, firmId}) => {
  if (!show) {
    return null;
  }
  const [firmData, setFirmData] = useState([]);
  const [dataOffer, setDataOffer] = useState({});
  
  const getFirmData = async () => {
    await GetFirmData(firmId).then((res) => setFirmData(res.data));
  }

  const postOffer = () => {



  }
  
  useEffect(() => {
    getFirmData();
  }, []);

  useEffect(() => {
    firmData && setDataOffer({...dataOffer, firm_id: firmData.id, });
    }, [firmData]);


  return ReactDOM.createPortal(
      
      <form onSubmit={postOffer}>
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
            <img src={firmData.logo_url} alt="" width="8%" />
            <img
              className="header-button"
              aria-hidden="true"
              onClick={onClose}
              onKeyDown={onClose}
              src={close}
              alt="close"
              />
          </div>
          <div>
            <h1 className="modal-title"> </h1>
            <div className="header-img">
                 <p>
                {"   Offre publiée le "}{" "}
                {new Date().toLocaleDateString()}{" "}
                </p>   
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h2 className="modal-subtitle">Lieu</h2>
          <p className="modal-text-uppercase"> </p>
          <h2 className="modal-subtitle">Description de la société</h2>
          <p className="modal-text"> </p>
          <h2 className="modal-subtitle">Mission proposée</h2>
          <p className="modal-text"> </p>
          <h2 className="modal-subtitle">Environnement technique</h2>
          <p className="modal-text"> </p>

                <h2 className="modal-subtitle">Compétences relationnelles</h2>
                <p className="modal-text">  </p>{" "}
          <h2 className="modal-subtitle">Expérience requise</h2>
          <p className="modal-text"></p>
          <h2 className="modal-subtitle">Salaire brut annuel proposé</h2>
          <p className="modal-text">€ </p>
        </div>
        <div className="modal-footer">
    
                 <button
             onClick={() => {
                 
            }}
            type="submit"
            className="postule-button" 
            >
             {" "}
            Publier l'annonce {" "}
           </button>
        </div>
      </div>
    </div>
    </form>,
    document.getElementById("app")
  );
};

OfferForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
};


export default OfferForm;
