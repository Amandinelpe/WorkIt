import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetFirmData } from "../apis/firmApi";
import dataFirmStatus from "../utils/dataFirmStatus";
import DashboardFirmOffers from "./DashboardFirmOffers";
import "../styles/FirmForm.css";
import NavBar from "./NavBar";

const FirmForm = () => {
  const { id } = useParams();
  const [firm, setFirm] = useState([]);
  const [active, setActive] = useState(false);
  const [disableSaveButton, setDisableSaveButton] = useState(true);

  const getFirmData = async () => {
    await GetFirmData(id)
      .then((res) => setFirm(res.data))
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getFirmData();
  }, []);

  const handleCheck = (e) => {
    setActive(e.target.value === "Actif");
  };

  const handleChange = (e, customValue) => {
    setDisableSaveButton(false);
    const { name, value } = e.target;
    setFirm((prevState) => ({
      ...prevState,
      [name]: customValue ?? value,
    }));
  };

  return (
    <div>
      <NavBar />
      <div className="firm_form_dashboard">
        <div className="box_firm_body_title">
          <h2>Fiche entreprise</h2>
        </div>
        <div className="box_firm_body">
          <div className="informations-entreprise">
            <div className="first_line_details">
              <div className="entreprise_name">
                Nom de l'entreprise
                <label>
                  <input
                    type="text"
                    name="entreprise"
                    className="small-input"
                    value={firm.name}
                  />
                </label>
              </div>
              <div className="consultant_firm">
                Consultant.e attitré.e
                <label>
                  <input
                    type="text"
                    name="consultant"
                    className="very-small-input"
                    value={firm.consultant_id}
                  />
                </label>
              </div>
              <div className="logo_firm_block">
                <img
                  src={firm.logo_url}
                  alt="Logo_firm"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="second_line_details">
            <div className="account_state">
              Etat compte
              <form>
                {dataFirmStatus.radioButtons.account_state.map((state) => (
                  <div key={state}>
                    <input
                      type="radio"
                      id={state.labelName}
                      name="account_state"
                      value={state.inputValue}
                      onChange={handleCheck}
                      checked={state.inputValue === "Actif" || !active}
                    />
                    <label htmlFor={state.labelName}>{state.labelName}</label>
                  </div>
                ))}
              </form>
            </div>
            <div className="Id_firm">
              Id client
              <label>
                <input
                  type="text"
                  name="firm_id"
                  className="very-small-input"
                  value={firm.id}
                  onChange={handleChange}
                />
              </label>
              <label>
                Secteur
                <input
                  type="text"
                  name="type"
                  className="very-small-input"
                  value={firm.type}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="third_line-details">
            <label>
              Email
              <input
                type="text"
                name="email"
                className="small-input"
                value={firm.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Téléphone
              <input
                type="text"
                name="téléphone"
                className="small-input"
                value={firm.contact_phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="fourth_line_details">
            <label>
              Adresse
              <input
                type="text"
                name="adress"
                className="small-input"
                value={firm.adress}
                onChange={handleChange}
              />
            </label>
            <label>
              Ville
              <input
                type="text"
                name="city"
                className="small-input"
                value={firm.city}
                onChange={handleChange}
              />
            </label>
            <label>
              Pays
              <input
                type="text"
                name="country"
                className="small-input"
                value={firm.country}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="firm_form_footer">
            <button
              className="save_button"
              type="submit"
              disabled={disableSaveButton}
              // eslint-disable-next-line no-undef
              onClick={() => handleSave()}
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
      <div className="current_offers">
        <DashboardFirmOffers id={id} />
      </div>
    </div>
  );
};

export default FirmForm;
