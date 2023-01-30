import React, { useState, useEffect } from "react";
import { GetFirmOffer } from "../apis/firmOfferApi";
// import CreateFirmForm from "./CreateFirmForm";
import "../styles/EnterpriseConsultant.css";
import search from "../assets/img/logo_search_enterprises.png";
import GridEntreprises from "./GridEntreprises";

const EnterpriseConsultant = () => {
  const [myEnterprises, setMyEnterprises] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showForm, setShowForm] = useState(false);

  const getFirmOffer = async () => {
    setMyEnterprises(await GetFirmOffer());
  };

  useEffect(() => {
    getFirmOffer();
  }, []);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const filteredFirms = myEnterprises.filter((firm) => {
    return firm.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className="container_enterprise_body">
      <div className="container_enterprise">
        <div className="enterprise-box">
          <div className="enterprise-details">
            <h2>Mes entreprises</h2>
            <div className="search-box-enterprise">
              <form onSubmit={handleSubmit}>
                <input
                  className="search-input-enterprise"
                  type="text"
                  placeholder="Rechercher une entreprise"
                  value={searchValue}
                  onChange={handleSearch}
                />
                <img
                  src={search}
                  alt="search"
                  className="logo-search-enterprises"
                />
              </form>
            </div>
            <button type="button" onClick={handleShowForm}>
              Créer une fiche entreprise
            </button>
          </div>
          {showForm && (
            <div className="firm_form_component">
              {/* <CreateFirmForm /> */}
            </div>
          )}
          <div className="dashboard_body">
            <GridEntreprises filteredFirms={filteredFirms} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseConsultant;
