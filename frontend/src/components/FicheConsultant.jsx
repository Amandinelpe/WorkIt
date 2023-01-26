import React from "react";
import dataFicheConsultant from "../utils/dataFicheConsultant";
import profileimage from "../assets/img/profileimage.png";
import "../styles/FicheConsultant.css";

const FicheConsultant = () => {
  return (
    <div className="fiche_consultant_container">
      <div className="fiche_consultant_header">
        <h1> Fiche consultant.e</h1>
      </div>
      <div className="fiche_consultant_body">
        <form className="fiche_consultant_form">
          <h1>Informations personnelles</h1>
          <div className="consultant_personal_information_block">
            <div className="consultant_personal_information_inputs">
              {dataFicheConsultant.map((data) => (
                <input
                  key={data.id}
                  type={data.type}
                  name={data.name}
                  placeholder={data.placeholder}
                  className={data.className}
                />
              ))}
            </div>
            <img
              src={profileimage}
              alt="profileimage"
              className="consultant_profile_image"
            />
          </div>
          <h1 className="consultant_workit_title">Chez WorkIT</h1>
          <div className="consultant_workit_block">
            <select id="experience_value" className="form_input_consultant">
              <option value="A choisir">A choisir</option>
              <option value="Débutant">Débutant</option>
              <option value="2-3 ans">2-3 ans</option>
              <option value="4-10 ans">4-10 ans</option>
              <option value="10 ans et +">10 ans et +</option>
            </select>
            <input
              className="form_input_consultant"
              type="text"
              name="Poste chez WorkIT"
              placeholder="Consultant junior"
            />{" "}
            <input
              className="form_input_consultant"
              type="text"
              name="Zone géographique"
              placeholder="Bordeaux et sa région"
            />
          </div>
        </form>
        <button type="button" className="button_save_consultant">
          SAUVEGARDER{" "}
        </button>
      </div>
    </div>
  );
};

export default FicheConsultant;
