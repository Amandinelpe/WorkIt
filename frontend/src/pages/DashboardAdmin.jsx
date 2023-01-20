// import { React, useState } from "react";
// import NavBar from "../components/NavBar";
// import BoxAdmin from "../components/BoxAdmin";
// // import HelloButton from "../components/HelloButton";
// import Footer from "../components/Footer";
// import "../styles/BoxAdmin.css";

// const DashboardAdmin = () => {
//   const [content, setContent] = useState("dashboard");

//   const handleContent = (ctn) => {
//     setContent(ctn);
//   };

//   const renderSwitch = () => {
//     switch (content) {
//       case "my-profile":
//         return <MyProfile />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div>
//       <NavBar />
//       {/* <HelloButton /> */}
//       <div className="mydashboardadmin_body">
//         <BoxAdmin handleContent={handleContent} />
//       </div>
//       {/* {renderSwitch()} */}
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default DashboardAdmin;
