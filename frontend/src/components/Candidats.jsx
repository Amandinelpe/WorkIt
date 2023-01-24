import React, { useState, useEffect } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import {
  IntlProvider,
  LocalizationProvider,
  loadMessages,
} from "@progress/kendo-react-intl";
import frMessages from "../utils/fr.json";
import { GetUsers } from "../utils/getUsers";
import StateBox from "./StateBox";
import "../styles/Candidature.css";

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

const Candidats = () => {
  const [page, setPage] = useState(initialDataState);
  const [users, setUsers] = useState([]);

  const pageChange = (event) => {
    setPage(event.page);
  };

  const getUsers = async () => {
    setUsers(await GetUsers());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container_body">
      <div className="container">
        <div className="filter-box">
          <StateBox />
        </div>
        <div className="candidature-box">
          <div className="nouvelles_candidatures">
            <h2>Les candidats </h2>
          </div>
          <div className="dashboard_candidature">
            <button type="submit" className="btn-container" onClick={getUsers}>
              Actualiser
            </button>
            <LocalizationProvider language="fr-FR">
              <IntlProvider locale="fr">
                <Grid
                  className="grid_candidature"
                  data={users.slice(page.skip, page.take + page.skip)}
                  skip={page.skip}
                  take={page.take}
                  total={users.length}
                  pageable
                  onPageChange={pageChange}
                >
                  <GridColumn
                    title="Nom Prénom"
                    width="180px"
                    cell={cellNomPrenom}
                  />
                  <GridColumn field="id" title="Id candidat" />
                  <GridColumn
                    field="phone"
                    title="numéro de telephone"
                    width="200px"
                  />
                  <GridColumn field="city" title="Ville" />
                </Grid>
              </IntlProvider>
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidats;
