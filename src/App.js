import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline'; // For consistent styling across browsers
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import BeautyInfoSection from './components/BeautyInfoSection/AboutUs';
import AboutUs from './components/BeautyInfoSection/AboutUs';
import BeautySection from './components/BeautyInfoSection/BeautySection';
import OurServices from './components/OurServices/OurServices';
import Footer from './components/Footer/Footer';


// Define your custom Material UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E4F2E', // Deep Forest Green (main brand color)
    },
    secondary: {
      main: '#C5B48F', // Muted Gold (accent color)
    },
    text: {
      primary: '#2E4F2E', // Default text color
      secondary: '#C5B48F', // Secondary text color, e.g., for accents
    },
    background: {
      default: '#FBFAF5', // Off-white for general background
    },
  },
  typography: {
    // Define preferred fonts for your site
    fontFamily: [
      'Montserrat',      // A clean sans-serif for general text and navigation
      'Playfair Display', // An elegant serif for headlines and logo
      'serif',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
    },
    // You can define other typography variants here (h4, h5, body1, etc.)
  },
  components: {
    // Customizations for Material UI components
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Slightly rounded buttons
        },
      },
    },
    // You can add more component overrides here
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Applies a consistent baseline to all HTML elements */}
      <div style={{ position: 'relative' }}>
        <Header /> 
        <Banner /> 
        <AboutUs />
        <BeautySection />
        <OurServices />
        <Footer />
        {/* You can add other sections/components of your website below the banner */}
      </div>
    </ThemeProvider>
  );
}

export default App;