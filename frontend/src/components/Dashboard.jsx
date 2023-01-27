import { React, useEffect, useState, useContext } from "react";
import { authContext } from "../context/AuthContext";
import { AllFavoriteId } from "../apis/favoriteApi";
import JobAlert from "./JobAlert";
import Offer from "./Offer";
import OfferEmpty from "./OfferEmpty";
import { GetCandidatedsByUser } from "../apis/candidatedApi";

const Dashboard = () => {
  const { auth } = useContext(authContext);
  const [favoritesOffers, setFavoritesOffers] = useState([]);
  const [myApplications, setMyApplications] = useState([]);
  const [reload, setReload] = useState(true);

  const getAllFavoritesId = async () => {
    await AllFavoriteId(auth.data.id).then((res) =>
      setFavoritesOffers(res.data)
    );
  };

  const getAllApplicationsId = async () => {
    await GetCandidatedsByUser(auth.data.id).then((res) =>
      setMyApplications(res.data)
    );
  };

  useEffect(() => {
    getAllFavoritesId();
    getAllApplicationsId();
  }, [reload]);

  return (
    <div>
      <div className="my_favorites_body">
        <div className="my_favorites_offers">
          <div className="all_favorites_offers_titleblock">
            <h2 className="all_favorites_offers_title">Mes coups de coeur</h2>
          </div>
          <div className="my_favorites_offers_body">
            {favoritesOffers.length === 0 ? (
              <OfferEmpty />
            ) : (
              favoritesOffers.map((offer) => (
                <Offer
                  date={offer.date}
                  firm={offer.name}
                  title={offer.title}
                  logo={offer.logo_url}
                  city={offer.firm_city}
                  id={offer.id}
                  setReload={setReload}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="my_applications_body">
        <div className="my_applications_offers">
          <div className="my_applications_titleblock">
            <h2 className="my_applications_title">Mes candidatures</h2>
          </div>
          <div className="my_applications_offers_body">
            {myApplications.length === 0 ? (
              <OfferEmpty />
            ) : (
              myApplications.map((offer) => (
                <Offer
                  date={offer.date}
                  firm={offer.name}
                  title={offer.title}
                  logo={offer.logo_url}
                  city={offer.firm_city}
                  id={offer.id}
                  setReload={setReload}
                />
              ))
            )}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
