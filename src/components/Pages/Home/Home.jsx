// import Navbar from '../../layout/Navbar';
// import Hero from './Hero/Hero';
// import Hero2 from './Hero/Hero2';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-primary-light">
//       <Navbar />

//       {/* Hero Section */}
//       <div className='relative flex flex-col justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 bg-[url(leafs.jpg)] bg-no-repeat bg-contain bg-center mt-20 sm:mt-24 lg:mt-28 mb-8 sm:mb-12'>
//         <div className="absolute inset-0 bg-[#216e40] mix-blend-multiply rounded-xl shadow-2xl"></div>
//         <div className='relative flex flex-col justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] max-w-4xl px-6 sm:px-8 lg:px-10 gap-6 sm:gap-8 backdrop-blur-[1px]'>

//           {/* Hero Title */}
//           <div className='flex flex-col gap-2 sm:gap-3 rounded-xl p-4 sm:p-6'>
//             <h1 className="font-bold text-center potta-one text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
//               AI Generated
//             </h1>
//             <h1 className="font-bold text-center potta-one text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
//               Delicious Recipe&apos;s
//             </h1>
//           </div>

//           {/* Hero Description */}
//           <p className="text-center text-sm sm:text-base lg:text-lg xl:text-xl text-white max-w-2xl mx-auto leading-relaxed">
//             Your personal digital cookbook! Add your favorite ingredients, craft unique recipes, and explore endless culinary possibilities.
//           </p>

//           {/* Search Input */}
//           <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white rounded-2xl p-3 sm:p-4 shadow-lg  '>
//             <input
//               type="text"
//               placeholder="Enter ingredients to generate recipe"
//               className='flex-1 w-full h-10 sm:h-12 focus:outline-none text-sm sm:text-base px-4 rounded-xl  border-gray-200  transition-colors duration-300'
//             />
//             <NavLink
//               to="/createRecipe2"
//               className='w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 font-semibold bg-[#ffc857] border border-black hover:bg-[#996a0a] hover:text-white rounded-xl text-sm sm:text-base transition-all duration-300 text-center shadow-md hover:shadow-lg'
//             >
//               Create
//             </NavLink>
//           </div>

//           {/* Action Buttons */}
//           <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 items-center  w-full'>
//             <NavLink
//               to="/recipes2"
//               className='w-full  px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[#013712] bg-[#E6FF94] hover:bg-green-900 hover:text-white border border-black rounded-xl text-sm sm:text-base transition-all duration-300 text-center shadow-md hover:shadow-lg'
//             >
//               Discover Recipes
//             </NavLink>
//             <NavLink
//               to="/Auth2"
//               className='w-full  px-6 sm:px-8 py-3 sm:py-4 font-semibold text-[#013712] bg-[#E6FF94] hover:bg-green-900 hover:text-white border border-black rounded-xl text-sm sm:text-base transition-all duration-300 text-center shadow-md hover:shadow-lg'
//             >
//               Create a Free Account
//             </NavLink>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className='min-h-screen w-full bg-[#FFFDF5]'>
//         <div className='w-full bg-[#FFFDF5] flex flex-col lg:flex-row justify-around items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12'>

//           {/* Features Content */}
//           <div className='flex flex-col h-fit p-4 sm:p-6 justify-between gap-8 lg:gap-10 max-w-2xl'>
//             <div className='flex flex-col gap-2 sm:gap-3 text-center lg:text-start'>
//               <h1 className="font-bold text-[#013712] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
//                 Your Ingredients, Our AI
//               </h1>
//               <h1 className="font-bold text-[#013712] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
//                 Perfect Recipes
//               </h1>
//               <h1 className="font-bold text-[#013712] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight">
//                 In Seconds!
//               </h1>
//             </div>

//             <div className='text-sm sm:text-base lg:text-lg text-[#013712] text-center lg:text-start leading-relaxed'>
//               Just enter the ingredients you have, and our AI will generate a delicious recipe instantly!
//             </div>

