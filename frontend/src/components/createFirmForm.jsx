// import React, { useState, useEffect } from "react";
// import FirmForm from "./FirmForm";
// import { GetFirmData } from "../apis/firmApi";

// const CreateFirmForm = () => {
//   const [firm, setFirm] = useState({});

//   useEffect(() => {
//     const getFirmData = async () => {
//       setFirm(await GetFirmData());

//       const data = window.localStorage.getItem("firm");
//       if (data) {
//         const userParse = JSON.parse(data);
//         setFirm(await GetFirm(userParse.id));
//       }
//     };
//     getFirmData();
//   }, []);

//   return (
//     <div className="firm_form_dashboard">
//       <div className="box_firm_body_title">
//         <h2>Fiche entreprise</h2>
//       </div>
//       <div className="box_firm_body">
//         <div className="informations-entreprise">
//           <FirmForm />
//           <div className="firm_form_footer">
//             <button
//               className="save_button"
//               type="submit"
//               disabled={disableSaveButton}
//               onClick={() => handleSave()}
//             >
//               Enregistrer
//             </button>
//             <button type="submit" className="cancel_button">
//               Annuler
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateFirmForm;
