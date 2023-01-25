import { React, useEffect, useState } from "react";
import { GetAllConsultants } from "../utils/getAllConsultants";
import ConsultantLine from "./ConsultantLine";

const ListeConsultants = () => {
  const [consultants, setConsultants] = useState([]);
  // console.log(consultants, "coucou");

  const getListAllConsultants = async () => {
    setConsultants(await GetAllConsultants());
  };

  useEffect(() => {
    getListAllConsultants();
  }, []);

  return (
    <div>
      {consultants.map((consultant) => (
        <ConsultantLine key={consultant.id} consultant={consultant} />
      ))}
    </div>
  );
};

export default ListeConsultants;
