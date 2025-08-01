import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import './Navbar.css';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ darkMode, toggleDarkMode }) {
  const [clicked, setClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // ✅ Ref for detecting outside click

  const handleClick = () => {
    setClicked(true);
    toggleDarkMode();
    setTimeout(() => setClicked(false), 300);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu(); // Close mobile menu after click
    }
  };

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent nav showing by default on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`} ref={navRef}>
      <Logo />

      <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('education')}>Education</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>

      <div className="nav-icons">
        <div
          className={`mode-toggle-icon ${clicked ? 'icon-beep' : ''}`}
          onClick={handleClick}
        >
          {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
