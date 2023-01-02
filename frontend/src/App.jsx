import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import Messagerie from "./pages/Messagerie";
import MonProfil from "./pages/MonProfil";
import Error from "./pages/Error";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<MainPage />} />
        <Route path="/Messagerie" element={<Messagerie />} />
        <Route path="/MonProfil" element={<MonProfil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
