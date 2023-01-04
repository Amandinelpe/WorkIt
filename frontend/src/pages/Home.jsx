import { Link } from "react-router-dom";
import LOGO from "../assets/img/logo.png";
import shape1 from "../assets/img/bloc-blanc.png";
import shape2 from "../assets/img/bloc-violet.png";
import wlogo from "../assets/img/logo-central.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <img className="logo_home" src={LOGO} alt="logo" />
      <div className="title_block">
        <h1>
          Chez WorkIT, nous te connectons avec les meilleures entreprises.
        </h1>
        <h1> Viens nous parler de toi </h1>
      </div>
      <div className="main_container_home">
        <img className="shape1" src={shape1} alt="polygone" />
        <img className="wlogo" src={wlogo} alt="logo" />
        <img className="shape2" src={shape2} alt="polygone" />
        <div className="container_text">
          <div className="container_candidat">
            <h2>Espace candidat</h2>
            <h3>
              Rejoins notre communauté de workers et trouve une entreprise qui
              te correspond
            </h3>
          </div>
          <div className="container_consultant">
            <h2>Espace consultant</h2>
            <h3>Trouve un candidat idéal pour les entreprises que tu suis</h3>
          </div>
        </div>
      </div>
      <Link to="/Main">
        <button type="button">Main Page</button>
      </Link>
    </div>
  );
};

export default Home;
