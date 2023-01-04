import { Link } from "react-router-dom";
import shape1 from "../assets/img/bloc-blanc.png";
import shape2 from "../assets/img/bloc-violet.png";
import wlogo from "../assets/img/logo-central.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home_page">
      <div className="title_block">
        <h1>
          Chez WorkIT, nous te connectons avec les meilleures entreprises.
        </h1>
        <h1> Viens nous parler de toi... </h1>
      </div>
      <div className="main_container_home">
        <img className="shape1" src={shape1} alt="polygone" />
        <img className="wlogo" src={wlogo} alt="logo" />
        <img className="shape2" src={shape2} alt="polygone" />
        <div className="container_text">
          <div className="container_candidat">
            <h2>Espace candidat</h2>
            <p>
              Rejoins notre communauté de workers et trouve une entreprise qui
              te correspond
            </p>
            <button type="button" className="button_mainpage_candidat">
              {" "}
              ACCES CANDIDAT
            </button>
            <p className="p_small">
              Vous n’avez pas de compte ?{" "}
              <Link to="/CreateProfile" className="link_p">
                Inscrivez-vous
              </Link>
            </p>
            <p className="p_small">
              Simple visiteur ?{" "}
              <Link to="/Main" className="link_p">
                Cliquez-ici
              </Link>
            </p>
          </div>
          <div className="container_consultant">
            <h2>Espace consultant</h2>
            <p>Trouve un candidat idéal pour tes clients</p>
            <button type="button" className="button_mainpage_consultant">
              {" "}
              ACCES CONSULTANT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