//             <div>
//               <ul className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base lg:text-lg font-semibold">
//                 <li className='flex gap-3 sm:gap-4 items-center'>
//                   <IoIosCheckmarkCircle size={24} className='text-[#216e40] flex-shrink-0' />
//                   <span>Generate AI-Powered Recipes</span>
//                 </li>
//                 <li className='flex gap-3 sm:gap-4 items-center'>
//                   <IoIosCheckmarkCircle size={24} className='text-[#216e40] flex-shrink-0' />
//                   <span>Personalized Meal Suggestions</span>
//                 </li>
//                 <li className='flex gap-3 sm:gap-4 items-center'>
//                   <IoIosCheckmarkCircle size={24} className='text-[#216e40] flex-shrink-0' />
//                   <span>Explore Global Cuisines</span>
//                 </li>
//                 <li className='flex gap-3 sm:gap-4 items-center'>
//                   <IoIosCheckmarkCircle size={24} className='text-[#216e40] flex-shrink-0' />
//                   <span>Save and Share Recipes</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Features Image */}
//           <img
//             src="/Dishes.png"
//             alt="Delicious dishes"
//             className='w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300'
//           />
//         </div>

//         {/* Community Section */}
//         <div className='relative flex-col h-fit w-full flex justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 gap-8 sm:gap-10'>
//           <div className="absolute inset-0 bg-green-900 mix-blend-multiply rounded-xl shadow-2xl"></div>

//           <div className='relative z-10 w-full max-w-4xl h-full bg-[#ebfadb] text-center p-8 sm:p-10 lg:p-12 text-[#013712] gap-6 sm:gap-8 flex-col flex rounded-xl justify-around items-center shadow-2xl'>
//             <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight'>
//               Spice It Up! <br />
//               Discover New <br />
//               Flavors Every Day!
//             </div>
//             <div className='text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl'>
//               Join our community and explore a world of delicious recipes tailored just for you
//             </div>

//             <NavLink
//               to="/recipes2"
//               className='relative z-10 border flex items-center text-center bg-[#ffc857] border-black hover:bg-[#996a0a] hover:text-white rounded-xl justify-center py-3 sm:py-4 px-8 sm:px-12 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl'
//             >
//               Join Our Community
//             </NavLink>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className='h-fit w-full text-[#013712] flex flex-col justify-center items-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8'>
//           <div className='p-4 sm:p-6 font-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-8 sm:mb-12'>
//             Unlock Culinary Activity
//           </div>
//           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl w-full'>

//             <div className='w-full p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 items-center bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
//               <img src="/Cuisines2.jpeg" alt="Global cuisines" className='w-full max-w-48 sm:max-w-56 rounded-xl object-cover' />
//               <h2 className='font-semibold text-lg sm:text-xl text-center'>Explore Global Cuisines</h2>
//               <span className='text-sm sm:text-base text-center font-medium text-gray-600'>
//                 Choose from a variety of cuisines like Italian, Mexican, Indian, and more.
//               </span>
//             </div>

//             <div className='w-full p-6 sm:p-8 bg-white flex flex-col gap-4 sm:gap-6 items-center rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
//               <img src="/DietaryTags.jpeg" alt="Dietary preferences" className='w-full max-w-48 sm:max-w-56 rounded-xl object-cover' />
//               <h2 className='font-semibold text-lg sm:text-xl text-center'>Dietary Tags</h2>
//               <span className='text-sm sm:text-base text-center font-medium text-gray-600'>
//                 Select dietary preferences such as Vegan, Gluten-Free and Keto.
//               </span>
//             </div>

//             <div className='w-full p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 sm:gap-6 items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
//               <img src="/DishTypes.jpeg" alt="Dish types" className='w-full max-w-48 sm:max-w-56 rounded-xl object-cover' />
//               <h2 className='font-semibold text-lg sm:text-xl text-center'>Dish Types</h2>
//               <span className='text-sm sm:text-base text-center font-medium text-gray-600'>
//                 Find recipes categorized by Appetizer, Main Course, Dessert and More.
//               </span>
//             </div>

//             <div className='w-full p-6 sm:p-8 bg-white rounded-2xl flex flex-col gap-4 sm:gap-6 items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'>
//               <img src="/Nutrition.png" alt="Nutrition information" className='w-full max-w-48 sm:max-w-56 rounded-xl object-cover' />
//               <h2 className='font-semibold text-lg sm:text-xl text-center'>Nutrition Information</h2>
//               <span className='text-sm sm:text-base text-center font-medium text-gray-600'>
//                 Detailed insights on Calories, Protein, Carbs, and fats.
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-green-900 text-white py-12 sm:py-16">
//         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">

