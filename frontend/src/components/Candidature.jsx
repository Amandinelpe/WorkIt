import React, { useState, useEffect } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import frMessages from "../utils/fr.json";
import { GetSpontaneousApplications } from "../utils/getSpontaneousApplications";
import SearchBar from "./SearchBar";
import Comparer from "../assets/img/comparer.png";
import "../styles/GridContainer.css";
import "../styles/KendoGrid.css";

loadMessages(frMessages, "fr-FR");

const initialDataState = {
  skip: 0,
  take: 10,
};

const cellTraitement = () => {
  const style = {
    textAlign: "center",
    verticalAlign: "middle",
  };

  const logoStyle = {
    width: "20px",
    height: "20px",
  };

  return (
    <td style={style}>
      <img src={Comparer} alt="Comparer" style={logoStyle} />
    </td>
  );
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

  switch (props.dataItem.application_state_id) {
    case 1:
      className = "grey";
      break;
    case 2:
      className = "orange";
      break;
    case 3:
      className = "red";
      break;
    case 4:
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
  const [spontaneousApplications, setSpontaneousApplications] = useState([]);

  const pageChange = (event) => {
    setPage(event.page);
  };

  const getSpontaneousApplications = async () => {
    setSpontaneousApplications(await GetSpontaneousApplications());
  };

  useEffect(() => {
    getSpontaneousApplications();
  }, []);

  return (
    <div className="container-body">
      <SearchBar />
      <div className="container">
        <div className="filter-box">{/** Filter box */}</div>
        <div className="grid-container-box">
          <div className="grid-container-box-title">
            <h2>Nouvelles candidatures spontanées</h2>
          </div>
          <div className="grid-container">
            <button
              type="submit"
              className="btn-container"
              onClick={getSpontaneousApplications}
            >
              Actualiser
            </button>
            <LocalizationProvider language="fr-FR">
              <IntlProvider locale="fr">
                <Grid
                  className="grid"
                  data={spontaneousApplications.slice(
                    page.skip,
                    page.take + page.skip
                  )}
                  skip={page.skip}
                  take={page.take}
                  total={spontaneousApplications.length}
                  pageable
                  onPageChange={pageChange}
                >
                  <GridColumn
                    field="creation_date_convert"
                    title="Date d'arrivée"
                    width="120px"
                  />
                  <GridColumn
                    title="Nom Prénom"
                    width="180px"
                    cell={cellNomPrenom}
                  />
                  <GridColumn field="id" title="Id candidat" />
                  <GridColumn
                    field="job_title"
                    title="Intitulé du poste"
                    width="200px"
                  />
                  <GridColumn title="Traitement" cell={cellTraitement} />
                  <GridColumn title="Etat" cell={cellEtat} />
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
