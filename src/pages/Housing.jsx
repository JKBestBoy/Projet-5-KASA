import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Slideshow from '../components/Slideshow.jsx';
import logements from '../database/logements.json';
import './Housing.scss';

export default function Housing() {
    const { id } = useParams();
    const logement = logements.find(l => l.id === id);

    return (
        <React.Fragment>
            <Header />
            <div className="housing-container">
                <Slideshow images={logement.pictures} />
                <h1 className='title'>{logement.title}</h1>
                <p>{logement.description}</p>
            </div>
            <Footer />
        </React.Fragment>
    );
}
