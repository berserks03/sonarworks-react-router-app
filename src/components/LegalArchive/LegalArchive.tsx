import React from 'react';
import './LegalArchive.scss';
import LegalDocuments from '../../assets/LegalDocuments';
import { Link } from 'react-router-dom';

const LegalArchive = () => {
  return (
    <section className='legalArchive'>
      {LegalDocuments.map((item) => (
        <div className='policies'>
          <Link className='link' to={`/${item.suffix}`}>
            <h3>
              {item.description}
            </h3>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default LegalArchive;
