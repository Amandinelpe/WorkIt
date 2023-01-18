import { React, useEffect, useState } from "react";
import { GetAllJobs } from "../apis/jobApi";
import { GetAllCities } from "../apis/offerApi";
import "../styles/SearchBar.css";
import search from "../assets/img/search.png";

const SearchBar = () => {
  const [job, setJob] = useState([]);
  const [cities, setCities] = useState([]);

  const getCities = () => {
    GetAllCities().then((res) => {
      setCities(res.data);
    });
  };

  const loadJobs = () => {
    GetAllJobs().then((res) => {
      setJob(res.data);
    });
  };
  console.warn(job, cities, "job", "cities");

  useEffect(() => {
    loadJobs();
    getCities();
  }, []);

  return (
    <div className="searchBar">
      <div className="inputBox2">
        <div className="inputBox">
          <label htmlFor="">
            <select name="job_select" id="">
              <option disabled selected value>
                Quoi?{" "}
              </option>
              {job.map((work) => (
                <option value={work.id}> {work.job_title}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="inputBox">
          <label htmlFor="">
            <select name="city_select" id="">
              <option disabled selected value>
                {" "}
                Ou?{" "}
              </option>
              {cities.map((city) => (
                <option value={city.firm_city}>{city.firm_city} </option>
              ))}
            </select>
          </label>
        </div>
        <img src={search} alt="search" className="logo" />
      </div>
    </div>
  );
};

export default SearchBar;
