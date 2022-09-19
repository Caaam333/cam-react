import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Projets from './Projets';
import About from './About';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Projets />
      <Footer />
    </div>
  );
};

export default Home;
