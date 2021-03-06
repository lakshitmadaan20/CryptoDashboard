import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
               CryptoDash
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes className="bg-primary" /> : <FaBars className="bg-primary"/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/crypto'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Crypto
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/news'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/exchanges'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Exchanges
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/calculator'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Calculator
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/resources'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Resources
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  href='https://medium.com/@blockchainunmasked'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;