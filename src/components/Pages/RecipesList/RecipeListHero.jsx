// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllRecipes } from '../../../api'; // API function
// import LikeButton from "../../recipe/LikeButton";
// import { getAuth } from "firebase/auth";
// import { TbHandClick } from "react-icons/tb";
// import ShareButton from '../../recipe/ShareButton';

// const API_URL = import.meta.env.VITE_API_URL;
// const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"];
// const mealTypes = ["Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other"];
// const dishTypes = ["Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish"];





// const RecipeListHero = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [error, setError] = useState(null);
//     const [filters, setFilters] = useState({
//         mealType: "",
//         dishType: "",
//         cuisine: "",
//         search: "",
//         sortBy: "",
//     });
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeRecipeId, setActiveRecipeId] = useState(null);

//     const openShareModal = (recipeId) => {
//         setActiveRecipeId(recipeId);
//         setIsOpen(true);
//     };

//     const auth = getAuth();
//     const userId = auth.currentUser ? auth.currentUser.uid : null;
//     // useEffect(() => {
//     //     const fetchSavedRecipes = async () => {
//     //       if (!userId) return; // Don't fetch if not logged in
//     //       try {
//     //         const response = await fetch(`/api/recipes/${userId}`); // Call your backend API
//     //         const data = await response.json();
//     //         setSavedRecipes(data.savedRecipes || []);
//     //       } catch (err) {
//     //         console.error("Error fetching saved recipes:", err);
//     //       }
//     //     };
//     //     fetchSavedRecipes();
//     //   }, [userId]);




//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const data = await getAllRecipes(filters);
//                 setRecipes(data);
//             } catch (err) {
//                 console.error('Error fetching recipes:', err);
//                 setError('Failed to load recipes.');
//             }
//         };

//         fetchRecipes();
//     }, [filters]);

//     const handleFilterChange = (e) => {
//         setFilters({ ...filters, [e.target.name]: e.target.value });
//     };

//     return (
//         <div className="container mx-auto p-4   mt-40  ">

//             <div className='flex flex-col sm:flex-row gap-10  h-fit  items-center border-b-0 pb-10 justify-around'>

//                 <h2 className="font-bold text-center flex   text-[#216e40] text-4xl potta-one ">All Recipes</h2>
//                 {/* Filters */}
//                 <div className="mb-4 flex flex-wrap gap-4 text-md justify-center place-items-center pt-4 ">
//                     <input
//                         type="text"
//                         name="search"
//                         placeholder="Search recipes..."
//                         className="relative bg-white   rounded-4xl flex items-center justify-center h-8   font-medium  border  focus:outline-none px-3"
//                         value={filters.search}
//                         onChange={handleFilterChange}
//                     />

//                     <select name="mealType" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
//                         <option value="">All Dietary Tags</option>
//                         {mealTypes.map((type) => (
//                             <option key={type} value={type}>{type}</option>
//                         ))}
//                     </select>

//                     <select name="dishType" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
//                         <option value="">All Dish Types</option>
//                         {dishTypes.map((type) => (
//                             <option key={type} value={type}>{type}</option>
//                         ))}
//                     </select>

//                     <select name="cuisine" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
//                         <option value="">All Cuisines</option>
//                         {cuisines.map((cuisine) => (
//                             <option key={cuisine} value={cuisine}>{cuisine}</option>
//                         ))}
//                     </select>

//                     <select name="sortBy" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
//                         <option value="">Sort By</option>
//                         <option value="newest">Newest</option>
//                         <option value="most_liked">Most Liked</option>
//                     </select>

//                 </div>

//             </div>

//             {/* Display Recipes */}
//             {error ? (
//                 <p className="text-red-500">{error}</p>
//             ) : (
//                 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
//                     {recipes.length > 0 ? (
//                         recipes.map((recipe) => (

//                             <div key={recipe._id} className="relative border-yellow-400 border-2 rounded bg-white overflow-hidden group">
//                                 <Link to={`/recipe/${recipe._id}`} className="block">
//                                     {recipe.image && recipe.image.length > 0 && (
//                                         <img


//                                             src={`https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image[0].replace(
//                                                 // src={`${API_URL}/generated_images/${recipe.image[0].replace(
//                                                 /[^a-zA-Z0-9.-]+/g,
//                                                 "-"
//                                             )}`}
//                                             alt={recipe.title}
//                                             className="w-full h-56 object-cover rounded"
//                                             onError={(e) => {
//                                                 e.target.onerror = null;
//                                                 e.target.src = "/placeholder_image.png";
//                                             }}
//                                         />
//                                     )}
//                                 </Link>


