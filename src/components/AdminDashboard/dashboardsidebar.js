// // import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import './dashboardsidebar.css';
// // import { FaHome, FaUsers, FaSignOutAlt, FaChartBar } from 'react-icons/fa';
// // import { GrServices, GrGallery } from 'react-icons/gr';
// // import { IoIosListBox } from 'react-icons/io';

// // const menuItems = [
// //   { icon: <FaHome />, label: 'Home', path: '/dashboardlayout/home' },
// //   { icon: <GrServices />, label: 'Services', path: '/dashboardlayout/services' },
// //   { icon: <GrGallery />, label: 'Gallery', path: '/dashboardlayout/gallery' },
// //   { icon: <FaUsers />, label: 'Users', path: '/dashboardlayout/users' },
// //   { icon: <IoIosListBox />, label: 'AppoinmentList', path: '/dashboardlayout/appoinmentlist' },
// //   { icon: <FaChartBar />, label: 'Profile', path: '/dashboardlayout/adminprofile' },
// //   { icon: <FaSignOutAlt />, label: 'Logout', path: '/dashboardlayout/logout' },
// // ];

// // function DashboardSidebar() {
// //   const location = useLocation();

// //   return (
// //     <aside className="dashboard-sidebar">
// //       {menuItems.map((item, index) => (
// //         <Link
// //           key={index}
// //           to={item.path}
// //           className={`sidebar-icon-wrapper ${
// //             location.pathname === item.path ? 'active' : ''
// //           }`}
// //         >
// //           <div className="sidebar-icon">{item.icon}</div>
// //           <span className="tooltip-text">{item.label}</span>
// //         </Link>
// //       ))}
// //     </aside>
// //   );
// // }

// // export default DashboardSidebar;



// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './dashboardsidebar.css';
// import { FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa';
// import { GrServices, GrGallery } from 'react-icons/gr';
// import { IoIosListBox } from 'react-icons/io';
// import axios from 'axios';

// function DashboardSidebar() {
//   const location = useLocation();
//   const [profileImage, setProfileImage] = useState(null);

//   // Fetch admin profile image
//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/admin-profiles');
//         if (res.data.length > 0) {
//           setProfileImage(res.data[0].profileImage); // assuming profileImage is the image filename
//         }
//       } catch (err) {
//         console.error('Error fetching admin image:', err);
//       }
//     };

//     fetchImage();
//   }, []);

//   // Sidebar menu configuration
//   const menuItems = [
//     { icon: <FaHome />, label: 'Home', path: '/dashboardlayout/home' },
//     { icon: <GrServices />, label: 'Services', path: '/dashboardlayout/service' },
//     { icon: <GrGallery />, label: 'Gallery', path: '/dashboardlayout/gallery' },
//     { icon: <FaUsers />, label: 'Users', path: '/dashboardlayout/users' },
//     { icon: <IoIosListBox />, label: 'AppoinmentList', path: '/dashboardlayout/appoinmentlist' },
//     {
//       icon: profileImage ? (
//         <img
//           src={`http://localhost:5000/uploads/${profileImage}`}
//           alt="Profile"
//           className="sidebar-profile-img"
//         />
//       ) : (
//         <div className="sidebar-icon-placeholder" />
//       ),
//       label: 'Profile',
//       path: '/dashboardlayout/adminprofile',
//     },
//     { icon: <FaSignOutAlt />, label: 'Logout', path: '/' },
//   ];

//   return (
//     <aside className="dashboard-sidebar">
//       {menuItems.map((item, index) => (
//         <Link
//           key={index}
//           to={item.path}
//           className={`sidebar-icon-wrapper ${
//             location.pathname === item.path ? 'active' : ''
//           }`}
//         >
//           <div className="sidebar-icon">{item.icon}</div>
//           <span className="tooltip-text">{item.label}</span>
//         </Link>
//       ))}
//     </aside>
//   );
// }

// export default DashboardSidebar;


import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './dashboardsidebar.css';
import { FaHome, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { GrServices, GrGallery } from 'react-icons/gr';
import { IoIosListBox } from 'react-icons/io';
import axios from 'axios';

function DashboardSidebar() {
  const location = useLocation();
  const [profileImage, setProfileImage] = useState(null);

  // Fetch admin profile image
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin-profiles');
        if (res.data.length > 0) {
          setProfileImage(res.data[0].profileImage);
        }
      } catch (err) {
        console.error('Error fetching admin image:', err);
      }
    };

    fetchImage();
  }, []);

  const menuItems = [
    { icon: <FaHome />, label: 'Home', path: '/dashboardlayout/home' },
    {
      icon: <GrServices />,
      label: 'Services',
      isDropdown: true,
      submenu: [
        { label: 'Category', path: '/dashboardlayout/category' },
        { label: 'Subcategory', path: '/dashboardlayout/subcategory' },
        { label: 'Service List', path: '/dashboardlayout/service' },
      ],
    },
    { icon: <GrGallery />, label: 'Gallery', path: '/dashboardlayout/gallery' },
     {
      icon:  <FaUsers />,
      label: 'Our Services',
      isDropdown: true,
      submenu: [
        { label: 'Banner', path: '/dashboardlayout/banner' },
        { label: 'About Us', path: '/dashboardlayout/aboutus' },
        { label: 'Our Service', path: '/dashboardlayout/ourservicelist' },
      ],
    },
    // { icon: <FaUsers />, label: 'Our Services', path: '/dashboardlayout/ourservicelist' },
    { icon: <IoIosListBox />, label: 'AppoinmentList', path: '/dashboardlayout/appoinmentlist' },
    {
      icon: profileImage ? (
        <img
          src={`http://localhost:5000/uploads/${profileImage}`}
          alt="Profile"
          className="sidebar-profile-img"
        />
      ) : (
        <div className="sidebar-icon-placeholder" />
      ),
      label: 'Profile',
      path: '/dashboardlayout/adminprofile',
    },
    { icon: <FaSignOutAlt />, label: 'Logout', path: '/' },
  ];

  return (
    <aside className="dashboard-sidebar">
      {menuItems.map((item, index) => (
        <div key={index} className="sidebar-icon-group">
          <div className="sidebar-icon-wrapper">
            {item.path ? (
              <Link
                to={item.path}
                className={`sidebar-icon ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.icon}
              </Link>
            ) : (
              <div className="sidebar-icon">{item.icon}</div>
            )}
          </div>

          {item.isDropdown ? (
            <div className="tooltip-text hoverable-tooltip">
              <div className="submenu">
                {item.submenu.map((sub, idx) => (
                  <Link key={idx} to={sub.path} className="submenu-item">
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="tooltip-text">{item.label}</div>
          )}
        </div>
      ))}
    </aside>
  );
}

export default DashboardSidebar;
