
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import SubcategoryTable from './components/AdminDashboard/Tables/SubcategoryTable';
import ServiceTable from './components/AdminDashboard/Tables/ServiceTable';
import OurServiceList from './components/AdminDashboard/Tables/OurServiceList';
import WhatsappFloatingButton from './components/Banner/WhatsappFloatingButton';
import DashboardGallery from './components/AdminDashboard/pages/gallery';
import AppointmentList from './components/AdminDashboard/pages/appoinmentlist';
import AdminProfile from './components/AdminDashboard/pages/adminprofile';
import BannerTable from './components/AdminDashboard/Tables/BannerTable';
import AboutUsTable from './components/AdminDashboard/Tables/AboutUsTable';

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

const Layout = () => {
  const location = useLocation();

  // Pages to hide header, footer, and WhatsApp button
  const hideHeaderFooter =
    location.pathname === '/adminlogin' ||
    location.pathname.startsWith('/dashboardlayout');

  return (
    <>
      {/* ✅ Only show on public pages */}
      {!hideHeaderFooter && <WhatsappFloatingButton />}

      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booknow" element={<BookNow />} />

        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboardlayout" element={<DashboardLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="category" element={<CategoryTable />} />
          <Route path="subcategory" element={<SubcategoryTable />} />
          <Route path="service" element={<ServiceTable />} />
          <Route path="ourservicelist" element={<OurServiceList />} />
  <Route path="gallery" element={<DashboardGallery />} />
  <Route path="appoinmentlist" element={<AppointmentList />} />
  <Route path="adminprofile" element={<AdminProfile />} />
    <Route path="banner" element={<BannerTable />} />
    <Route path="aboutus" element={<AboutUsTable />} />

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
      {/*
        Place ToastContainer here, outside the Router,
        so it's always present and can receive toasts
        from any part of your application.
      */}
      <ToastContainer // Uncommented this line!
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;