import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/icons8-logo-48.png';
import './Navbar.css';
import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Select all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section when in view
          }
        });
      },
      { threshold: 0.6 }, // 60% of section must be visible to be active
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <HashLink smooth to="/#home">
          <img src={logo} alt="Website Logo" className="logo-image" />
        </HashLink>
      </div>
      <ul className="navbar-links">
        <li>
          <HashLink
            smooth
            to="/#home"
            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#about-me"
            className={`navbar-link ${activeSection === 'about-me' ? 'active' : ''}`}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
