import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { GetFirmData } from "../apis/firmApi";
import { GetAllJobs, GetJobById } from "../apis/jobApi";
import { GetAllExperiences } from "../apis/experienceApi";
import close from "../assets/img/annuler.png";
import "../styles/Modal.css";

const OfferForm = ({ show, onClose, firmId }) => {
  if (!show) {
    return null;
  }
  const [firmData, setFirmData] = useState([]);
  const [dataOffer, setDataOffer] = useState({});
  const [jobs, setJobs] = useState([]);
  const [experiences, setExperiences] = useState([]);

  console.log(dataOffer, "dataOffer");

  const getFirmData = async () => {
    await GetFirmData(firmId).then((res) => setFirmData(res.data));
  };

  const loadJobs = () => {
    GetAllJobs().then((res) => {
      setJobs(res.data);
    });
  };

  const loadExperiences = () => {
      
      GetAllExperiences().then((res) => {setExperiences(res.data);});
      
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        setDataOffer({ ...dataOffer, [e.target.name]: e.target.value });
    };
    
    const handleTitle = (e) => {
        e.preventDefault();
        setDataOffer({ ...dataOffer, [e.target.name]: e.target.value });
    };
    console.log(experiences,"experiences");
    
    useEffect(() => {
        getFirmData();
        loadJobs();
        loadExperiences();
    }, []);
    
    
    useEffect(() => {
        firmData &&
        setDataOffer({
            ...dataOffer,
            firm_id: firmData.id,
            date: new Date().toLocaleDateString(),
        });
    }, [firmData]);
    
    useEffect(() => {
        dataOffer.job_id &&
        GetJobById(dataOffer.job_id).then((res) => {
            setDataOffer({ ...dataOffer, title: res.data.job_title });
        });
    }, [dataOffer.job_id]);

    const postOffer = () => {};
    
    return ReactDOM.createPortal(
    <form onSubmit={postOffer}>
      <div
        className="modalBox"
        onClick={onClose}
        onKeyDown={onClose}
        role="textbox"
        tabIndex={0}
      >
        <div
          role="textbox"
          className="modalContent"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.stopPropagation()}
          tabIndex={0}
        >
          <div className="modal-header">
            <div className="header-img">
              <img src={firmData.logo_url} alt="" width="8%" />
              <img
                className="header-button"
                aria-hidden="true"
                onClick={onClose}
                onKeyDown={onClose}
                src={close}
                alt="close"
              />
            </div>
            <div>
              <h1 className="modal-title"> Titre </h1>
              <label htmlFor="job_select">
                <select
                  required
                  id="job_select"
                  name="job_id"
                  onChange={handleTitle}
                  autoComplete="on"
                >
                  <option value="">Titre</option>
                  {jobs.map((job) => (
                    <option value={job.id}>{job.job_title}</option>
                  ))}
                </select>
              </label>
              <div className="header-img" />
            </div>
          </div>

          <div className="modal-body">
            <h2 className="modal-subtitle">Lieu</h2>
            <input
              type="text"
              name="city"
              placeholder="Bordeaux"
              className="modal-subtitle"
              value={dataOffer.city}
              onChange={handleChange}
            />
            <h2 className="modal-subtitle">Description de la société</h2>
            <input
              type="text"
              name="description_firm"
              placeholder="Lorem ipsum.."
              className="modal-subtitle"
              value={dataOffer.description_firm}
              onChange={handleChange}
            />
            <h2 className="modal-subtitle">Mission proposée</h2>
            <input
              type="text"
              name="description_mission"
              placeholder="Lorem ipsum.."
              className="modal-subtitle"
              value={dataOffer.description_mission}
              onChange={handleChange}
            />
            <h2 className="modal-subtitle">Environnement technique</h2>
            <input
              type="text"
              name="hard_skills"
              placeholder="Lorem ipsum.."
              className="modal-subtitle"
              value={dataOffer.hard_skills}
              onChange={handleChange}
            />

            <h2 className="modal-subtitle">Compétences relationnelles</h2>
            <input
              type="text"
              name="soft_skills"
              placeholder="Lorem ipsum.."
              className="modal-subtitle"
              value={dataOffer.soft_skills}
              onChange={handleChange}
            />

            <h2 className="modal-subtitle">Expérience requise</h2>
            <label htmlFor="experience_select">
              <select
                required
                id="experience_select"
                name="experience_id"
                onChange={handleChange}
                autoComplete="on"
              >
                <option value="">Experience requise</option>
                {experiences.map((experience) => (
                  <option value={experience.id}>{experience.experience}</option>
                ))}
              </select>
            </label>
             
            <h2 className="modal-subtitle" style= {{marginTop:25} }>Salaire brut annuel proposé</h2>
            <input
              type="number"
              name="salary"
              placeholder="File moi 30 000 "
              className="modal-subtitle"
              value={dataOffer.salary}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button onClick={() => {}} type="submit" className="postule-button">
              {" "}
              Publier l'annonce{" "}
            </button>
          </div>
        </div>
      </div>
    </form>,
    document.getElementById("app")
  );
};

OfferForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
};

export default OfferForm;
