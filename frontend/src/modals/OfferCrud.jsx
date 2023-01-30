/* eslint-disable no-return-assign */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { GetOfferById, DeleteOfferById } from "../apis/offerApi";
import close from "../assets/img/annuler.png";
import "../styles/Modal.css";

const OfferCrud = ({ show, onClose, offerId }) => {
  if (!show) {
    return null;
  }
  const [deleteMessage, setDeleteMessage] = useState("");
  const [dataOffer, setDataOffer] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(false);

  const askConfirmDelete = () => {
    setConfirmDelete(true);
  };

  const deleteOffer = () => {
    DeleteOfferById(offerId)
      .then((res) => {
        if (res.status === 200) {
          setDeleteMessage("L'offre a bien été supprimée");
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    GetOfferById(offerId).then((res) => setDataOffer(res.data));
  }, []);

  // eslint-disable-next-line no-return-assign
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
              className="header-button"
              aria-hidden="true"
              onClick={onClose}
              onKeyDown={onClose}
              src={close}
              alt="close"
            />
          </div>
          <div>
            <h1 className="modal-title"> {dataOffer.title} </h1>
            <div className="header-img">
              <p>
                {"   Offre publiée le "}{" "}
                {new Date(dataOffer.date).toLocaleDateString()}{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <h2 className="modal-subtitle">Lieu</h2>
          <p className="modal-text-uppercase"> {dataOffer.firm_city} </p>
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
          <h2 className="modal-subtitle">Salaire brut annuel proposé</h2>
          <p className="modal-text">{dataOffer.salary}€ </p>
        </div>
        <div className="modal-footer">
          <p className="send-candidature">{deleteMessage}</p>
          {deleteMessage === "" &&
            (confirmDelete ? (
              <div>
                <p className="send-candidature">
                  Etes vous sûr de vouloir supprimer cette offre ?
                </p>
                <div>
                  <button
                    onClick={() => {
                      deleteOffer();
                    }}
                    type="submit"
                    className="postule-button"
                    style={{ color: "red" }}
                  >
                    {" "}
                    Je confirme{" "}
                  </button>
                  <button
                    onClick={() => {
                      setConfirmDelete(false);
                    }}
                    type="submit"
                    className="postule-button"
                  >
                    {" "}
                    Annuler{" "}
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  askConfirmDelete();
                }}
                type="submit"
                className="postule-button"
                style={{ color: "red" }}
              >
                {" "}
                Supprimer l'annonce{" "}
              </button>
            ))}
        </div>
      </div>
    </div>,
    document.getElementById("app")
  );
};

OfferCrud.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
};

export default OfferCrud;
