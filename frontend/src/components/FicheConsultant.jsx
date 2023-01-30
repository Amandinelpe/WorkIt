import { React, useState } from "react";
import PropTypes from "prop-types";
import { CreateConsultant } from "../apis/consultant";
import AddConsultantInput from "./AddConsultantInput";
import dataFicheConsultant from "../utils/dataFicheConsultant";
import profileimage from "../assets/img/profileimage.png";
import close from "../assets/img/annuler.png";
import "../styles/FicheConsultant.css";

const FicheConsultant = ({ showFiche, setShowFiche }) => {
  const [addNewConsultant, setAddNewConsultant] = useState({
    role_id: 2,
    firstname: null,
    lastname: null,
    phone: null,
    city: null,
    email: null,
    password: null,
    linkedin: null,
  });

  // console.log(addNewConsultant);

  const handleClick = () => {
    setShowFiche(!showFiche);
  };

  const postConsultant = (event) => {
    event.preventDefault();
    if (
      addNewConsultant.firstname === null &&
      addNewConsultant.lastname === null &&
      addNewConsultant.phone === null &&
      addNewConsultant.city === null &&
      addNewConsultant.email === null &&
      addNewConsultant.password === null &&
      addNewConsultant.linkedin === null
    ) {
      // eslint-disable-next-line no-alert
      alert("Veuillez remplir tous les champs");
    } else {
      CreateConsultant(addNewConsultant).then((res) => console.warn(res.data));
    }
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
          <form className="fiche_consultant_form" onSubmit={postConsultant}>
            <h1>Informations personnelles</h1>
            <div className="consultant_personal_information_block">
              <div className="consultant_personal_information_inputs">
                {dataFicheConsultant.map((data) => (
                  <AddConsultantInput
                    id={data.id}
                    label={data.label}
                    type={data.type}
                    name={data.name}
                    placeholder={data.placeholder}
                    value={addNewConsultant[data.name] || ""}
                    className={data.className}
                    addNewConsultant={addNewConsultant}
                    setAddNewConsultant={setAddNewConsultant}
                  />
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
            type="submit"
            className="button_save_consultant"
            onClick={handleClick}
            onSubmit={postConsultant}
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
