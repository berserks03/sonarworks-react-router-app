import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import LegalArchive from '../../components/LegalArchive/LegalArchive';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <LegalArchive />
      <Footer />
    </div>
  );
};

export default Home;
