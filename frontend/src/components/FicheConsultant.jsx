import React from "react";
import PropTypes from "prop-types";
import dataFicheConsultant from "../utils/dataFicheConsultant";
import profileimage from "../assets/img/profileimage.png";
import close from "../assets/img/annuler.png";
import "../styles/FicheConsultant.css";

const FicheConsultant = ({ showFiche, setShowFiche }) => {
  const handleClick = () => {
    setShowFiche(!showFiche);
  };

  return (
    <div className="fiche_consultant_container">
      <div className="fiche_consultant_header">
        <h1> Fiche consultant.e</h1>
        <div
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          <img src={close} alt="close" className="close_fiche_consultant" />
        </div>
      </div>
      <div className="fiche_consultant_body_footer">
        <div className="fiche_consultant_body">
          <form className="fiche_consultant_form">
            <h1>Informations personnelles</h1>
            <div className="consultant_personal_information_block">
              <div className="consultant_personal_information_inputs">
                {dataFicheConsultant.map((data) => (
                  <label key={data.id}>
                    {" "}
                    {data.label}
                    <input
                      type={data.type}
                      name={data.name}
                      placeholder={data.placeholder}
                      className={data.className}
                    />
                  </label>
                ))}
              </div>
            </div>
            <h1 className="consultant_workit_title">Chez WorkIT</h1>
            <div className="consultant_workit_block">
              <label>
                {" "}
                Poste occupé
                <input
                  className="form_input_consultant"
                  type="text"
                  name="Poste chez WorkIT"
                  placeholder="Consultant junior"
                />
              </label>{" "}
              <label>
                Périmètre attribué
                <input
                  className="form_input_consultant"
                  type="text"
                  name="Zone géographique"
                  placeholder="Bordeaux et sa région"
                />
              </label>
            </div>
          </form>
          <div className="consultant_profile_image_container">
            <img
              src={profileimage}
              alt="profileimage"
              className="consultant_profile_image"
            />
            <button type="button" className="button_change_image">
              {" "}
              Changer de photo{" "}
            </button>
          </div>
        </div>
        <div className="fiche_consultant_footer">
          <button
            type="button"
            className="button_save_consultant"
            onClick={handleClick}
          >
            SAUVEGARDER{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

FicheConsultant.propTypes = {
  showFiche: PropTypes.bool.isRequired,
  setShowFiche: PropTypes.func.isRequired,
};

export default FicheConsultant;
