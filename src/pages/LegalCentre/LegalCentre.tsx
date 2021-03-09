import React from 'react';
import './LegalCentre.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Legal = () => {
  return (
    <div className='wrapper'>
      <Header />
      <section className='legalCentre'>
        <h3>Using Reference Tracks</h3>
        <p>
        When you are first listening to calibrated headphones or speakers, it is highly recommended to begin by listening to some music you know well. Chances are, by listening to your own music, you have already compensated for your room inaccuracies in your mix, making it sound unusual if calibration is applied.
        </p>
        <p>
        So let your ears get used to the corrected sound of your system by listening to music that hasn't been produced by you.
        </p>
        <p>
        When you get accustomed to your new corrected sound, you can try bypassing the plugin to hear the inaccuracies your room was causing before. Use the blue Calibrate button in the plugin to retain the same loudness levels when A/B listening.
        </p>
      </section>
      <Footer />
    </div>
  );
};
export default Legal;
