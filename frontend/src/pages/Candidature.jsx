import React from "react";
import dataCandidature from "../utils/dataCandidature";
import HelloButton from "../components/HelloButton";
import "../styles/Candidature.css";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

const Candidature = () => {
  return (
    <div>
      <NavBar />
      <HelloButton />
      <div className="candidature">
        {dataCandidature.map((box) => (
          <div>
            <div key={box.id} className="box_candidature">
              <h1>{box.title}</h1>
            </div>
            <div className="candidature_body">
              <ul>
                {box.sections.map((section) => (
                  <li>{section}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <SearchBar />
    </div>
  );
};

export default Candidature;
