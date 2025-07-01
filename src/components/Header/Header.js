// // // import React, { useState } from 'react';
// // // import './Header.css';

// // // const Header = () => {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   const toggleMobileMenu = () => {
// // //     setMenuOpen(!menuOpen);
// // //   };

// // //   return (
// // //     <header className="header">
// // //       <div className="header-container">
// // //         <a href="/" className="header-logo">
// // //           Glovera<span>Beauty Salon</span>
// // //         </a>

// // //         <button className="mobile-toggle" onClick={toggleMobileMenu}>
// // //           ☰
// // //         </button>

// // //         <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
// // //           <a href="/">Home</a>
// // //           <a href="/services">Services</a>
// // //           <a href="/gallery">Gallery</a>
// // //           <a href="/contact">Contact Us</a>

// // //           <button className="headerglass-button">
// // //             <span className="headerbtn-text">Book Appointment</span>
// // //             <span className="headerbtn-icon">↗</span>
// // //           </button>
// // //         </nav>
// // //       </div>
// // //     </header>
// // //   );
// // // };

// // // export default Header;


// // import React, { useState, useEffect } from 'react';
// // import './Header.css';

// // const Header = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setMenuOpen((prev) => !prev);
// //   };

// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //   };

// //   // Optional: Close menu on route change or ESC key
// //   useEffect(() => {
// //     const handleEsc = (e) => {
// //       if (e.key === 'Escape') setMenuOpen(false);
// //     };
// //     document.addEventListener('keydown', handleEsc);
// //     return () => document.removeEventListener('keydown', handleEsc);
// //   }, []);

// //   return (
// //     <header className="header">
// //       <div className="header-container">
// //         <a href="/" className="header-logo" onClick={closeMenu}>
// //           Glovera<span>Beauty Salon</span>
// //         </a>

// //         <button className="mobile-toggle" onClick={toggleMobileMenu}>
// //           {menuOpen ? '✕' : '☰'}
// //         </button>

// //         <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
// //           <a href="/" onClick={closeMenu} style={{ animationDelay: '0.1s' }}>Home</a>
// //           <a href="/services" onClick={closeMenu} style={{ animationDelay: '0.2s' }}>Services</a>
// //           <a href="/gallery" onClick={closeMenu} style={{ animationDelay: '0.3s' }}>Gallery</a>
// //           <a href="/contact" onClick={closeMenu} style={{ animationDelay: '0.4s' }}>Contact Us</a>

// //           <button className="headerglass-button" style={{ animationDelay: '0.5s' }} onClick={closeMenu}>
// //             <span className="headerbtn-text">Book Appointment</span>
// //             <span className="headerbtn-icon">↗</span>
// //           </button>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


// import React, { useState } from 'react';
// import './Header.css';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="header">
//       <div className="header-container">

//         {/* Logo shown always */}
//         <a href="/" className="header-logo">
//           Glovera<span>Beauty Salon</span>
//         </a>

//         {/* Toggle icon visible on mobile */}
//         <button className="mobile-toggle" onClick={toggleMobileMenu}>
//           ☰
//         </button>

//         {/* Mobile menu */}
//         <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
//           {/* Top section inside mobile nav */}
//           <div className="mobile-nav-top">
//             {/* Logo inside dropdown too */}
//             <a href="/" className="header-logo" onClick={closeMenu}>
//               Glovera<span>Beauty Salon</span>
//             </a>

//             {/* Close icon */}
//             <button className="close-icon" onClick={closeMenu}>✕</button>
//           </div>

//           {/* Menu Links */}
//           <a href="/" onClick={closeMenu} style={{ animationDelay: '0.1s' }}>Home</a>
//           <a href="/services" onClick={closeMenu} style={{ animationDelay: '0.2s' }}>Services</a>
//           <a href="/gallery" onClick={closeMenu} style={{ animationDelay: '0.3s' }}>Gallery</a>
//           <a href="/contact" onClick={closeMenu} style={{ animationDelay: '0.4s' }}>Contact Us</a>

//           <button className="headerglass-button" onClick={closeMenu} style={{ animationDelay: '0.5s' }}>
//             <span className="headerbtn-text">Book Appointment</span>
//             <span className="headerbtn-icon">↗</span>
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    // When opening, prevent scrolling on the body
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    document.body.style.overflow = 'unset'; // Re-enable scrolling when closing
    setMenuOpen(false);
  };

  return (
   <header className="header">
  <div className="header-container">
    <a href="/" className="header-logo">
      Glovera<span>Beauty Salon</span>
    </a>

    {/* Only show ☰ when menu is not open */}
    {!menuOpen && (
      <button className="mobile-toggle" onClick={toggleMobileMenu}>
        ☰
      </button>
    )}

    {/* Mobile Menu */}
    <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
      <div className="mobile-nav-top">
        <a href="/" className="header-logo mobile-menu-logo" onClick={closeMenu}>
  Glovera<span>Beauty Salon</span>
</a>


        {/* Close icon always visible inside menu */}
        <button className="close-icon" onClick={closeMenu}>✕</button>
      </div>

      <a href="/" onClick={closeMenu}>Home</a>
      <a href="/services" onClick={closeMenu}>Services</a>
      <a href="/gallery" onClick={closeMenu}>Gallery</a>
      <a href="/contact" onClick={closeMenu}>Contact Us</a>

      <button className="headerglass-button" onClick={closeMenu}>
        <span className="headerbtn-text">Book Appointment</span>
        <span className="headerbtn-icon">↗</span>
      </button>
    </nav>
  </div>
</header>

  );
};

export default Header;