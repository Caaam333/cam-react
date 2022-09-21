import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Projets from './Projets';
import About from './About';
import Header from '../components/Header';
import Cv from './Cv';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Cv />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
