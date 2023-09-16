import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavBarFixed, setIsNavBarFixed] = useState(false); // New state

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavBarFixed(true);
      } else {
        setIsNavBarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav className={`${styles.navBar} ${isNavBarFixed ? styles.fixed : ''}`}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>
          id2
        </Link>
      </div>
      <div className={`${styles.navRight} ${isMenuOpen ? styles.showMenu : ''}`}>
        {/* <Link to="/projects" className={styles.link} onClick={() => setIsMenuOpen(false)}>
          PROJECTS
        </Link> */}
        <Link to="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>
          ABOUT US
        </Link>
        <Link to="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>
          CONTACT
        </Link>
        <Link to="/news" className={styles.link} onClick={() => setIsMenuOpen(false)}>
          NEWS
        </Link>
      </div>
      <div className={styles.hamburgerMenu} onClick={handleToggleMenu}>
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
        <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          {/* <Link to="/projects" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            PROJECTS
          </Link> */}
          <Link to="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            ABOUT US
          </Link>
          <Link to="/contact" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            CONTACT
          </Link>
          <Link to="/news" className={styles.link} onClick={() => setIsMenuOpen(false)}>
            NEWS
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
