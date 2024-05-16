import React, { useState } from 'react';
import prevArrow from '../../assets/prevArrow.svg';
import nextArrow from '../../assets/nextArrow.svg';
import './Slideshow.scss';

const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev + images.length - 1) % images.length);
  };

  return (
    <div className="slideshow">
      {/* Affiche les flèches uniquement s'il y a plus d'une image */}
      {images.length > 1 && (
        <button onClick={prevSlide} className="arrow left-arrow">
          <img src={prevArrow} alt="Flèche précédente" />
        </button>
      )}
      
      {images.map((image, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && <img src={image} alt={`Slide ${index}`} className="images" />}
        </div>
      ))}

      {images.length > 1 && (
        <button onClick={nextSlide} className="arrow right-arrow">
          <img src={nextArrow} alt="Flèche suivante" />
        </button>
      )}
      
      <div className="slide-indicator">
        {`${current + 1} / ${images.length}`} {/* Affiche le numéro de la photo actuelle et le total */}
      </div>
    </div>
  );
};

export default Slideshow;