//                                 <div className="absolute inset-0 bg-[#000000b9] bg-opacity-50 flex gap-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
//                                     <LikeButton recipeId={recipe._id} userId={userId} />
//                                     <Link to={`/recipe/${recipe._id}`} className='px-4 py-2 rounded-lg font-semibold  duration-300 flex items-center gap-2 bg-yellow-200 hover:bg-yellow-400  transition-transform active:scale-95'><TbHandClick size={25} /></Link>
//                                     <ShareButton recipeId={recipe._id} isOpen={isOpen} setIsOpen={setIsOpen} openShareModal={openShareModal} />
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-gray-500">No recipes found.</p>
//                     )}
//                 </div>
//             )}
//             {isOpen && <ShareButton recipeId={activeRecipeId} isOpen={isOpen} setIsOpen={setIsOpen} />}

//         </div>

//     );
// };

// export default RecipeListHero;


//version 2

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getAllRecipes } from '../../../api'; // API function
// import LikeButton from "../../recipe/LikeButton";
// import { getAuth } from "firebase/auth";
// import { TbHandClick } from "react-icons/tb";
// import ShareButton from '../../recipe/ShareButton';

// // You might want to replace with a nicer font in your app globals like 'Potta One' or 'Inter'.
// const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"];
// const mealTypes = ["Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other"];
// const dishTypes = ["Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish"];

// const RecipeListHero = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [error, setError] = useState(null);
//     const [filters, setFilters] = useState({
//         mealType: "",
//         dishType: "",
//         cuisine: "",
//         search: "",
//         sortBy: "",
//     });
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeRecipeId, setActiveRecipeId] = useState(null);

//     const openShareModal = recipeId => {
//         setActiveRecipeId(recipeId);
//         setIsOpen(true);
//     };

//     const auth = getAuth();
//     const userId = auth.currentUser ? auth.currentUser.uid : null;

//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const data = await getAllRecipes(filters);
//                 setRecipes(data);
//                 setError(null);
//             } catch (err) {
//                 console.error('Error fetching recipes:', err);
//                 setError('Failed to load recipes.');
//             }
//         };
//         fetchRecipes();
//     }, [filters]);

//     const handleFilterChange = e => {
//         setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-200 py-16 px-4 sm:px-8 md:px-16 lg:px-20 mt-30">
//             <div className="max-w-7xl mx-auto flex flex-col gap-10">
//                 {/* Title and Filters */}
//                 <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-green-300 pb-8">
//                     <h2 className="font-potta text-5xl text-[#216e40] font-extrabold tracking-wide select-none drop-shadow-md">
//                         All Recipes
//                     </h2>

//                     <div className="flex flex-wrap gap-4 max-w-xl w-full justify-center">
//                         <input
//                             type="search"
//                             name="search"
//                             placeholder="Search recipes..."
//                             className="
//                 grow sm:grow-0 sm:w-60 px-4 py-2 rounded-3xl border border-green-300
//                 shadow-sm placeholder-green-700 text-green-900 font-semibold text-sm
//                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1
//                 transition duration-300
//               "
//                             value={filters.search}
//                             onChange={handleFilterChange}
//                             aria-label="Search recipes"
//                             spellCheck="false"
//                             autoComplete="off"
//                         />

//                         {[
//                             { name: "mealType", label: "Dietary Tag", options: mealTypes },
//                             { name: "dishType", label: "Dish Type", options: dishTypes },
//                             { name: "cuisine", label: "Cuisine", options: cuisines },
//                             { name: "sortBy", label: "Sort By", options: ["Newest", "Most Liked"] }
//                         ].map(({ name, label, options }) => (
//                             <select
//                                 key={name}
//                                 name={name}
//                                 onChange={handleFilterChange}
//                                 className="
//                   sm:w-40 px-4 py-2 rounded-3xl border border-green-300
//                   shadow-sm text-green-900 font-semibold text-sm
//                   focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1
//                   transition duration-300
//                   bg-white cursor-pointer
//                 "
//                                 aria-label={`Filter by ${label}`}
//                                 value={filters[name]}
//                             >
//                                 <option value="">{`All ${label}s`}</option>
//                                 {options.map(opt => (
//                                     <option key={opt.toLowerCase()} value={opt.toLowerCase()}>
//                                         {opt}
//                                     </option>
//                                 ))}
//                             </select>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                     <p className="text-center text-red-600 text-lg font-semibold animate-pulse">
//                         {error}
//                     </p>
//                 )}

