
import { useState } from "react";
import { generateRecipe } from "../../../api";
import { auth } from "../../../lib/firebase";
import RecipeCard from "./RecipeCard";

const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "French", "Japanese","Belgian","American"]
const dietaryTags = ["Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo","Veg","Non-Veg","BreakFast","Dinner","Lunch","Dessert","Other"];
const dishTypes = ["Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish","Smoothie"];


const CreateRecipeHero = () => {

    const [ingredients, setIngredients] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedDietaryTag, setSelectedDietaryTag] = useState("");
    const [selectedDishType, setSelectedDishType] = useState(""); 
    const [recipe, setRecipe] = useState(null);
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(false);  // New loading state
    const user = auth.currentUser;

    const handleGenerate = async () => {
        setError(null);
        setLoading(true); // Start loading

        
        if (!user) {
            setError("Please log in first!");
            setLoading(false);
            return;
        }

        // Combine cuisine and dietary tag
        const dietaryPreferences = `${selectedCuisine}${selectedCuisine && selectedDietaryTag ? ", " : ""}${selectedDietaryTag}${selectedDietaryTag && selectedDishType ? ", " : ""}${selectedDishType}`;

        try {
            const data = await generateRecipe(ingredients, dietaryPreferences);
            // console.log("Data from generateRecipe:", data);

            if (!data || !data.recipe) {
                console.error("Invalid data received from API:", data);
                setError("Invalid recipe data received.");
                setLoading(false);
                return;
            }

            setRecipe(data.recipe);
            // console.log("Recipe state:", data.recipe);

        } catch (err) {
            console.error("Error generating recipe:", err);
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

  return (

    <div className="w-full h-full flex-col   items-center justify-center  "> 

        <div className="flex items-end  h-[calc(100vh-80px)] mx-auto px-8 py-16 gap-5 w-fit ">
            <div className="relative w-3xl sm:h-4/5 md:w-4xl h-4/5  flex justify-center items-center  ">
                <img
                src="/kiwi.png"
                alt="Kiwi"
                className="absolute inset-0 md:w-full md:h-full w-lg   object-cover z-0 "
                /> 
            
            <div className="  flex-col absolute inset-0 bg-[#82a060] mix-blend-multiply opacity-90  w-full h-full rounded-3xl self-center justify-self-center backdrop-brightness-90 backdrop-blur-none bg-[url('/kiwi.png')]"></div>
            
            <div className="relative z-20 w-9/10 h-8/10 flex flex-wrap  justify-between items-start bg-opacity-80 md:gap-5 gap-2  ">
                <div className="relative  w-full rounded-2xl flex items-center justify-center text-white h-1/8 potta-one  text-xl sm:text-3xl md:text-4xl ">AI Recipe Generator</div>
 
                <div className="flex flex-wrap items-center justify-around  w-full h-1/8 gap-3 ">
                    <select
                        value={selectedCuisine}
                        onChange={(e) => setSelectedCuisine(e.target.value)}
                        className="relative bg-white border text-[9px] sm:text-xs lg:text-sm w-28 sm:w-42 lg:w-40 xl:w-40 rounded-2xl flex items-center justify-center h-8 font-semibold px-3 focus:outline-none"
                    >
                        <option value="">Select Cuisine</option>
                        {cuisines.map((cuisine) => (
                            <option key={cuisine} value={cuisine}>{cuisine}</option>
                        ))}
                    </select>

                    <select
                        value={selectedDietaryTag}
                        onChange={(e) => setSelectedDietaryTag(e.target.value)}
                        className="relative bg-white border text-[9px] sm:text-xs lg:text-sm w-34 sm:w-42 lg:w-48 rounded-2xl flex items-center justify-center h-8 font-semibold px-3 focus:outline-none"
                    >
                        <option value="">Select Dietary Tag</option>
                        {dietaryTags.map((tag) => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>

                    <select
                        value={selectedDishType}
                        onChange={(e) => setSelectedDishType(e.target.value)}
                        className="relative bg-white border text-[9px] sm:text-xs lg:text-sm w-34 sm:w-42 lg:w-42 rounded-2xl flex items-center justify-center h-8 font-semibold px-3 focus:outline-none"
                    >
                        <option value="">Select Dish Type</option>
                        {dishTypes.map((dish) => (
                            <option key={dish} value={dish}>{dish}</option>
                        ))}
                    </select>   
                </div>


                <div className="flex justify-around  items-center  w-full gap-5 lg:gap-15 pr-5 h-4/8 md:mb-5">
                    <img src="/chef-icon.png" alt="Chef Icon" className={` lg:w-44 md:w-40 w-32  ` } />
                    <input
                        type="text"
                        placeholder="Enter ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="relative bg-white  sm:w-3/4 w-68 rounded-4xl flex items-center justify-center h-28 sm:h-40  md:h-47  font-semibold  border p-5 focus:outline-none ;"
                        style={{ textAlign: "left", verticalAlign: "top" }}
                    />
                </div>

                <div className=" relative w-full flex justify-end items-center pr-5 h-1/8 pb-3">
                    <button   onClick={handleGenerate} className="text-primary font-medium text-xs sm:text-sm md:text-lg text-white w-full md:w-2/3 flex justify-center items-center bg-[#216e40] hover:bg-[#50865b] h-12 rounded-3xl  ">
                        Generate Recipe</button>
                </div>
            </div>


            
        </div>
       
        
        </div>

        {loading && (
              <div className="flex flex-col items-center justify-center w-full mt-5 px-8">
                <div className="flex flex-col items-center justify-center w-full mt-5 px-4 ">
                    <div className="border bg-[#82a060] p-6 rounded-xl w-full max-w-lg flex flex-col justify-center animate-pulse h-1/2 ">
                        <div className=" bg-yellow-100 rounded w-full mb-4 h-64 ">
                        <div className="flex flex-col items-center justify-center border h-full gap-2">
                            <div className="w-5 h-5 border-3 border-[#82a060] border-t-transparent rounded-full animate-spin"></div>
                            <div className="text-xs text-amber-950 animate-pulse">Loading</div>
                        </div>
                        </div>
                        <div className="h-10 bg-gray-300 rounded w-full"></div>
                    </div>
                </div>
              </div>
            )}


        {recipe && user && (

            
            <div className="flex flex-col items-center justify-center w-full mt-5 px-4">
                <div className="border bg-[#82a060] p-5 rounded-xl w-fit max-w-lg flex justify-center">
                    <RecipeCard recipe={recipe} />
                </div>
            </div>
 
        
        )}
     
    </div>
  )
}


export default CreateRecipeHero

