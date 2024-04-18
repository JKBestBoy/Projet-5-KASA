import { Fragment } from "react";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Banner from '../components/Banner.jsx';
import Cards from '../components/Cards.jsx';
import falaise from '../assets/falaise.png';


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