//                 {/* Recipes Grid */}
//                 {!error && (
//                     <div
//                         className="
//               grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
//               gap-8
//             "
//                     >
//                         {recipes.length > 0 ? (
//                             recipes.map(recipe => (
//                                 <article
//                                     key={recipe._id}
//                                     className="
//                     relative flex flex-col rounded-3xl bg-white shadow-lg overflow-hidden
//                     group hover:shadow-2xl transition-shadow duration-500 cursor-pointer
//                     animate-fadeInUp
//                   "
//                                     style={{ animationFillMode: "forwards" }}
//                                 >
//                                     {/* Image container */}
//                                     <Link to={`/recipe/${recipe._id}`} aria-label={`View recipe ${recipe.title}`}>
//                                         {recipe.image && recipe.image.length > 0 ? (
//                                             <div className="relative w-full h-56 overflow-hidden rounded-t-3xl bg-gray-100">
//                                                 <img
//                                                     src={`https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image[0].replace(/[^a-zA-Z0-9.-]+/g, "-")}`}
//                                                     alt={recipe.title}
//                                                     className="
//                             w-full h-full object-cover
//                             transform group-hover:scale-110 transition-transform duration-700
//                             ease-in-out
//                           "
//                                                     loading="lazy"
//                                                     onError={e => {
//                                                         e.target.onerror = null;
//                                                         e.target.src = "/placeholder_image.png";
//                                                     }}
//                                                 />
//                                                 {/* Shimmer overlay on hover */}
//                                                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
//                                             </div>
//                                         ) : (
//                                             <div className="w-full h-56 bg-gray-200 rounded-t-3xl flex items-center justify-center text-gray-400 font-semibold text-lg select-none">
//                                                 No Image
//                                             </div>
//                                         )}
//                                     </Link>

//                                     {/* Info section */}
//                                     <div className="flex flex-col flex-1 p-4 gap-3">
//                                         <Link to={`/recipe/${recipe._id}`} aria-label={`View recipe details for ${recipe.title}`} className="flex-1">
//                                             <h3 className="text-lg font-semibold text-green-900 line-clamp-2 hover:text-green-700 transition-colors duration-300">
//                                                 {recipe.title}
//                                             </h3>
//                                         </Link>

//                                         {/* Buttons row */}
//                                         <div className="flex items-center justify-between gap-2 mt-2">
//                                             <LikeButton recipeId={recipe._id} userId={userId} />

//                                             <Link
//                                                 to={`/recipe/${recipe._id}`}
//                                                 className="
//                           flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-300 hover:bg-yellow-400
//                           text-green-900 font-semibold text-sm shadow-md transition transform hover:scale-105 active:scale-95
//                           select-none
//                         "
//                                                 aria-label={`Visit recipe ${recipe.title}`}
//                                             >
//                                                 <TbHandClick size={20} />
//                                                 View
//                                             </Link>

//                                             <ShareButton
//                                                 recipeId={recipe._id}
//                                                 isOpen={isOpen}
//                                                 setIsOpen={setIsOpen}
//                                                 openShareModal={openShareModal}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Dark translucent overlay with controls on hover */}
//                                     <div className="
//                     absolute inset-0 bg-black/0 group-hover:bg-black/50
//                     flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100
//                     transition-opacity duration-300 rounded-3xl pointer-events-none group-hover:pointer-events-auto
//                     z-10
//                   ">
//                                         {/* Empty to enable fade effect */}
//                                     </div>
//                                 </article>
//                             ))
//                         ) : (
//                             <p className="text-center col-span-full text-gray-700 text-lg select-none">
//                                 No recipes found.
//                             </p>
//                         )}
//                     </div>
//                 )}

//                 {/* Share Modal */}
//                 {isOpen && (
//                     <ShareButton
//                         recipeId={activeRecipeId}
//                         isOpen={isOpen}
//                         setIsOpen={setIsOpen}
//                     />
//                 )}
//             </div>

//             {/* Animations keyframe style - add this in your global CSS or as style tag */}
//             <style>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease forwards;
//         }
//       `}</style>
//         </div>
//     );
// };

// export default RecipeListHero;



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../../../api'; // API function
import LikeButton from "../../recipe/LikeButton";
import { getAuth } from "firebase/auth";
import { TbHandClick } from "react-icons/tb";
import ShareButton from '../../recipe/ShareButton';

const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"];
const mealTypes = ["Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other"];
const dishTypes = ["Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish"];

