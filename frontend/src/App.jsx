import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Messagerie from "./pages/Messagerie";
import CreateProfile from "./pages/CreateProfile";
import MyProfile from "./pages/MyProfile";
import Connexion from "./pages/Connexion";
import DashboardCandidate from "./pages/DashboardCandidate";
import Error from "./pages/Error";
import LOGO from "./assets/img/logo.png";
import AdminConsultantPage from "./pages/AdminConsultantPage";
import AuthProvider from "./context/AuthContext";
import "./App.css";
import "./styles/Flex.css";
import Candidature from "./pages/Candidature";
import ForgottenPassword from "./pages/ForgottenPassword";
import ProtectedRoute from "./context/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/ConnexionCandidat"
              element={<Connexion user="user" />}
            />
            <Route
              path="/ConnexionConsultant"
              element={<Connexion user="consultant" />}
            />
            <Route path="/Main" element={<MainPage />} />
            <Route
              path="/Messagerie"
              element={
                <ProtectedRoute>
                  <Messagerie />
                </ProtectedRoute>
              }
            />
            <Route
              path="/MonProfil"
              element={
                // <ProtectedRoute>
                <MyProfile />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/DashboardCandidate"
              element={
                <ProtectedRoute>
                  <DashboardCandidate />
                </ProtectedRoute>
              }
            />
            <Route path="/CreateProfile" element={<CreateProfile />} />
            <Route path="/AdminConsultant" element={<AdminConsultantPage />} />
            <Route path="/Candidature" element={<Candidature />} />
            <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
        <Link to="/Main">
          <img className="logo_workit" src={LOGO} alt="logo" />
        </Link>
      </Router>
    </div>
  );
};

export default App;