//           {/* Logo & About */}
//           <div className='text-center lg:text-start'>
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4">Calorie AI</h2>
//             <p className="text-sm sm:text-base leading-relaxed">
//               Your AI-powered digital cookbook for personalized recipes and nutrition insights.
//             </p>
//           </div>

//           {/* Social Media */}
//           <div className='text-center lg:text-start'>
//             <h3 className="text-lg sm:text-xl font-semibold mb-4">Follow Us</h3>
//             <div className="flex justify-center lg:justify-start space-x-4">
//               <a href="#" className="p-3 bg-white text-blue-600 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110">
//                 <FaFacebookF size={18} />
//               </a>
//               <a href="#" className="p-3 bg-white text-blue-400 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110">
//                 <FaTwitter size={18} />
//               </a>
//               <a href="#" className="p-3 bg-white text-pink-600 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110">
//                 <FaInstagram size={18} />
//               </a>
//               <a href="#" className="p-3 bg-white text-blue-700 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-110">
//                 <FaLinkedin size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Newsletter Signup */}
//           <div className='text-center lg:text-start'>
//             <h3 className="text-lg sm:text-xl font-semibold mb-4">Subscribe</h3>
//             <p className="text-sm sm:text-base mb-4">Get the latest AI-generated recipes straight to your inbox!</p>
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 p-3 rounded-l-lg sm:rounded-l-xl text-gray-900 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//               <button className="bg-yellow-500 px-6 py-3 rounded-r-lg sm:rounded-r-xl hover:bg-yellow-600 transition-colors duration-300 font-semibold">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="text-center mt-8 sm:mt-12 text-sm border-t border-gray-600 pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8">
//           <p>
//             &copy; {new Date().getFullYear()} Calorie AI. All Rights Reserved. |
//             <a href="#" className="hover:underline ml-1"> Privacy Policy</a> |
//             <a href="#" className="hover:underline ml-1"> Terms of Service</a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

import Navbar from '../../layout/Navbar';
import Hero from './Hero/Hero';
import Hero2 from './Hero/Hero2';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Footer from '../../layout/Footer';

const CARD_BG_OPACITY = "bg-[#183928]/95";
const CARD_RING = "#a2f7c2";
const LIGHT_GRAD = "from-[#e3f2ee] via-[#ebfadb] to-[#e6fbec]";