const RecipeListHero = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        mealType: "",
        dishType: "",
        cuisine: "",
        search: "",
        sortBy: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    const [activeRecipeId, setActiveRecipeId] = useState(null);

    const openShareModal = (recipeId) => {
        setActiveRecipeId(recipeId);
        setIsOpen(true);
    };

    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getAllRecipes(filters);
                setRecipes(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching recipes:', err);
                setError('Failed to load recipes.');
            }
        };
        fetchRecipes();
    }, [filters]);

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ebfadb] via-[#c0e2b2] to-[#a1d186] py-16 px-6 sm:px-12 md:px-20 lg:px-24 mt-20">

            {/* Title and Filters */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-green-600 pb-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#216e40] font-potta-one drop-shadow-lg select-none">
                    All Recipes
                </h2>

                <div className="flex flex-wrap gap-4 max-w-xl w-full justify-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search recipes..."
                        aria-label="Search recipes"
                        spellCheck="false"
                        autoComplete="off"
                        className="
              grow sm:grow-0 sm:w-64 px-4 py-2 rounded-3xl border-2 border-green-400
              shadow-md placeholder-green-700 text-green-800 font-semibold text-base
              focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-1
              transition duration-300
            "
                        value={filters.search}
                        onChange={handleFilterChange}
                    />

                    {[
                        { name: "mealType", label: "Dietary Tag", options: mealTypes },
                        { name: "dishType", label: "Dish Type", options: dishTypes },
                        { name: "cuisine", label: "Cuisine", options: cuisines },
                        { name: "sortBy", label: "Sort By", options: ["Newest", "Most Liked"] }
                    ].map(({ name, label, options }) => (
                        <select
                            key={name}
                            name={name}
                            aria-label={`Filter by ${label}`}
                            value={filters[name]}
                            onChange={handleFilterChange}
                            className="
                sm:w-44 px-4 py-2 rounded-3xl border-2 border-green-400
                shadow-md text-green-800 font-semibold text-base bg-white cursor-pointer
                focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-1
                transition duration-300
              "
                        >
                            <option value="">{`All ${label}s`}</option>
                            {options.map(opt => (
                                <option key={opt.toLowerCase()} value={opt.toLowerCase()}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>
            </div>

            {/* Error message */}
            {error && (
                <p className="text-center text-red-700 text-lg font-semibold mt-4 animate-pulse">
                    {error}
                </p>
            )}

            {/* Recipes Grid */}
            {!error && (
                <div
                    className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {recipes.length > 0 ? (
                        recipes.map(recipe => (
                            <article
                                key={recipe._id}
                                className="
                  relative flex flex-col rounded-3xl bg-white shadow-lg overflow-hidden
                  group hover:shadow-2xl transition-shadow duration-500 cursor-pointer
                  animate-fadeInUp
                "
                                style={{ animationFillMode: "forwards" }}
                            >
                                <Link to={`/recipe/${recipe._id}`} aria-label={`View recipe ${recipe.title}`} className="block relative overflow-hidden rounded-t-3xl h-56 bg-gray-100">
                                    {recipe.image && recipe.image.length > 0 ? (
                                        <>
                                            <img
                                                src={`https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image[0].replace(/[^a-zA-Z0-9.-]+/g, "-")}`}
                                                alt={recipe.title}
                                                loading="lazy"
                                                className="
                          w-full h-full object-cover object-center
                          transform transition-transform duration-700 ease-in-out
                          group-hover:scale-110
                        "
                                                onError={e => {
                                                    e.target.onerror = null;
                                                    e.target.src = "/placeholder_image.png";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none rounded-t-3xl" />
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-semibold text-lg select-none rounded-t-3xl">
                                            No Image
                                        </div>
                                    )}
                                    {/* Buttons overlay */}
                                    <div className="
                    absolute inset-0 bg-black/0 group-hover:bg-black/60
                    flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 rounded-t-3xl pointer-events-none group-hover:pointer-events-auto z-20
                  ">
                                        <LikeButton recipeId={recipe._id} userId={userId} />
                                        <Link
                                            to={`/recipe/${recipe._id}`}
                                            className="
                        flex items-center gap-1 px-4 py-2 rounded-full bg-yellow-300 hover:bg-yellow-400
                        text-green-900 font-semibold text-sm shadow-md transition transform hover:scale-110 active:scale-95 select-none
                      "
                                            aria-label={`View recipe ${recipe.title}`}
                                        >
                                            <TbHandClick size={22} />
                                            View
                                        </Link>
                                        <ShareButton recipeId={recipe._id} isOpen={isOpen} setIsOpen={setIsOpen} openShareModal={openShareModal} />
                                    </div>
                                </Link>

                                <div className="flex flex-col flex-1 p-5 gap-3">
                                    <Link to={`/recipe/${recipe._id}`} aria-label={`Recipe details for ${recipe.title}`}>
                                        <h3 className="text-lg font-extrabold text-green-900 line-clamp-2 hover:text-green-700 transition-colors duration-300">
                                            {recipe.title}
                                        </h3>
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-600 font-semibold text-lg select-none">
                            No recipes found.
                        </p>
                    )}
                </div>
            )}

            {/* Share Modal */}
            {isOpen && <ShareButton recipeId={activeRecipeId} isOpen={isOpen} setIsOpen={setIsOpen} />}

            {/* Animations */}
            <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
        }
      `}</style>
        </div>
    );
};

export default RecipeListHero;
