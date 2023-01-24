import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GetFavoritesOffers } from "../utils/getFavoritesOffers";
import { GetMyApplications } from "../utils/getMyApplications";
import JobAlert from "./JobAlert";
import Offer from "./Offer";

const Dashboard = ({ show }) => {
  const [favoritesOffers, setFavoritesOffers] = useState([]);
  const [myApplications, setMyApplications] = useState([]);

  const getAllFavoritesOffers = async () => {
    setFavoritesOffers(await GetFavoritesOffers());
  };

  const getAllApplications = async () => {
    setMyApplications(await GetMyApplications());
  };

  useEffect(() => {
    getAllFavoritesOffers();
  }, []);

  useEffect(() => {
    getAllApplications();
  }, []);

  if (!show) return null;
  return (
    <div>
      <div className="my_favorites_body">
        <div className="my_favorites_offers">
          <div className="all_favorites_offers_titleblock">
            <h2 className="all_favorites_offers_title">Mes coups de coeur</h2>
          </div>
          <div className="my_favorites_offers_body">
            {favoritesOffers.map((offer) => (
              <Offer date={offer.date} />
            ))}
            <button type="button" className="all_favorites_offers_button">
              {" "}
              Voir plus d'offres{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="job_alerts_body">
        <div className="job_alerts">
          <div className="job_alerts_titleblock">
            <h2 className="job_alerts_title">Mes alertes</h2>
          </div>
          <div className="job_alerts_created">
            <div className="create_new_alert">
              <button type="button" className="create_new_alert_button">
                {" "}
                Créer une nouvelle alerte{" "}
              </button>
            </div>
            <div className="my_alerts_offers_body">
              <JobAlert />
            </div>
            <button type="button" className="job_alerts_button">
              {" "}
              Voir plus d'alertes{" "}
            </button>
          </div>
        </div>
        <div className="my_applications_body">
          <div className="my_applications_offers">
            <div className="my_applications_titleblock">
              <h2 className="my_applications_title">Mes candidatures</h2>
            </div>
            <div className="my_applications_offers_body">
              {myApplications.map((application) => (
                <Offer date={application.date} />
              ))}
              <button type="button" className="my_applications_offers_button">
                {" "}
                Voir plus de candidatures{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  show: PropTypes.bool.isRequired,
};
