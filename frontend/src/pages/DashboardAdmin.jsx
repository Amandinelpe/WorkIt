import { React, useState } from "react";
import NavBar from "../components/NavBar";
import BoxAdmin from "../components/BoxAdmin";
import Footer from "../components/Footer";
import "../styles/BoxAdmin.css";
import MyProfile from "../components/MyProfile";
import Dashboard from "../components/Dashboard";

const DashboardAdmin = () => {
  const [content, setContent] = useState("dashboard");

  const handleContent = (ctn) => {
    setContent(ctn);
  };

  const renderSwitch = () => {
    switch (content) {
      case "my-profile":
        return <MyProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <NavBar />
      <div className="mydashboardadmin_body">
        <BoxAdmin handleContent={handleContent} />
      </div>
      {renderSwitch()}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardAdmin;
