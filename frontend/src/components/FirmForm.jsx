import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Offer from "./Offer";
import { GetFirmData, GetFirmOffer } from "../apis/firmApi"; 
import { useEffect } from "react";



const FirmForm = (updateFirm, firmOffer) => {
  const {id} = useParams();
  const [firm, setFirm] = useState([]);
  const [message, setMessage] = useState();
  const [disableSaveButton, setDisableSaveButton] = useState(true);
  const [firmOffers, setFirmOffers] = useState([]);
  console.log(id, "id")
  const getFirmData = async () => {
    await GetFirmData(id).then((res) => setFirm(res.data)).catch ((err) => console.log(err));
  }

  const getFirmOffer = async () => {
    await GetFirmOffer(id).then((res) => setFirmOffers(res.data)).catch ((err) => console.log(err));
  }

  useEffect(() => {
    getFirmData();
    getFirmOffer();
  },[])

  console.log(firmOffers, "firmOffers");
  console.log(firm, "firm");
  const handleChange = (e, customValue) => {
    setMessage(null);
    setDisableSaveButton(false);
    const { name, value } = e.target;
    setFirm((prevState) => ({
      ...prevState,
      [name]: customValue ?? value,
    }));
  };

  return (
    <div>
      <NavBar/>
    <div className="firm_form_body">
      <div className="firm_form_block">
        <div className="box_box_firm">
          <div className="box_firm_title">
            <h1>Fiche entreprise</h1>
          </div>
          <div className="box_firm_body">
            <div className="informations-entreprise">
              <div>
                <div className="first_line_details">
                  <div className="entreprise">
                    <p className="label-entreprise">{firm.name}</p>
                  </div>
                  <div>
                    <div className="account_state">
                      <label>
                        Etat compte
                        <input
                          type="text"
                          name="account_state"
                          className="small-input"
                          />
                      </label>
                    </div>
                  </div>
                  <div className="Id_firm">
                    <label>
                      Id client
                      <input
                        type="text"
                        name="name"
                        className="small-input"
                        value={firm.firm_id}
                        onChange={handleChange}
                        />
                    </label>
                  </div>
                  <div className="second_line_details">
                    <label>
                      Secteur
                      <input
                        type="text"
                        name="niveau-qualification"
                        className="small-input"
                        />
                    </label>
                    <label>
                      Mon site internet
                      <input
                        type="text"
                        name="website"
                        className="small-input"
                        value={firm.website}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="third_line-details">
                    <label>
                      Nombre de salariés
                      <input
                        type="text"
                        name="nombre de salariés"
                        className="small-input"
                        />
                    </label>
                    <label>
                      Email
                      <input
                        type="text"
                        name="email"
                        className="small-input"
                        value={firm.email}
                        />
                    </label>
                  </div>
                  <div className="logo_enterprise_form">
                    <div>
                      <p>Logo</p>
                    </div>
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
                    <div className="fifth_line_details">
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
                    </div>
                    <div className="current_offers">
                      <Offer value={firmOffer} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                        </div>
  );
};

export default FirmForm;
