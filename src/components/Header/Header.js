import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Hook to get current URL path
const navigate = useNavigate(); 

  // Determine if the current page should have a pink background initially
  const isPinkBackground =
    location.pathname === '/service' || location.pathname === '/contactform' || location.pathname === '/gallery'|| location.pathname === '/booknow';

  // Determine if the current page is a "banner page" for scroll effect (home page, usually '/')
  const isBannerPage = location.pathname === '/' || location.pathname === '/home'; // Adjust as per your home/banner page path

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect if it's a banner page
      if (isBannerPage) {
        setIsScrolled(window.scrollY > 30); // Scroll > 30px
      } else {
        // If not a banner page, ensure scrolled state is off (so the glass-black-bg applies by default if needed)
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBannerPage]); // Re-run effect if isBannerPage changes

  const toggleMobileMenu = () => {
    document.body.style.overflow = menuOpen ? 'unset' : 'hidden';
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    document.body.style.overflow = 'unset';
    setMenuOpen(false);
  };

  // Function to determine if a link is active
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header
      // Apply glass-black-bg if it's a pink background page OR if it's a banner page and scrolled
      className={`header ${isPinkBackground || (isBannerPage && isScrolled) ? 'glass-black-bg' : ''}`}
    >
      <div className="header-container">
        <a href="/" className="header-logo">
          Glovera<span>Beauty Salon</span>
        </a>

        {!menuOpen && (
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
        )}

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-top">
            <a href="/" className="header-logo mobile-menu-logo" onClick={closeMenu}>
              Glovera<span>Beauty Salon</span>
            </a>
            <button className="close-icon" onClick={closeMenu}>✕</button>
          </div>

          {/* Apply active class conditionally */}
          <a href="/" className={getNavLinkClass('/')} onClick={closeMenu}>Home</a>
          <a href="/service" className={getNavLinkClass('/service')} onClick={closeMenu}>Services</a>
          <a href="/gallery" className={getNavLinkClass('/gallery')} onClick={closeMenu}>Gallery</a>
          <a href="/contactform" className={getNavLinkClass('/contactform')} onClick={closeMenu}>Contact Us</a>

         <button
  className="headerglass-button"
  onClick={() => {
    closeMenu();
    navigate('/service');
  }}
>
  <span className="headerbtn-text">Book Appointment</span>
  <span className="headerbtn-icon">↗</span>
</button>

        </nav>
      </div>
    </header>
  );
};

export default Header;