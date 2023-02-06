import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GetConsultants } from "../utils/getConsultants";
import "../styles/ConsultantsFilter.css";

const ConsultantsFilter = ({ setFilterUser, filterUser }) => {
  const [consultant, setConsultant] = useState([]);

  const getConsultantslist = async () => {
    setConsultant(await GetConsultants());
  };

  useEffect(() => {
    getConsultantslist();
  }, []);

  return (
    <div className="publication_date_box">
      <div className="date_titleblock">
        <h3 className="date_title">PAR CONSULTANTS</h3>
      </div>
      <div className="date_body">
        <fieldset>
          <input
            className="input_date"
            type="radio"
            id="0"
            name="consultant_id"
            value="0"
            onChange={(e) =>
              setFilterUser({
                ...filterUser,
                [e.target.name]: Number(e.target.id),
              })
            }
          />
          <label htmlFor="0">Tous</label>
          {consultant.map((etat) => (
            <div>
              <input
                className="input_date"
                type="radio"
                id={etat.id}
                name="consultant_id"
                value={etat.id}
                onChange={(e) =>
                  setFilterUser({
                    ...filterUser,
                    [e.target.name]: Number(e.target.id),
                  })
                }
              />
              <label htmlFor={etat.id}>
                {etat.lastname} {etat.firstname}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
};

export default ConsultantsFilter;

ConsultantsFilter.propTypes = {
  setFilterUser: PropTypes.func.isRequired,
  filterUser: PropTypes.string.isRequired,
};
