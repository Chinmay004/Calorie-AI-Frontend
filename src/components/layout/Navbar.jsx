import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect } from 'react';
import Logout from '../auth/Logout';
import { auth } from '../../lib/firebase';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Hide logo when scrolled down
      } else {
        setScrolling(false); // Show logo when at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav className={` w-full flex lg:justify-around items-center px-7  justify-between bg-[#234332] fixed top-0 left-0  py-5 z-50  ${scrolling ? "shadow-lg" : "shadow-none "}`}>
      {/* Logo + Name */}
      <div className="flex items-center gap-5 lg:gap-8 md:gap-5  ">
        {!scrolling && (<img src="/chef-icon.png" alt="Chef Icon" className={`  w-10  lg:w-12 drop-shadow-[0_2px_10px_#87eec1a0]`} />)}
        <a href="/" className="text-primary font-bold text-[#cafcd8]  text-2xl md:text-2xl lg:text-3xl xl:text-4xl">Calorie AI</a>
      </div>

      {/* Pages (Desktop only) */}
      <div className="hidden md:flex  text-white ">
        <ul className="flex md:gap-x-0  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => ` flex justify-center text-white items-center h-7 w-24 font-medium rounded-3xl xl:w-30 xl:h-9 lg:text-lg md:text-sm md:w-19 md:h-7 mr-2
        ${isActive ? "bg-[#013712] text-white" : "hover:bg-[#013712] hover:text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createRecipe2"
              className={({ isActive }) => ` flex justify-center text-white items-center h-7 w-24 font-medium rounded-3xl xl:w-30 xl:h-9 lg:text-lg md:text-sm md:w-19 md:h-7 mr-2
        ${isActive ? "bg-[#013712] text-white" : "hover:bg-[#013712] hover:text-white"}`
              }
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipes2"
              className={({ isActive }) => ` flex justify-center items-center h-7 w-24 font-medium rounded-3xl xl:w-30 xl:h-9 lg:text-lg md:text-sm md:w-19 md:h-7 mr-2
        ${isActive ? "bg-[#013712] text-white" : "hover:bg-[#013712] hover:text-white"}`
              }
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myProfile"
              className=" flex justify-center items-center h-7 w-24 font-medium hover:bg-[#013712] hover:text-white rounded-3xl xl:w-30 xl:h-9 lg:text-lg md:text-sm md:w-19 md:h-7 mr-2"
            >
              Account
            </NavLink>
          </li>
        </ul>
      </div>


      <div className="flex items-center gap-8 md:gap-2">
        {user ? (
          <>
            <div className="flex items-center gap-2">

              <div className='  hidden md:inline-flex text-primary font-semibold xl:text-lg lg:w-30 md:w-16 md:text-sm justify-center items-center hover:bg-[#996a0a] h-10 rounded-xl bg-[#ffc857] text-[#023211] lg:text-sm '> <Logout /></div>
            </div>
          </>
        ) : (
          <>
            <a
              href="/auth2"
              className="hidden md:inline-flex items-center justify-center bg-[#216e40] border hover:bg-[#013712] hover:text-white rounded-xl text-white lg:text-md lg:w-40 lg:h-10 font-semibold md:text-xs md:w-30 md:h-9 xl:text-lg xl:w-52"
            >
              Get Started Free
            </a>
            <a
              href="/login2"
              className="hidden md:inline-flex text-primary font-semibold xl:text-lg lg:w-30 md:w-16 md:text-sm justify-center items-center hover:bg-[#996a0a] h-10 rounded-xl bg-[#ffc857] text-[#023211] lg:text-sm"
            >
              Log in
            </a>
          </>
        )}



        {/* Mobile Menu Button */}
        <div className='block md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={40} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>




      {/* Mobile Menu */}
      {/* <div className={`fixed top-0 right-0 h-full w-full  bg-opacity-75 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex justify-end  `}>


        <div className="w-3/4 sm:w-1/2 h-full bg-[#000000da] shadow-lg flex flex-col  justify-around items-center rounded-l-4xl  ">
          <div className="self-center flex     justify-around p-10  items-center h-0/12 w-full ">

            <span className=' grow flex items-center justify-center text-3xl font-bold text-[#ebfadb] '>Calorie AI</span>
            <button className="w-20 flex     justify-center items-center" onClick={() => setIsMenuOpen(false)}>
              <IoClose size={40} color="white" />
            </button>
          </div>

          <div className="flex flex-col  w-full gap-2.5 ">
            <NavLink to="/" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Home</NavLink>
            <NavLink to="/createRecipe2" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Discover</NavLink>
            <NavLink to="/recipes2" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Create</NavLink>
            <NavLink to="/myProfile" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">My Profile</NavLink>
          </div>

          <div className="flex flex-col justify-center min-h-3/12 items-center  gap-10 w-full">
            {user ? (
              <div className='flex text-primary font-medium text-lg  w-full   justify-center items-center hover:bg-[#996a0a] h-12 rounded-xl bg-[#ffc757ba]  text-[#023211]'> <Logout /></div>
            ) : (
              <>
                <a href="/auth2" className="text-primary font-medium text-lg text-[#023211] w-full flex justify-center items-center bg-[#ebfadb] hover:bg-[#50865b] h-12 rounded-xl mt-4 ">
                  Get Started Free
                </a>
                <a href="/login2" className="text-primary font-medium text-lg  w-full  flex justify-center items-center hover:bg-[#996a0a] h-12 rounded-xl bg-[#ffc857]  text-[#023211]">
                  Log in
                </a>
              </>
            )}

          </div>
        </div>
      </div> */}

      {/* Mobile Menu Overlay + Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-40 flex">

          {/* Left 1/4 overlay that darkens background and closes on click */}
          <div
            className="w-1/4 h-full bg-[#00000069] bg-opacity-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Right 3/4 sliding menu */}
          <div
            className={`w-3/4 sm:w-1/2 h-full bg-[#000000da] shadow-lg flex flex-col justify-around items-center rounded-l-xl transform transition-transform duration-300 z-50`}
          >
            {/* Close Button */}
            <div className="self-center flex justify-around p-10 items-center w-full">
              <span className='grow flex items-center justify-center text-3xl font-bold text-[#ebfadb]'>Calorie AI</span>
              <button className="w-20 flex justify-center items-center" onClick={() => setIsMenuOpen(false)}>
                <IoClose size={40} color="white" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col w-full gap-2.5">
              <NavLink to="/" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Home</NavLink>
              <NavLink to="/createRecipe2" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Create</NavLink>
              <NavLink to="/recipes2" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Discover</NavLink>
              <NavLink to="/myProfile" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">My Profile</NavLink>
            </div>

            {/* Auth Buttons */}
            <div className="flex flex-col justify-center min-h-3/12 items-center gap-10 w-full">
              {user ? (
                <div className='flex text-primary font-medium text-lg w-full justify-center items-center hover:bg-[#996a0a] h-12 rounded-xl bg-[#ffc757ba] text-[#023211]'>
                  <Logout />
                </div>
              ) : (
                <>
                  <a href="/auth2" className="text-primary font-medium text-lg text-[#023211] w-full flex justify-center items-center bg-[#ebfadb] hover:bg-[#50865b] h-12 rounded-xl mt-4">
                    Get Started Free
                  </a>
                  <a href="/login2" className="text-primary font-medium text-lg w-full flex justify-center items-center hover:bg-[#996a0a] h-12 rounded-xl bg-[#ffc857] text-[#023211]">
                    Log in
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}



    </nav>
  );
};

export default Navbar;


// import { useState, useEffect } from "react";
// import { FaBars } from "react-icons/fa6";
// import { IoClose } from "react-icons/io5";
// import Logout from "../auth/Logout";
// import { auth } from "../../lib/firebase";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Utility function for NavLink active classes with smooth styling
//   const navLinkClasses = ({ isActive }) =>
//     `flex justify-center items-center h-9 px-5 font-semibold rounded-3xl tracking-wide transition-colors duration-300 select-none
//     ${isActive
//       ? "bg-[#1a3d21] text-[#a2f7c2] shadow-lg"
//       : "text-[#216e40] hover:bg-[#178040] hover:text-[#e9ffea]"
//     }`;

//   return (
//     <nav
//       className={`
//         fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 sm:py-5
//         backdrop-blur-lg bg-[#183928cc] border-b border-[#7bf0b138]
//         shadow-md transition-shadow duration-400
//         ${scrolling ? "shadow-xl" : "shadow-md"}
//       `}
//       role="navigation"
//       aria-label="Main Navigation"
//     >
//       {/* Logo and brand */}
//       <div className="flex items-center gap-4">
//         {!scrolling && (
//           <img
//             src="/chef-icon.png"
//             alt="Chef Icon"
//             className="w-10 md:w-12 transition-transform duration-300 hover:scale-110"
//             aria-hidden="true"
//           />
//         )}
//         <NavLink
//           to="/"
//           className="text-[#a2f7c2] font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-potta tracking-wide select-none"
//           aria-label="Go to home page"
//           tabIndex={0}
//         >
//           Calorie AI
//         </NavLink>
//       </div>

//       {/* Desktop nav */}
//       <div className="hidden md:flex items-center gap-3 lg:gap-6">
//         <NavLink to="/" className={navLinkClasses}>
//           Home
//         </NavLink>
//         <NavLink to="/createRecipe2" className={navLinkClasses}>
//           Create
//         </NavLink>
//         <NavLink to="/recipes2" className={navLinkClasses}>
//           Discover
//         </NavLink>
//         <NavLink to="/myProfile" className={navLinkClasses}>
//           Account
//         </NavLink>
//       </div>

//       {/* Authentication Buttons & Mobile Menu Button */}
//       <div className="flex items-center gap-4 md:gap-3">
//         {user ? (
//           <div className="hidden md:inline-flex">
//             <Logout className="bg-[#a2f7c2] text-[#183928] rounded-xl px-5 py-2 font-semibold shadow-md hover:bg-[#79e6c0] hover:shadow-lg transition-transform active:scale-95" />
//           </div>
//         ) : (
//           <>
//             <NavLink
//               to="/auth2"
//               className="hidden md:inline-flex items-center justify-center bg-[#a2f7c2] text-[#183928] rounded-xl px-6 py-2 font-semibold hover:bg-[#79e6c0] hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-[#7ee7b7]"
//             >
//               Get Started Free
//             </NavLink>
//             <NavLink
//               to="/login2"
//               className="hidden md:inline-flex items-center justify-center bg-[#ffc857] text-[#183928] rounded-xl px-5 py-2 font-semibold hover:bg-[#d8b43f] hover:shadow-lg transition focus:outline-none focus:ring-4 focus:ring-yellow-300"
//             >
//               Log in
//             </NavLink>
//           </>
//         )}

//         {/* Mobile menu toggle */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle mobile menu"
//           className="ml-1 p-1 md:hidden rounded-md text-[#a2f7c2] hover:text-[#79e6c0] focus:outline-none focus:ring-2 focus:ring-[#7ee7b7]"
//         >
//           {isMenuOpen ? (
//             <IoClose size={32} />
//           ) : (
//             <FaBars size={28} />
//           )}
//         </button>
//       </div>

//       {/* Mobile menu overlay */}
//       {isMenuOpen && (
//         <div
//           className="fixed inset-0 z-40 flex text-white"
//           role="dialog"
//           aria-modal="true"
//         >
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50"
//             onClick={() => setIsMenuOpen(false)}
//             aria-hidden="true"
//           />

//           {/* Sliding menu */}
//           <section
//             className="relative ml-auto w-3/4 sm:w-1/2 h-full bg-[#183928dd] border-l border-[#7de3b962] shadow-lg backdrop-blur-lg flex flex-col justify-start items-center py-10 px-6 space-y-6 rounded-l-xl overflow-y-auto"
//           >
//             <div className="flex justify-between items-center w-full mb-10">
//               <span className="text-3xl font-bold font-potta text-[#a2f7c2] select-none">Calorie AI</span>
//               <button
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="Close mobile menu"
//                 className="text-[#a2f7c2] hover:text-[#79e6c0] focus:outline-none focus:ring-2 focus:ring-[#7ee7b7] rounded"
//               >
//                 <IoClose size={36} />
//               </button>
//             </div>
//             <nav className="flex flex-col w-full space-y-3">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `block rounded-lg py-3 text-center font-semibold transition-colors duration-300
//                   ${isActive
//                     ? "bg-[#79e6c0] text-[#1b361f]"
//                     : "hover:bg-[#7fe6bd] hover:text-[#15341a]"
//                   }`
//                 }
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/createRecipe2"
//                 className={({ isActive }) =>
//                   `block rounded-lg py-3 text-center font-semibold transition-colors duration-300
//                   ${isActive
//                     ? "bg-[#79e6c0] text-[#1b361f]"
//                     : "hover:bg-[#7fe6bd] hover:text-[#15341a]"
//                   }`
//                 }
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Create
//               </NavLink>
//               <NavLink
//                 to="/recipes2"
//                 className={({ isActive }) =>
//                   `block rounded-lg py-3 text-center font-semibold transition-colors duration-300
//                   ${isActive
//                     ? "bg-[#79e6c0] text-[#1b361f]"
//                     : "hover:bg-[#7fe6bd] hover:text-[#15341a]"
//                   }`
//                 }
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Discover
//               </NavLink>
//               <NavLink
//                 to="/myProfile"
//                 className={({ isActive }) =>
//                   `block rounded-lg py-3 text-center font-semibold transition-colors duration-300
//                   ${isActive
//                     ? "bg-[#79e6c0] text-[#1b361f]"
//                     : "hover:bg-[#7fe6bd] hover:text-[#15341a]"
//                   }`
//                 }
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Account
//               </NavLink>
//             </nav>

//             {/* Auth buttons */}
//             <div className="mt-auto w-full space-y-4 flex flex-col">
//               {user ? (
//                 <Logout className="w-full bg-[#a2f7c2] text-[#183928] rounded-xl px-5 py-3 font-semibold shadow-md hover:bg-[#79e6c0] transition-transform active:scale-95 text-center" />
//               ) : (
//                 <>
//                   <NavLink
//                     to="/auth2"
//                     className="block w-full bg-[#ebfadb] text-[#183928] rounded-xl py-3 font-semibold shadow-md hover:bg-[#c9f2cb] transition"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Get Started Free
//                   </NavLink>
//                   <NavLink
//                     to="/login2"
//                     className="block w-full bg-[#79e6c0] text-[#15341a] rounded-xl py-3 font-semibold shadow-md hover:bg-[#5ac38a] transition"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Log in
//                   </NavLink>
//                 </>
//               )}
//             </div>
//           </section>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
