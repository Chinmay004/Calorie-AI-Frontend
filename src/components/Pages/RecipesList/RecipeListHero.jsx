import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from '../../../api'; // API function
import LikeButton from "../../recipe/LikeButton";
import { getAuth } from "firebase/auth";
import { TbHandClick } from "react-icons/tb";
import ShareButton from '../../recipe/ShareButton';

const API_URL = import.meta.env.VITE_API_URL;
const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"];
const mealTypes = ["Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg","BreakFast","Dinner","Lunch","Dessert","Other"];
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
    // useEffect(() => {
    //     const fetchSavedRecipes = async () => {
    //       if (!userId) return; // Don't fetch if not logged in
    //       try {
    //         const response = await fetch(`/api/recipes/${userId}`); // Call your backend API
    //         const data = await response.json();
    //         setSavedRecipes(data.savedRecipes || []);
    //       } catch (err) {
    //         console.error("Error fetching saved recipes:", err);
    //       }
    //     };
    //     fetchSavedRecipes();
    //   }, [userId]);
      
    
  
    
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getAllRecipes(filters);
                setRecipes(data);
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
        <div className="container mx-auto p-4   mt-40  ">

            <div className='flex gap-10  h-fit  items-center border-b-0 pb-10 justify-around'>
                <h2 className="font-bold text-center flex   text-[#216e40] text-4xl potta-one ">All Recipes</h2>
                {/* Filters */}
                <div className="mb-4 flex flex-wrap gap-4 text-md justify-center place-items-center pt-4 ">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search recipes..."
                        className="relative bg-white   rounded-4xl flex items-center justify-center h-8   font-medium  border  focus:outline-none px-3"
                        value={filters.search}
                        onChange={handleFilterChange}
                    />

                    <select name="mealType" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
                        <option value="">All Dietary Tags</option>
                        {mealTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>

                    <select name="dishType" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
                        <option value="">All Dish Types</option>
                        {dishTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>

                    <select name="cuisine" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
                        <option value="">All Cuisines</option>
                        {cuisines.map((cuisine) => (
                            <option key={cuisine} value={cuisine}>{cuisine}</option>
                        ))}
                    </select>

                    <select name="sortBy" className="relative bg-white border  text-[10px] sm:text-xs lg:text-sm w-32 sm:w-42  lg:w-42 rounded-2xl flex items-center justify-center h-8  font-semibold px-3 focus:outline-none" onChange={handleFilterChange}>
                        <option value="">Sort By</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
            
                </div>
            </div>

            {/* Display Recipes */}
             {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 ">
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                           
                            <div key={recipe._id} className="relative border-yellow-400 border-2 rounded bg-white overflow-hidden group">
                                <Link to={`/recipe/${recipe._id}`} className="block">
                                    {recipe.image && recipe.image.length > 0 && (
                                    <img
                                        src={`${API_URL}/generated_images/${recipe.image[0].replace(
                                        /[^a-zA-Z0-9.-]+/g,
                                        "-"
                                        )}`}
                                        alt={recipe.title}
                                        className="w-full h-56 object-cover rounded"
                                        onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/placeholder_image.png";
                                        }}
                                    />
                                    )}
                                </Link>

                              
                                <div className="absolute inset-0 bg-[#000000b9] bg-opacity-50 flex gap-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                                    <LikeButton recipeId={recipe._id} userId={userId} />
                                    <Link to={`/recipe/${recipe._id}`} className='px-4 py-2 rounded-lg font-semibold  duration-300 flex items-center gap-2 bg-yellow-200 hover:bg-yellow-400  transition-transform active:scale-95'><TbHandClick size={25} /></Link>
                                    <ShareButton recipeId={recipe._id} isOpen={isOpen} setIsOpen={setIsOpen} openShareModal={openShareModal} />
                                    </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No recipes found.</p>
                    )}
                </div>
            )}
                  {isOpen && <ShareButton recipeId={activeRecipeId} isOpen={isOpen} setIsOpen={setIsOpen} />}

        </div>
        
    );
};

export default RecipeListHero;
