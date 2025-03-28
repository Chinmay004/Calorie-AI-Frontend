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
    <nav className={` w-full flex lg:justify-around items-center px-7  justify-between bg-[#ebfadb] fixed top-0 left-0  py-5 z-50  ${scrolling ? "shadow-lg" : "shadow-none " }` }>
      {/* Logo + Name */}
      <div className="flex items-center gap-5 lg:gap-8 md:gap-5  ">
      {!scrolling && (<img src="/chef-icon.png" alt="Chef Icon" className={`  w-10  lg:w-12 ` } /> )}
        <a href="/" className="text-primary font-bold text-[#216e40]  text-2xl md:text-2xl lg:text-3xl xl:text-4xl">Calorie AI</a>
      </div>

      {/* Pages (Desktop only) */}
      <div className="hidden md:flex   ">
        <ul className="flex md:gap-x-0  ">
        <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => ` flex justify-center items-center h-7 w-24 font-medium rounded-3xl xl:w-30 xl:h-9 lg:text-lg md:text-sm md:w-19 md:h-7 mr-2
        ${isActive ? "bg-[#013712] text-white" : "hover:bg-[#013712] hover:text-white"}`
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/createRecipe2" 
      className={({ isActive }) => ` flex justify-center items-center h-7 w-24 font-medium rounded-3xl xl:w-30 xl:h-9 lg:text-lg md:text-sm md:w-19 md:h-7 mr-2
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
<div className={`fixed top-0 right-0 h-full w-full  bg-opacity-75 transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} lg:hidden flex justify-end  `}>
  

        <div className="w-3/4 sm:w-1/2 h-full bg-[#196832] shadow-lg flex flex-col  justify-around items-center   ">
            {/* Close Button */}
            <div className="self-center flex     justify-around p-10  items-center h-0/12 w-full ">
            
            <span className=' grow flex items-center justify-center text-3xl font-bold text-[#ebfadb] '>Calorie AI</span>
            <button className="w-20 flex     justify-center items-center" onClick={() => setIsMenuOpen(false)}>
                <IoClose size={40} color="white" />
            </button>
            </div>
            {/* Menu Links */}
            <div className="flex flex-col  w-full gap-2.5 ">
            <NavLink to="/" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Home</NavLink>
            <NavLink to="/createRecipe2" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Discover</NavLink>
            <NavLink to="/recipes2" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">Create</NavLink>
            <NavLink to="/myProfile" className="text-primary font-medium text-lg text-white w-full flex justify-center items-center hover:bg-[#ebfadb] hover:text-black h-12 rounded-xl">My Profile</NavLink>
            </div>

            <div className="flex flex-col justify-center min-h-3/12 items-center  gap-10 w-full">
            {user ? (
               <div className='flex text-primary font-medium text-lg  w-full   justify-center items-center hover:bg-[#996a0a] h-12 rounded-xl bg-[#ffc857]  text-[#023211]'> <Logout /></div>
              ) : (
                 <>
                <a href="/auth2"className="text-primary font-medium text-lg text-[#023211] w-full flex justify-center items-center bg-[#ebfadb] hover:bg-[#50865b] h-12 rounded-xl mt-4 ">
                    Get Started Free
                </a>
                <a href="/login2"className="text-primary font-medium text-lg  w-full  flex justify-center items-center hover:bg-[#996a0a] h-12 rounded-xl bg-[#ffc857]  text-[#023211]">
                    Log in
                </a>
                </>
              )}
            
            </div>
        </div>
    </div>


    </nav>
  );
};

export default Navbar;

