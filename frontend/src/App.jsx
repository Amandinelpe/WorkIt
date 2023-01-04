import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Messagerie from "./pages/Messagerie";
import CreateProfile from "./pages/CreateProfile";
import MonProfil from "./pages/MonProfil";
import ConnexionCandidat from "./pages/ConnexionCandidat";
import Error from "./pages/Error";
import LOGO from "./assets/img/logo.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <img className="logo_workit" src={LOGO} alt="logo" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ConnexionCandidat" element={<ConnexionCandidat />} />
          <Route path="/Main" element={<MainPage />} />
          <Route path="/Messagerie" element={<Messagerie />} />
          <Route path="/MonProfil" element={<MonProfil />} />
          <Route path="/CreateProfile" element={<CreateProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
