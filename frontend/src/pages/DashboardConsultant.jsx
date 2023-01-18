import { React, useState } from "react";
import NavBar from "../components/NavBar";
import HelloButton from "../components/HelloButton";
import BoxConsultants from "../components/BoxConsultants";
import Footer from "../components/Footer";
import "../styles/DashboardConsultants.css";

const DashboardConsultant = () => {
  const [navigation, setNavigation] = useState(1);

  return (
    <div>
      <NavBar />
      <HelloButton />
      <div className="mydashboard_body">
        <BoxConsultants setNavigation={setNavigation} navigation={navigation} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardConsultant;
