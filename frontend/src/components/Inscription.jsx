import React, { useState } from "react";

const Inscription = () => {
  const [profile, setProfile] = useState({});

  const handleFirstName = (event) => {
    setProfile({ ...profile, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setProfile({ ...profile, lastName: event.target.value });
  };

  const handleJob = (event) => {
    setProfile({ ...profile, job: event.target.value });
  };

  const handleCity = (event) => {
    setProfile({ ...profile, city: event.target.value });
  };

  const handlePassword = (event) => {
    setProfile({ ...profile, password: event.target.value });
  };

  console.warn(profile, "my state");

  return (
    <div>
      <div>
        Je m'appelle{" "}
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={profile.firstName}
          onChange={handleFirstName}
        />{" "}
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={profile.lastName}
          onChange={handleLastName}
        />{" "}
        et je cherche un poste{" "}
      </div>
      <div>
        de{" "}
        <input
          type="text"
          name="job"
          placeholder="Développeur"
          value={profile.job}
          onChange={handleJob}
        />{" "}
        à{" "}
        <input
          type="text"
          name="city"
          placeholder="Bordeaux"
          value={profile.city}
          onChange={handleCity}
        />{" "}
      </div>
      <div>
        Je choisis mon mot de passe :{" "}
        <input
          type="text"
          name="passWord"
          placeholder="Mot de passe"
          value={profile.password}
          onChange={handlePassword}
        />
      </div>
    </div>
  );
};

export default Inscription;
