import React from "react";
import RadioButton from "./RadioButton";
import "../styles/MyProfile.css";
import dataMyProfile from "../utils/dataMyProfile";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <div className="flex flex-fd-column flex-ai-center flex-jc-center">
        <div className="box box_candidate">
          <div className="box_candidate_title">
            <h1>Mon Profil</h1>
          </div>
          <div className="box_candidate_body">
            <div>
              <h3>Mes informations personnelles</h3>
              <div className="informations-personnelles flex flex-fd-row flex-ai-flex-start flex-jc-space-between">
                <div>
                  <div className="gender">
                    <p className="label">Genre</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {dataMyProfile.radioButtons.gender.map((item) => (
                        <RadioButton
                          key={item.id}
                          labelName={item.labelName}
                          inputName="gender"
                          inputValue={item.inputValue}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-fd-row flex-jc-space-between">
                    <div className="flex flex-fd-column flex-gap-3vh">
                      <label>
                        Prénom
                        <input
                          type="text"
                          name="prenom"
                          className="small-input"
                        />
                      </label>
                      <label>
                        Email
                        <input
                          type="text"
                          name="email"
                          className="small-input"
                        />
                      </label>
                      <label>
                        Localisation
                        <input
                          type="text"
                          name="localisation"
                          className="small-input"
                        />
                      </label>
                    </div>
                    <div className="flex flex-fd-column flex-gap-7vh">
                      <label>
                        Nom
                        <input type="text" name="nom" className="small-input" />
                      </label>
                      <div>
                        <input
                          type="file"
                          name="file"
                          id="file"
                          className="inputfile"
                        />
                        <label htmlFor="file">Je dépose mon CV</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="picture_profil flex flex-fd-column flex-ai-center flex-jc-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt="utilisateur"
                  />
                  <p>Photo de profil</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Ma situation actuelle </h3>
              <div className="flex flex-fd-row flex-ai-flex-start flex-jc-space-between">
                <div className="flex flex-fd-column flex-gap-3vh">
                  <label>
                    Poste actuel ou dernier poste occupé
                    <input
                      type="text"
                      name="poste-actuel"
                      className="large-input"
                    />
                  </label>
                  <div>
                    <p className="label">Disponibilité</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {dataMyProfile.radioButtons.disponibility.map((item) => (
                        <RadioButton
                          key={item.id}
                          labelName={item.labelName}
                          inputName="disponibilite"
                          inputValue={item.inputValue}
                        />
                      ))}
                    </div>
                  </div>
                  <label>
                    Niveau de qualification
                    <input
                      type="text"
                      name="niveau-qualification"
                      className="small-input"
                    />
                  </label>
                  <label>
                    Mon site internet
                    <input
                      type="text"
                      name="mon-site-internet"
                      className="small-input"
                    />
                  </label>
                  <div>
                    <p className="label">Reconnu travailleur handicapé</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {dataMyProfile.radioButtons.recognizedDisabledWorker.map(
                        (item) => (
                          <RadioButton
                            key={item.id}
                            labelName={item.labelName}
                            inputName="travailleur-handicape"
                            inputValue={item.inputValue}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-fd-column flex-gap-3vh">
                  <label>
                    Situation actuelle
                    <input
                      type="text"
                      name="situation-actuelle"
                      className="large-input"
                    />
                  </label>
                  <div>
                    <p className="label">Niveau d'expérience</p>
                    <div className="flex flex-fd-row flex-ai-center flex-jc-flex-start field">
                      {dataMyProfile.radioButtons.experienceLevel.map(
                        (item) => (
                          <RadioButton
                            key={item.id}
                            labelName={item.labelName}
                            inputName="niveau-experience"
                            inputValue={item.inputValue}
                          />
                        )
                      )}
                    </div>
                  </div>
                  <label>
                    Salaire (annuel brut)
                    <input type="text" name="salaire" className="small-input" />
                  </label>
                  <label>
                    Mon GitHub
                    <input
                      type="text"
                      name="mon-github"
                      className="small-input"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
