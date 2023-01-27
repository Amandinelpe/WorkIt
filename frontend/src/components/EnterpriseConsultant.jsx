import React, { useState, useEffect } from "react";
import "../styles/EnterpriseConsultant.css";
import search from "../assets/img/logo_search_enterprises.png";
import GridEntreprises from "./GridEntreprises";
import { GetFirmOffer } from "../apis/firmOfferApi";

// loadMessages(frMessages, "fr-FR");

// const initialDataState = {
//   skip: 0,
//   take: 10,
// };

const EnterpriseConsultant = () => {
  // const [page, setPage] = React.useState(initialDataState);
  const [myEnterprises, setMyEnterprises] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  const filteredFirms = myEnterprises.filter((firm) => {
    return firm.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  // const handleRowClick = (data) => {
  //   const firmId = data.firm_id;
  //   return `/FicheEntreprise/${firmId}`;
  // };

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
          </div>
          <div className="dashboard_body">
            <GridEntreprises filteredFirms={filteredFirms} />

            {/* <div className="dashboard_enterprises">
              <LocalizationProvider language="fr-FR">
                <IntlProvider locale="fr">
                  <Grid
                    className="grid_enterprise"
                    data={filteredFirms.slice(page.skip, page.take + page.skip)}
                    skip={page.skip}
                    take={page.take}
                    total={filteredFirms.length}
                    pageable
                    onPageChange={pageChange}
                  >
                    <GridColumn
                      title="Id entreprise"
                      field="firm_id"
                      width="70vw"
                    />
                    <GridColumn
                      title="Nom de l'entreprise"
                      field="name"
                      width="285vw"
                    />
                    <GridColumn
                      title="Téléphone"
                      field="contact_phone"
                      width="200vw"
                    />
                    <GridColumn title="Email" field="email" width="200vw" />
                    <GridColumn title="Ville" field="city" width="200vw" />
                    <GridColumn
                      title="Nombre d'annonces"
                      field="nbreoffers"
                      width="150vw"
                    />
                    <GridColumn
                      title="Actions"
                      width="100vw"
                      cell={(props) => (
                        <td>
                          <Link to={handleRowClick(props.dataItem)}>
                            Voir la fiche
                          </Link>
                        </td>
                      )}
                    />
                  </Grid>
                </IntlProvider>
              </LocalizationProvider>
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseConsultant;
