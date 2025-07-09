// import React  from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline'; // For consistent styling across browsers
// import Header from './components/Header/Header';
// import Banner from './components/Banner/Banner';
// import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Service from './components/Services/Service';
// import ContactForm from './components/Contactform/Contactform';
// import Gallery from './components/Gallery/Gallery';
// import BookNow from './components/BookNow/BookNow';

// // Define your custom Material UI theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2E4F2E', // Deep Forest Green (main brand color)
//     },
//     secondary: {
//       main: '#C5B48F', // Muted Gold (accent color)
//     },
//     text: {
//       primary: '#2E4F2E', // Default text color
//       secondary: '#C5B48F', // Secondary text color, e.g., for accents
//     },
//     background: {
//       default: '#FBFAF5', // Off-white for general background
//     },
//   },
//   typography: {
//     // Define preferred fonts for your site
//     fontFamily: [
//       'Montserrat',      // A clean sans-serif for general text and navigation
//       'Playfair Display', // An elegant serif for headlines and logo
//       'serif',
//       'sans-serif',
//     ].join(','),
//     h1: {
//       fontFamily: 'Playfair Display, serif',
//     },
//     h2: {
//       fontFamily: 'Playfair Display, serif',
//     },
//     h3: {
//       fontFamily: 'Playfair Display, serif',
//     },
//     // You can define other typography variants here (h4, h5, body1, etc.)
//   },
//   components: {
//     // Customizations for Material UI components
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8, // Slightly rounded buttons
//         },
//       },
//     },
//     // You can add more component overrides here
//   },
// });

// function App() {
//   return (
// <ThemeProvider theme={theme}>
//   <CssBaseline />
//   <Router> {/* ✅ Move Header inside Router */}
//     <Header />
//     <Routes>
//       <Route path="/" element={<Banner />} />
//       <Route path="/service" element={<Service />} />
//       <Route path="/contactform" element={<ContactForm />} />
//       <Route path="/gallery" element={<Gallery />} />
//       <Route path="/booknow" element={<BookNow />} />

//     </Routes>
//     <Footer />
//   </Router>
// </ThemeProvider>

//   );
// }

// export default App;

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Service from './components/Services/Service';
import ContactForm from './components/Contactform/Contactform';
import Gallery from './components/Gallery/Gallery';
import AdminLogin from './components/AdminLogin/adminlogin';
import Home from './components/AdminDashboard/pages/home';
import DashboardLayout from './components/AdminDashboard/dashboardlayout';
import BookNow from './components/BookNow/BookNow';
import CategoryTable from './components/AdminDashboard/Tables/CategoryTable';

// Theme definition
const theme = createTheme({
  palette: {
    primary: {
      main: '#2E4F2E',
    },
    secondary: {
      main: '#C5B48F',
    },
    text: {
      primary: '#2E4F2E',
      secondary: '#C5B48F',
    },
    background: {
      default: '#FBFAF5',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Playfair Display',
      'serif',
      'sans-serif',
    ].join(','),
    h1: { fontFamily: 'Playfair Display, serif' },
    h2: { fontFamily: 'Playfair Display, serif' },
    h3: { fontFamily: 'Playfair Display, serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
  },
});

// Layout component for conditional rendering
const Layout = () => {
  const location = useLocation();
const hideHeaderFooter =
  location.pathname === '/adminlogin' ||
  location.pathname.startsWith('/dashboardlayout');

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booknow" element={<BookNow />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
<Route path="/dashboardlayout" element={<DashboardLayout/>}>
  <Route path="/dashboardlayout/home" element={<Home />} />
  <Route path="/dashboardlayout/category" element={<CategoryTable />} />

</Route>

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;