import React, { useState } from 'react';
import "./Collapse.scss";
import { aboutList } from "../database/CollapseInfo";
import arrow from '../assets/arrow.svg';

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <div className="collapse-container">
      <button onClick={toggle} className={`collapse-button ${isOpen ? "rounded-top" : "rounded"}`}>
          {title}
          <img src={arrow} alt="Toggle" className={`arrow ${isOpen ? "up" : "down"}`} />
        </button>
        {isOpen && <div className="collapse-content rounded-bottom">
          {content}
        </div>}
      </div>
    );
};

const CollapseContainer = () => {
    return (
        <div className='Collapse'>
            {aboutList.map((item, index) => (
                <Collapse key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default CollapseContainer;