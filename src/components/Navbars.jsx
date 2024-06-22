// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/images/logo.png'

// const Navbars = () => {
//   return (
    
//     <nav className="bg-slate-950 shadow-lg">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {/* Mobile menu icon */}
//               {/* Use an icon here, e.g., from Heroicons */}
//               <svg
//                 className="block h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* Logo and navigation links */}
//           <div to='/' className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               {/* Replace with your logo image */}
//               <NavLink to='/'><img  className="h-8 w-auto" src={logo} alt="Your Company" /> </NavLink>
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 {/* Navigation links */}
//                 <NavLink
//                   to="/"
//                   className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="/about"
//                   className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   About Us
//                 </NavLink>
//                 <NavLink
//                   to="/products"
//                   className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Products
//                 </NavLink>
//                 <NavLink
//                   to="/blog"
//                   className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Blog
//                 </NavLink>
//                 <NavLink
//                   to="/contact"
//                   className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Contact
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//           {/* Right side of the navbar */}
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             {/* Profile dropdown */}
//             <div className="ml-3 relative">
//               <div>
//                 <button
//                   className="bg-green-600 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
//                   id="user-menu"
//                   aria-haspopup="true"
//                 >
//                   {/* Replace with profile image or icon */}
//                   <span className="sr-only">User menu</span>
//                   {/* Use an icon or image */}
//                   <svg
//                     className="h-8 w-8"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 12a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       d="M10 20a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       d="M10 4a2 2 0 100-4 2 2 0 000 4z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Mobile menu */}
//       <div className="sm:hidden" id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <a
//             href="/"
//             className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Home
//           </a>
//           <a
//             href="/about"
//             className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             About Us
//           </a>
//           <a
//             href="/products"
//             className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Products
//           </a>
//           <a
//             href="/blog"
//             className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Blog
//           </a>
//           <a
//             href="/contact"
//             className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
  
//   );
// };

// export default Navbars;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbars = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-950 shadow-lg fixed top-0 z-10  mb-40 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          {/* Logo and navigation links */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <NavLink to='/'><img className="h-8 w-auto" src={logo} alt="Your Company" /> </NavLink>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/products"
                  className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </NavLink>
                <NavLink
                  to="/blog"
                  className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
          {/* Right side of the navbar */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div>
                <button
                  className="bg-green-600 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">User menu</span>
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 20a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M10 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="text-white hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbars;
