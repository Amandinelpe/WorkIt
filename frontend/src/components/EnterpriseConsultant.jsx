import React, { useState, useEffect } from "react";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import frMessages from "../utils/fr.json";
import SearchBar from "./SearchBar";
import { GetMyEnterprises } from "../apis/firmApi";
// import { GetCountOffers } from "../apis/countOffer";

loadMessages(frMessages, "fr-FR");

const initialDataState = {
  skip: 0,
  take: 10,
};

const EnterpriseConsultant = () => {
  const [page, setPage] = React.useState(initialDataState);
  const [myEnterprises, setMyEnterprises] = useState([]);

  const getMyEnterprises = async () => {
    setMyEnterprises(await GetMyEnterprises());
  };

  const pageChange = (event) => {
    setPage(event.page);
  };

  useEffect(() => {
    getMyEnterprises();
  }, []);

  return (
    <div className="container_enterprise_body">
      <SearchBar />
      <div className="container_enterprise">
        <div className="filter-box-enterprise">
          {/** Filter box enterprise */}
        </div>
        <div className="enterprise-box">
          <h2>Mes entreprises</h2>
        </div>
        <div className="dashboard_enterprises">
          <button
            type="submit"
            className="btn-container"
            onClick={getMyEnterprises}
          >
            Actualiser
          </button>
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
                  field="creation_date_entry"
                  title="Date d'entrée"
                  width="120px"
                />
                <GridColumn
                  title="Nom de l'entreprise"
                  field="name"
                  width="200px"
                />
                <GridColumn field="id" title="Id entreprise" width="60px" />
                <GridColumn
                  field="number"
                  title="Nombre d'annonces"
                  width="150px"
                />
                <GridColumn field="" title="Etat" />
              </Grid>
            </IntlProvider>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseConsultant;
