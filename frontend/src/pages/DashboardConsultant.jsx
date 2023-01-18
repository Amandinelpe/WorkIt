import { React, useState } from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxConsultants from "../components/BoxConsultants";
import Footer from "../components/Footer";
import Dashboard from "../components/Dashboard";
import MyProfile from "../components/MyProfile";
import "../styles/DashboardConsultants.css";

const DashboardConsultant = () => {
  const [content, setContent] = useState("dashboard");

  const handleContent = (ctn) => {
    setContent(ctn);
  };

  const renderSwitch = () => {
    switch (content) {
      case "my-profile":
        return <MyProfile />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <NavBar />
      <HelloButton />
      <div className="mydashboard_body">
        <BoxConsultants handleContent={handleContent} />
      </div>
      <div>{renderSwitch()}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardConsultant;
