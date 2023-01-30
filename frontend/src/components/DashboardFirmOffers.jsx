import { React, useEffect, useState } from "react";
import Offer from "./Offer";
import { GetFirmOffer } from "../apis/firmApi";
import OfferEmpty from "./OfferEmpty";

const DashboardFirmOffers = () => {
  // const { id } = useParams();
  const [firmOffers, setFirmOffers] = useState([]);
  const [reload, setReload] = useState(true);

  const getFirmOffers = async () => {
    await GetFirmOffer()
      .then((res) => setFirmOffers(res.data))
      .catch((err) => console.warn(err));
  };

  useEffect(() => {
    getFirmOffers();
  }, [reload]);

  return (
    <div>
      <div className="my_favorites_body">
        <div className="my_favorites_offers">
          <div className="all_favorites_offers_titleblock">
            <h2 className="all_favorites_offers_title">Mes coups de coeur</h2>
          </div>
          <div className="my_favorites_offers_body">
            {firmOffers.length === 0 ? (
              <OfferEmpty />
            ) : (
              firmOffers.map((offer) => (
                <Offer
                  date={offer.date}
                  firm={offer.name}
                  title={offer.title}
                  logo={offer.logo_url}
                  city={offer.firm_city}
                  id={offer.id}
                  setReload={setReload}
                  reload={reload}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardFirmOffers;
