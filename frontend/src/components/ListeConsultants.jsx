import { React, useEffect, useState } from "react";
import { GetAllConsultants } from "../utils/getAllConsultants";
import Consultantline from "./Consultantline";

const ListeConsultants = () => {
  const [consultants, setConsultants] = useState([]);

  const getListAllConsultants = async () => {
    setConsultants(await GetAllConsultants);
  };

  useEffect(() => getListAllConsultants(), []);

  return (
    <div>
      {consultants.map((consultant) => (
        <Consultantline key={consultant.id} consultant={consultant} />
      ))}
    </div>
  );
};

export default ListeConsultants;
