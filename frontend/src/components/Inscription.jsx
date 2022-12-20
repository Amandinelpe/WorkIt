import React, { useState } from "react";

const Inscription = () => {
  const [firstName, setFirstName] = useState("Prénom");
  const [lastName, setLastName] = useState("Nom");
  const [job, setJob] = useState("Métier");
  const [city, setCity] = useState("Ville");
  const [password, setPassword] = useState("XXXXXX");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleJob = (event) => {
    setJob(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  console.warn(firstName, lastName, job, city, password, "my state");

  return (
    <div>
      <div>
        Je m'appelle{" "}
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />{" "}
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />{" "}
        et je cherche un poste{" "}
      </div>
      <div>
        de <input type="text" name="job" value={job} onChange={handleJob} /> à{" "}
        <input type="text" name="city" value={city} onChange={handleCity} />{" "}
      </div>
      <div>
        Je choisis mon mot de passe :{" "}
        <input
          type="text"
          name="passWord"
          value={password}
          onChange={handlePassword}
        />
      </div>
    </div>
  );
};

export default Inscription;
