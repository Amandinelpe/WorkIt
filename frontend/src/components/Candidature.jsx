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
import "../styles/Candidature.css";

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
    <div className="container_body">
      <SearchBar />
      <div className="container">
        <div className="filter-box">{/** Filter box */}</div>
        <div className="candidature-box">
          <div className="nouvelles_candidatures">
            <h2>Nouvelles candidatures spontanées</h2>
          </div>
          <div className="dashboard_candidature">
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
                  className="grid_candidature"
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
                  <GridColumn field="name" title="Etat" />
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