const Home = () => {
  return (
    <div className="min-h-screen w-full relative bg-gradient-to-b from-[#e6f8ee] via-[#ebfadb] to-[#e8faee]">
      {/* Mesh/dot abstract background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg className="w-full h-full absolute" style={{ mixBlendMode: 'multiply' }} width="100%" height="100%">
          <defs>
            <radialGradient id="meshBg" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#a0eec7" stopOpacity="0.2" />
              <stop offset="80%" stopColor="#ebfadb" stopOpacity="0" />
            </radialGradient>
            <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="9" cy="9" r="2" fill="#bee4ce" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshBg)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <img src="/kiwi.png"
          className="absolute left-[52%] top-[62%] w-[650px] sm:w-[390px] opacity-18 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-lg"
          alt=""
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative flex flex-col justify-center min-h-[700px] sm:min-h-[660px] lg:min-h-[760px] max-w-4xl mx-auto px-4 sm:px-7 lg:px-10 my-20 items-center group ">
        {/* Glassy card with dark green and frosted blur */}
        <div
          className={`
            relative w-full max-w-3xl rounded-[2.5rem]
            shadow-2xl border border-[#a2f7c2]/40 m-0 overflow-hidden
            backdrop-blur-2xl backdrop-saturate-150 ${CARD_BG_OPACITY}
            animate-cardPop
          `}
        >
          {/* Emerald subtle ring */}
          <div className="absolute -inset-1 rounded-[2.75rem] pointer-events-none z-0 after:absolute after:inset-0 after:rounded-[2.75rem] after:ring after:ring-[#a2f7c2]/28 after:blur after:opacity-70  " />
          <div className="relative z-10 flex flex-col justify-center px-7 sm:px-12 pt-10 pb-12 gap-7">
            {/* Hero Title */}
            <div className="flex flex-col gap-2 mb-2">
              <h1 className="font-bold text-center potta-one text-[#a2f7c2] text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow">
                AI Generated
              </h1>
              <h1 className="font-bold text-center potta-one text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Delicious Recipe&apos;s
              </h1>
            </div>
            {/* Hero Description */}
            <p className="text-center text-base sm:text-lg xl:text-xl text-[#eafeef] max-w-2xl mx-auto leading-relaxed font-medium">
              Your personal digital cookbook! Add your favorite ingredients, craft unique recipes, and explore endless culinary possibilities.
            </p>
            {/* Search Input (blended glass) */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full bg-white/15 rounded-2xl p-3 sm:p-4 shadow-md backdrop-blur h-38 sm:h-20">
              <input
                type="text"
                placeholder="Enter ingredients to generate recipe"
                className="flex-1 w-full max-h-20 sm:h-14 focus:outline-none text-base px-5 rounded-xl border border-[#a2f7c2]/30 text-[#eafeef] placeholder:text-[#c9fff3] bg-[#173326]/60 focus:ring-2 focus:ring-[#a2f7c2] transition-colors  duration-300"
                style={{ backdropFilter: 'blur(2px)' }}
              />
              <NavLink
                to="/createRecipe2"
                className="w-full sm:w-auto px-8 py-3 font-semibold bg-gradient-to-r from-[#a2f7c2] via-[#69e6c0] to-[#348e6b] hover:from-[#cafcde] hover:to-[#2ebb70] text-[#183928] rounded-2xl text-base transition-all duration-200 text-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#a2f7c2]/70"
              >
                Create
              </NavLink>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full">
              <NavLink
                to="/recipes2"
                className="w-full px-8 py-3 font-semibold text-[#183928] bg-[#cafcd8] hover:bg-[#16c67a] hover:text-white border-0 rounded-2xl text-base transition duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Discover Recipes
              </NavLink>
              <NavLink
                to="/Auth2"
                className="w-full px-8 py-3 font-semibold text-[#183928] bg-[#cafcd8] hover:bg-[#13a654] hover:text-white border-0 rounded-2xl text-base transition duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Create a Free Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-0 w-full bg-gradient-to-b from-[#fffdf5] to-[#e7ffe2]">
        <div className="w-full flex flex-col lg:flex-row justify-around items-center py-2 px-6 sm:px-10 gap-14 lg:gap-24">
          {/* Text features */}
          <div className="flex flex-col h-fit p-6 lg:p-0 justify-between gap-10 max-w-2xl">
            <div className="flex flex-col gap-2 text-center lg:text-start">
              <h1 className="font-extrabold text-[#19482d] text-2xl sm:text-4xl xl:text-5xl leading-tight tracking-tight select-none">
                Your Ingredients, Our AI
              </h1>
              <h1 className="font-extrabold text-[#a2f7c2] text-2xl sm:text-4xl xl:text-5xl leading-tight tracking-tight select-none">
                Perfect Recipes
              </h1>
              <h1 className="font-extrabold text-[#19482d] text-2xl sm:text-4xl xl:text-5xl leading-tight tracking-tight select-none">
                In Seconds!
              </h1>
            </div>
            <div className="text-base lg:text-lg text-[#215531] text-center lg:text-start leading-relaxed font-medium">
              Just enter the ingredients you have, and our AI will generate a delicious recipe instantly!
            </div>
            <ul className="space-y-4 text-base lg:text-lg font-semibold text-[#21422c]">
              {[
                "Generate AI-Powered Recipes",
                "Personalized Meal Suggestions",
                "Explore Global Cuisines",
                "Save and Share Recipes"
              ].map((feature, idx) => (
                <li className="flex gap-3 items-center" key={idx}>
                  <IoIosCheckmarkCircle size={28} className="text-[#a2f7c2]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Features art */}
          <img
            src="/Dishes.png"
            alt="Delicious dishes"
            className="w-full max-w-lg rounded-3xl shadow-2xl hover:scale-[1.035] transition-transform duration-300"
            style={{ border: '4px solid #ebfadb', background: "#26393311" }}
          />
        </div>
        {/* Community Section */}
        <div className="relative flex flex-col items-center justify-center py-16 px-6 sm:px-10 gap-8 mt-16">
          <div className="absolute inset-0 bg-[#13291e] mix-blend-multiply rounded-[2.5rem] shadow-xl" />
          <div className="relative z-10 w-full max-w-4xl bg-[#ebfadb] text-center py-12 sm:py-16 px-6 sm:px-12 text-[#183928] gap-6 flex flex-col rounded-[2.5rem] items-center shadow-2xl backdrop-blur-xl">
            <div className="font-bold text-3xl sm:text-5xl xl:text-6xl leading-tight text-[#19482d]">
              Spice It Up! <br />
              Discover New <br />
              Flavors Every Day!
            </div>
            <div className="text-base lg:text-xl max-w-2xl text-[#1d4933]">
              Join our community and explore a world of delicious recipes tailored just for you
            </div>
            <NavLink
              to="/recipes2"
              className="relative border-0 flex items-center justify-center bg-gradient-to-r from-[#a2f7c2] via-[#d7fede] to-[#a3f8ac] hover:from-[#68e292] hover:to-[#23b86d] text-[#173928] rounded-2xl py-3 px-12 font-semibold text-base lg:text-lg transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Join Our Community
            </NavLink>
          </div>
        </div>
        {/* Features grid */}
        <div className="w-full flex flex-col justify-center items-center mt-16 px-6">
          <div className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center mb-10 select-none text-[#1b3c2a]">Unlock Culinary Activity</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
            {[
              {
                image: "/Cuisines2.jpeg",
                title: "Explore Global Cuisines",
                text: "Choose from a variety of cuisines like Italian, Mexican, Indian, and more."
              },
              {
                image: "/DietaryTags.jpeg",
                title: "Dietary Tags",
                text: "Select dietary preferences such as Vegan, Gluten-Free and Keto."
              },
              {
                image: "/DishTypes.jpeg",
                title: "Dish Types",
                text: "Find recipes categorized by Appetizer, Main Course, Dessert and More."
              },
              {
                image: "/Nutrition.png",
                title: "Nutrition Information",
                text: "Detailed insights on Calories, Protein, Carbs, and fats."
              },
            ].map(({ image, title, text }, idx) => (
              <div
                key={idx}
                className="w-full p-8 flex flex-col gap-5 items-center bg-[#1c3429]/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-[#a2f7c2]/30"
                style={{ backdropFilter: 'blur(0.5px)' }}
              >
                <img src={image} alt={title} className="w-full max-w-44 rounded-xl object-cover shadow-lg border-2 border-[#a2f7c2]/20" />
                <h2 className="font-semibold text-xl text-center text-[#a2f7c2] drop-shadow">{title}</h2>
                <span className="text-base text-center font-medium text-[#def7e7]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <footer className="relative bg-[#183928] text-[#e8fff1] pt-14 pb-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-3 text-[#a2f7c2] drop-shadow">Calorie AI</h2>
            <p className="text-base leading-relaxed max-w-xs">
              Your AI-powered digital cookbook for personalized recipes and nutrition insights.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-semibold mb-2 text-[#a2f7c2]">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="p-3 bg-[#e7ffe2] text-green-900 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="p-3 bg-[#e7ffe2] text-blue-500 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-3 bg-[#e7ffe2] text-pink-600 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-3 bg-[#e7ffe2] text-blue-700 rounded-full hover:bg-[#a2f7c2] hover:text-[#183928] transition-all duration-200 hover:scale-110">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-2 text-[#a2f7c2]">Subscribe</h3>
            <p className="text-base mb-4">Get the latest AI-generated recipes straight to your inbox!</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-lg text-green-900 bg-[#ecfff6] border-0 focus:outline-none focus:ring-2 focus:ring-[#a2f7c2]"
              />
              <button className="bg-gradient-to-r from-[#a2f7c2] to-[#48b96f] px-7 py-3 rounded-r-lg font-semibold text-[#183928] hover:bg-[#d8fcf0] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-sm border-t border-[#55ce92]/20 pt-6 px-4">
          <p>
            &copy; {new Date().getFullYear()} Calorie AI. All Rights Reserved. |
            <a href="#" className="hover:underline ml-1">Privacy Policy</a> |
            <a href="#" className="hover:underline ml-1">Terms of Service</a>
          </p>
        </div>
        <style>{`
          @keyframes cardPop {
            0% { opacity:0; transform: translateY(60px) scale(.97);}
            65% {opacity:1;}
            100% {opacity:1; transform:none;}
          }
          .animate-cardPop { animation: cardPop 0.65s cubic-bezier(.37,1.01,.57,.92) both; }
        `}</style>
      </footer> */}

      <Footer />
    </div>
  );
};

export default Home;
