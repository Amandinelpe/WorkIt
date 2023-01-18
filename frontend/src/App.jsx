import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Messagerie from "./pages/Messagerie";
import CreateProfile from "./pages/CreateProfile";
import Connexion from "./pages/Connexion";
import DashboardCandidate from "./pages/DashboardCandidate";
import DashboardConsultant from "./pages/DashboardConsultant";
import Error from "./pages/Error";
import LOGO from "./assets/img/logo.png";
import AdminConsultantPage from "./pages/AdminConsultantPage";
import AuthProvider from "./context/AuthContext";
import "./styles/Flex.css";
import ForgottenPassword from "./pages/ForgottenPassword";
import ProtectedRouteUser from "./context/ProtectedRouteUser";
// import ProtectedRouteConsultant from "./context/ProtectedRouteConsultant";
import "./App.css";

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
                <ProtectedRouteUser>
                  <Messagerie />
                </ProtectedRouteUser>
              }
            />
            <Route
              path="/DashboardCandidate"
              element={
                // <ProtectedRouteUser>
                <DashboardCandidate />
                // </ProtectedRouteUser>
              }
            />
            <Route
              path="/DashboardConsultant"
              element={
                // <ProtectedRouteConsultant>
                <DashboardConsultant />
                // </ProtectedRouteConsultant>
              }
            />
            <Route path="/CreateProfile" element={<CreateProfile />} />
            <Route path="/AdminConsultant" element={<AdminConsultantPage />} />
            <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
        <Link to="/Main">
          <img className="logo_workit" src={LOGO} alt="logo" />
        </Link>
        <Link to="/Main">
          <img className="logo_workit" src={LOGO} alt="logo" />
        </Link>
      </Router>
    </div>
  );
};

export default App;
