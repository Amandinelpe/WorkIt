import React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import frMessages from "../utils/fr.json";
import products from "./products.json";
import SearchBar from "./SearchBar";
import "../styles/Candidature.css";

loadMessages(frMessages, "fr-FR");

const initialDataState = {
  skip: 0,
  take: 10,
};

const Candidature = () => {
  const [page, setPage] = React.useState(initialDataState);
  const pageChange = (event) => {
    setPage(event.page);
  };
  return (
    <div className="container_body">
      <SearchBar />
      <div className="container">
        <div className="filter-box">{/** Filter box */}</div>
        <div className="candidature-box">
          <div className="nouvelles_candidatures">
            <h2>Nouvelles candidatures spontanées</h2>
          </div>
          <div className="dashboard_candidature">
            <button type="submit" className="btn-container">
              Actualiser
            </button>
            <LocalizationProvider language="fr-FR">
              <IntlProvider locale="fr">
                <Grid
                  className="grid_candidature"
                  data={products.slice(page.skip, page.take + page.skip)}
                  skip={page.skip}
                  take={page.take}
                  total={products.length}
                  pageable
                  onPageChange={pageChange}
                >
                  <GridColumn
                    field="dateArrivee"
                    title="Date d'arrivée"
                    width="120px"
                  />
                  <GridColumn
                    field="nomPrenom"
                    title="Nom Prénom"
                    width="180px"
                  />
                  <GridColumn field="idCandidat" title="Id candidat" />
                  <GridColumn
                    field="intitulePoste"
                    title="Intitulé du poste"
                    width="200px"
                  />
                  <GridColumn field="compteClient" title="Compte client" />
                  <GridColumn field="UnitsInStock" title="Traitement" />
                  <GridColumn field="traitement" title="Etat" />
                </Grid>
              </IntlProvider>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidature;
