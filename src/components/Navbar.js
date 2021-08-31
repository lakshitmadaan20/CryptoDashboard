import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaTimes ,FaAlignRight} from 'react-icons/fa';
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
            <Link to='/' className='navbar-logo'onClick={closeMobileMenu}>
             CryptoDashboard
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaAlignRight className="bg-primary"/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
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
                  to='/events'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;