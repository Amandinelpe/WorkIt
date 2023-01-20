import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import socketIO from "socket.io-client";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import CreateProfile from "./pages/CreateProfile";
import Connexion from "./pages/Connexion";
import DashboardCandidate from "./pages/DashboardCandidate";
import ChatPageCandidate from "./pages/ChatPageCandidate";
import DashboardConsultant from "./pages/DashboardConsultant";
import Error from "./pages/Error";
import LOGO from "./assets/img/logo.png";
import AdminConsultantPage from "./pages/AdminConsultantPage";
import AuthProvider from "./context/AuthContext";
import "./styles/Flex.css";
import ForgottenPassword from "./pages/ForgottenPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRouteUser from "./context/ProtectedRouteUser";
import ProtectedRouteConsultant from "./context/ProtectedRouteConsultant";
import "@progress/kendo-theme-default/dist/all.css";
import DashboardAdmin from "./pages/DashboardAdmin";
// import ProtectedRouteAdmin from "./context/ProtectedRouteAdmin";

import "./App.css";

const App = () => {
  const socket = socketIO.connect(import.meta.env.VITE_BACKEND_URL_FORCHAT);

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
              element={<ChatPageCandidate socket={socket} />}
            />
            <Route
              path="/DashboardCandidate"
              element={
                <ProtectedRouteUser>
                  <DashboardCandidate />
                </ProtectedRouteUser>
              }
            />
            <Route
              path="/DashboardConsultant"
              element={
                <ProtectedRouteConsultant>
                  <DashboardConsultant />
                </ProtectedRouteConsultant>
              }
            />
            <Route
              path="/DashboardAdmin"
              element={
                // <ProtectedRouteAdmin>
                <DashboardAdmin />
                // </ProtectedRouteAdmin>
              }
            />
            <Route path="/CreateProfile" element={<CreateProfile />} />
            <Route path="/AdminConsultant" element={<AdminConsultantPage />} />
            <Route path="/ForgottenPassword" element={<ForgottenPassword />} />
            <Route
              path="/ResetPassword/:token/:id"
              element={<ResetPassword />}
            />
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
