import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import logements from '../../database/logements.json';
import Collapse from '../../components/Collapse/Collapse.jsx';
import starActive from '../../assets/star-active.png';
import starInactive from '../../assets/star-inactive.png';
import './Housing.scss';

export default function Housing() {
    const { id } = useParams();
    const logement = logements.find((l) => l.id === id);
  
    if (!logement) {
      return <>
      <Navigate to="/error" />
    </>
    }

    const stars = Array.from({ length: 5 }, (_, index) =>
    index < logement.rating ? starActive : starInactive
  );
  
    return (
      <div className='Housing_main'>
        <Header />
        <div className="housing-container">
          <Slideshow images={logement.pictures} />
          <div className='left_right'>
          <div className='left'>
          <h1 className="title">{logement.title}</h1>
          <p className="location">{logement.location}</p> {/* Ajout de la location */}
          <div className="tags">
            {logement.tags.map((tag, index) => (
            <span className="tag" key={index}>
            {tag} {/* Affichage des tags */}
            </span> 
            ))}
            </div>
            </div>
            <div className='right'>
          <div className="host-info"> {/* Informations sur l'hôte */}
          <div className="host-details">
            <img
              src={logement.host.picture}
              alt={`${logement.host.name} profile`}
              className="host-picture"
            />
            <p className="host-name">{logement.host.name}</p>
          </div>
          <div className="rating"> {/* Affichage des étoiles */}
            {stars.map((star, index) => (
              <img src={star} alt="star" key={index} className="star-image" />
            ))}
          </div>
        </div>
        </div>
        </div>
            <div className="collapses_Housing">
                <Collapse
                    title="Description"
                    description={logement.description}
                />
                <Collapse
                    title="Équipements"
                    description={logement.equipments.join(', ')}
                />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
