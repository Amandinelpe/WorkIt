import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { authContext } from "../context/AuthContext";
import { GetOfferById } from "../apis/offerApi";
import { GetFavoriteByUserAndOffer } from "../apis/favoriteApi";
import close from "../assets/img/annuler.png";
import isfav from "../assets/img/fav.png";
import notfav from "../assets/img/notfav.png";
import "../styles/Modal.css";

const OfferDetail = ({ show, onClose, id }) => {
  if (!show) {
    return null;
  }
  const [postulation, setPostulation] = useState("");
  const [dataOffer, setDataOffer] = useState({});
  const { auth } = useContext(authContext);
  const [userOffer, setUserOffer] = useState({
    user_id: "",
    offer_id: id,
    isFavorite: false,
    candidated: false,
  });
  const [favoriteId, setFavoriteId] = useState();

  /*   const checkFavorite = () => {
        GetFavoriteByUserAndOffer(auth.data.id, id).then((res) => {
          if (res.data.length !== 0) {
            setUserOffer({...userOffer, isFavorite: true})
          }
        });
      } */

  const initUserOffer = () => {
    if (auth.data) {
      if (auth.data.role_id === 1) {
        setUserOffer({
          ...userOffer,
          user_id: auth.data.id,
        });
        GetFavoriteByUserAndOffer(auth.data.id, id).then((res) => {
          if (res.data.length !== 0) {
            setUserOffer({ ...userOffer, isFavorite: true });
            setFavoriteId(res.data.favorite_id);
          }
        });
      }
    }
  };
/*   console.log(userOffer, "userOffer");
  console.log(auth.data, "auth.data");
  console.log(favoriteId, "favoriteID"); */
  const setFavorite = () => {
    setUserOffer({
      ...userOffer,
      isFavorite: !userOffer.isFavorite,
    });
  };

  useEffect(() => {
    GetOfferById(id).then((res) => setDataOffer(res.data));
    initUserOffer();
  }, []);

  const handleSubmit = () => {
    if (auth.data) {
      if (auth.data.role_id === 1) {
        setPostulation(
          "Votre candidature a bien été envoyée. Votre interlocuteur vous contactera prochainement."
        );
      } else {
        setPostulation("Veuillez vous connecter pour postuler");
      }
    } else {
      setPostulation("Veuillez vous connecter pour postuler");
    }
  };

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
              {auth.data && auth.data.role_id === 1 ? (
                <img
                  className="header-button"
                  aria-hidden="true"
                  onClick={() => setFavorite()}
                  onKeyDown={onClose}
                  src={userOffer.isFavorite ? isfav : notfav}
                  alt="close"
                />
              ) : null}
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
        </div>
        <div className="modal-footer">
          <p className="send-candidature">{postulation}</p>
          <button
            onClick={handleSubmit}
            type="submit"
            className="postule-button"
          >
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
