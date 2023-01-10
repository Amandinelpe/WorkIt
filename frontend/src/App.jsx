import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Messagerie from "./pages/Inbox";
import CreateProfile from "./pages/CreateProfile";
import Connexion from "./pages/Connexion";
import DashboardCandidate from "./pages/DashboardCandidate";
import Error from "./pages/Error";
import LOGO from "./assets/img/logo.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:ConnexionCandidat" element={<Connexion />} />
          <Route path="/:ConnexionConsultant" element={<Connexion />} />
          <Route path="/Main" element={<MainPage />} />
          <Route path="/Messagerie" element={<Messagerie />} />
          <Route path="/CreateProfile" element={<CreateProfile />} />
          <Route path="/DashboardCandidate" element={<DashboardCandidate />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Link to="/Main">
          <img className="logo_workit" src={LOGO} alt="logo" />
        </Link>
      </Router>
    </div>
  );
};

export default App;
