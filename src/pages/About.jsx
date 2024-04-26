import { Fragment } from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Collapse from '../components/Collapse.jsx';
import paysage from "../assets/paysage.png";
import Banner from "../components/Banner.jsx";
import { aboutList } from '../database/CollapseInfo.js'; // Import des données
import './About.scss'

export default function About() {
  return (
    <Fragment>
      <Header />
      <div className="about"> {/* Ajoutez cette classe */}
      <Banner img={paysage} alt="image d'un paysage de montagne" />
      </div>
      <div className="collapses">
        {aboutList.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.content}
          />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
}


