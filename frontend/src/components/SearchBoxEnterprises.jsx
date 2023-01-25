// import { React, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { GetAllFirms } from "../apis/jobApi";
// import "../styles/SearchBoxEnterprises.css";
// import search from "../assets/img/search.png";

// const SearchBoxEnterprises = ({ setSelectedFirm }) => {
//   const [firm, setFirm] = useState([]);

//   const getFirms = () => {
//     GetAllCities().then((res) => {
//       setCities(res.data);
//     });
//   };

//   useEffect(() => {
//     loadJobs();
//     getCities();
//   }, []);

//   return (
//     <div className="searchBar">
//       <div className="inputBox">
//         <label htmlFor="firm _select">
//           <select
//             id="job_select"
//             onChange={(e) => setSelectedJob(e.target.value)}
//           >
//             <option disabled selected value>
//               Quoi?{" "}
//             </option>
//             <option value="">Tous les postes</option>
//             {job.map((work) => (
//               <option value={work.id}> {work.job_title}</option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <div className="inputBox">
//         <label htmlFor="city_select">
//           <select id="city_select" onChange={(e) => setCity(e.target.value)}>
//             <option disabled selected value>
//               {" "}
//               Ou?{" "}
//             </option>
//             <option value="">Partout</option>
//             {cities.map((city) => (
//               <option value={city.firm_city}>{city.firm_city} </option>
//             ))}
//           </select>
//         </label>
//       </div>
//       <img src={search} alt="search" className="logo" />
//     </div>
//   );
// };

// export default SearchBoxEnterprises;

// SearchBoxEnterprises.propTypes = {
//   setSelectedJob: PropTypes.func.isRequired,
//   setCity: PropTypes.func.isRequired,
// };
