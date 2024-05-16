import { Fragment } from "react";
import Header from '../components/Header/Header.jsx';
import falaise from '../assets/falaise.png';
import Banner from '../components/Banner/Banner.jsx';
import Cards from '../components/Cards/Cards.jsx';
import Footer from '../components/Footer/Footer.jsx';



export default function Home() {
  return (
    <Fragment>
      <Header />
      <Banner
        img={falaise}
        alt="Falaise"
        text="Chez vous, partout et ailleurs"
      />
      <Cards />
      <Footer />
    </Fragment>
  );
}
