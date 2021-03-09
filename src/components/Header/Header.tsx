import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/soundid-symbol.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navigation'>
      <div className='sonarworks'>
        <Link className='link' to='/'>
          Sonarworks
        </Link>
      </div>
      <div className='legalCentre'>
        <Link className='link' to='/legalCentre'>
          Legal centre
        </Link>
      </div>
      <div className='logo'>
        <Link className='link' to='/'>
          <img src={Logo} alt='sonarworksLogo' />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
