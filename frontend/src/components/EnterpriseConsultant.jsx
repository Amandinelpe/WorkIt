import React, { useState, useEffect } from "react";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import frMessages from "../utils/fr.json";
import SearchBar from "./SearchBar";
import { GetFirmOffer } from "../apis/firmApi";
import "../styles/EnterpriseConsultant.css";

loadMessages(frMessages, "fr-FR");

const initialDataState = {
  skip: 0,
  take: 10,
};

const EnterpriseConsultant = () => {
  const [page, setPage] = React.useState(initialDataState);
  const [myEnterprises, setMyEnterprises] = useState([]);

  const pageChange = (event) => {
    setPage(event.page);
  };

  const getFirmOffer = async () => {
    setMyEnterprises(await GetFirmOffer());
  };

  useEffect(() => {
    getFirmOffer();
  }, []);

  return (
    <div className="container_enterprise_body">
      <SearchBar />
      <div className="container_enterprise">
        <div className="filter-box-enterprise">
          {/** Filter box enterprise */}
        </div>
        <div className="enterprise-box">
          <div className="enterprise-details">
            <h2>Mes entreprises</h2>
          </div>
          <div className="dashboard_enterprises">
            <LocalizationProvider language="fr-FR">
              <IntlProvider locale="fr">
                <Grid
                  className="grid_enterprise"
                  data={myEnterprises.slice(page.skip, page.take + page.skip)}
                  skip={page.skip}
                  take={page.take}
                  total={myEnterprises.length}
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
                    width="300vw"
                  />
                  <GridColumn title="Email" field="email" width="300vw" />
                  <GridColumn title="Ville" field="city" width="300vw" />
                  <GridColumn
                    title="Nombre d'annonces"
                    field="nbreoffers"
                    width="150vw"
                  />
                </Grid>
              </IntlProvider>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseConsultant;
