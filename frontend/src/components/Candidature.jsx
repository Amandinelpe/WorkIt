import React, { useState, useEffect } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import frMessages from "../utils/fr.json";
import { GetCandidated } from "../utils/getSpontaneousApplications";
import SearchBar from "./SearchBar";
import "../styles/GridContainer.css";
import "../styles/KendoGrid.css";

loadMessages(frMessages, "fr-FR");

const initialDataState = {
  skip: 0,
  take: 10,
};

const cellNomPrenom = (props) => {
  return (
    <td>
      <span>
        {props.dataItem.lastname} {props.dataItem.firstname}
      </span>
    </td>
  );
};

const cellEtat = (props) => {
  let className = "";

  switch (props.dataItem.name) {
    case "En cours de traitement":
      className = "orange";
      break;
    case "Refusée":
      className = "red";
      break;
    case "Acceptée":
      className = "green";
      break;
    default:
      break;
  }
  return (
    <td>
      <span className={className}>{props.dataItem.name}</span>
    </td>
  );
};

const Candidature = () => {
  const [page, setPage] = React.useState(initialDataState);
  const [candidatures, setCandidatures] = useState([]);

  const pageChange = (event) => {
    setPage(event.page);
  };

  const getCandidatures = async () => {
    setCandidatures(await GetCandidated());
  };

  useEffect(() => {
    getCandidatures();
  }, []);

  return (
    <div className="container-body">
      <div className="container">
        <div className="filter-box">{/** Filter box */}</div>
        <div className="box_grid_consultant">
          <h2>Candidatures</h2>
          <div className="filtre_candidature">
            <p>Candidatures acceptées</p>
            <p>Candidatures en cours de traitement</p>
            <p>Candidatures Refusées</p>
          </div>
        </div>
        <div className="grid-container-box">
          <div className="grid-container-box-title">
            <h2>Nouvelles candidatures spontanées</h2>
          </div>
          <div className="grid-container">
            <button
              type="submit"
              className="btn-container"
              onClick={getCandidatures}
            >
              Actualiser
            </button>
            <LocalizationProvider language="fr-FR">
              <IntlProvider locale="fr">
                <Grid
                  className="grid"
                  data={candidatures.slice(page.skip, page.take + page.skip)}
                  skip={page.skip}
                  take={page.take}
                  total={candidatures.length}
                  pageable
                  onPageChange={pageChange}
                >
                  <GridColumn
                    title="Nom Prénom"
                    width="180px"
                    cell={cellNomPrenom}
                    onClick={getCandidatures}
                  />
                  <GridColumn field="user_id" title="Id candidat" />
                  <GridColumn
                    field="title"
                    title="Intitulé du poste"
                    width="200px"
                  />
                  <GridColumn
                    field="offer_id"
                    title="Id de l'offre"
                    width="200px"
                  />
                  <GridColumn
                    field="name"
                    title="Etat de la candidature"
                    width="200px"
                    cell={cellEtat}
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

export default Candidature;
