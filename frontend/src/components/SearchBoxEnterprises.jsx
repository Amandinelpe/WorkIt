// import { React, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import { GetAllFirms } from "../utils/getAllEnterprises";
// import "../styles/SearchBoxEnterprises.css";

// const SearchBoxEnterprises = ({ setSelectedFirm }) => {
//   const [firm, setFirm] = useState([]);

//   const getFirms = () => {
//     GetAllFirms().then((res) => {
//       setFirm(res.data);
//     });
//   };

//   useEffect(() => {
//     getFirms();
//   }, []);

//   return (
//     <>
//       <div className="searchBoxEnterprises">
//         <input
//           type="text"
//           name="searchBarEnterprise"
//           id="searchBarEnterprise"
//           placeholder="Rechercher une entreprise"
//           // onChange={(e) => setSelectedFirm(e.target.value)}
//         />
//       </div>
//       <div className="search_resultats_enterprises">
//         <div className="search_resultat_enterprise">Données</div>
//       </div>
//     </>
//   );
// };

// export default SearchBoxEnterprises;

// SearchBoxEnterprises.propTypes = {
//   setSelectedFirm: PropTypes.func.isRequired,
// };
