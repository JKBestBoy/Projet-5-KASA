import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../pages/Home';
import './Erreur.scss'

export default function Erreur() {
    return (
      <Fragment>
        <Header />
        <main className='main'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/"  className='link'>
            <p>Retourner à la page d'accueil</p>
        </Link>
        </main>
        <Footer />
      </Fragment>
    );
  }
  