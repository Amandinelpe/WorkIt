import { React, useEffect, useState} from "react";
import FirmOffer from "./FirmOffer";
import { GetFirmOffer } from "../apis/firmApi"; 
import OfferEmpty from "./OfferEmpty";

const DashboardFirmOffers = ({id}) => {
const [firmOffers, setFirmOffers] = useState([]);
  const [reload, setReload] = useState(true);

  const getFirmOffers = async () => {
    await GetFirmOffer(id).then((res) => setFirmOffers(res.data)).catch ((err) => console.warn(err));
  }
  useEffect(() => {
    getFirmOffers()
  }, [reload]);

  return (
    <div>
      <div className="my_favorites_body">
        <div className="my_favorites_offers">
          <div className="all_favorites_offers_titleblock">
            <h2 className="all_favorites_offers_tMes coups de coeuritle">Les offres en cours</h2>
          </div>
          <div className="my_favorites_offers_body">
            {firmOffers.length === 0 ? (
              <OfferEmpty />
            ) : (
              firmOffers.map((offer) => (
                <FirmOffer
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
