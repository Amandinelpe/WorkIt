import React, { useState, useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext";
import NavBar from "./NavBar";
import {CreateFirm} from "../apis/firmApi"
import AddFirmInput from "./AddFirmInput";
import firmForm from "../utils/firmForm";
import "../styles/CreateFirmForm.css";

const CreateFirmForm = () => {
  const {auth}=useContext(authContext)
  console.log(auth.data.id, "auth")

  const [addNewFirm, setAddNewFirm] = useState({
    name: null,
    logo_url: null,
    email: null,
    contact_phone: null,
    adress: null,
    city: null,
    postal_code: null,
    country: null,
  });

  useEffect(()=>
  setAddNewFirm({...addNewFirm, consultant_id: auth.data.id}),[auth.data.id])

  console.log(addNewFirm, "addNewFirm")
  const postFirm = (event) => {
    event.preventDefault();
    if (
      addNewFirm.name === null &&
      addNewFirm.consultant_id === null &&
      addNewFirm.logo_url === null &&
      addNewFirm.email === null &&
      addNewFirm.contact_phone === null &&
      addNewFirm.adress === null &&
      addNewFirm.city === null &&
      addNewFirm.postal_code === null &&
      addNewFirm.country === null
    ) {
      // eslint-disable-next-line no-alert
      return alert("Veuillez remplir tous les champs");
    }
    return CreateFirm ({
        name: addNewFirm.name,
        consultant_id: addNewFirm.consultant_id,
        logo_url: addNewFirm.logo_url,
        email: addNewFirm.email,
        contact_phone: addNewFirm.contact_phone,
        adress: addNewFirm.adress,
        city: addNewFirm.city,
        postal_code: addNewFirm.postal_code,
        country: addNewFirm.country,
      })
      .then(() => {
      }
      )
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <NavBar />
      <div className="firm_form_dashboard">
        <div className="box_firm_body_title">
          <h2>Fiche entreprise</h2>
        </div>
        <div className="box_firm_body">
          <form className="fiche_consultant_form" onSubmit={postFirm}>
            <h1>Informations sur l'entreprise</h1>
            <div className="informations-entreprise-block">
              <div className="informations-entreprises-inputs">
                {firmForm.map((data) => (
                  <AddFirmInput
                    key={data.id}
                    id={data.id}
                    label={data.label}
                    type={data.type}
                    name={data.name}
                    placeholder={data.placeholder}
                    value={addNewFirm[data.name] || ""}
                    className={data.className}
                    addNewFirm={addNewFirm}
                    setAddNewFirm={setAddNewFirm}
                  />
                ))}
              </div>
            </div>
            <div className="firmform_footer">
              <button type="submit" className="button_save_firm">
                SAUVEGARDER{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFirmForm;
