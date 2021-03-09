import React, { useState, useEffect } from 'react';
import './Policy.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Policy = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let { policy } = useParams<{ policy: string }>();

  useEffect(() => {
    axios.get(`https://www.sonarworks.com/api/legal/${policy}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  });

  return !title || !content ? (
    <div className='spinner-wrapper'>
      <div className='lds-dual-ring'></div>
    </div>
  ) : (
    <div className='wrapper'>
      <Header />
      <section className='policy'>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </section>
      <Footer />
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default Policy;
