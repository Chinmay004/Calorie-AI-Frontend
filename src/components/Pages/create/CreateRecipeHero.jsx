
// import { useState } from "react";
// import { generateRecipe } from "../../../api";
// import { auth } from "../../../lib/firebase";
// import RecipeCard from "./RecipeCard";

// const cuisines = ["Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"]
// const dietaryTags = ["Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other"];
// const dishTypes = ["Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish", "Smoothie"];


// const CreateRecipeHero = () => {

//     const [ingredients, setIngredients] = useState("");
//     const [selectedCuisine, setSelectedCuisine] = useState("");
//     const [selectedDietaryTag, setSelectedDietaryTag] = useState("");
//     const [selectedDishType, setSelectedDishType] = useState("");
//     const [recipe, setRecipe] = useState(null);
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);  // New loading state
//     const user = auth.currentUser;

//     const handleGenerate = async () => {
//         setError(null);
//         setLoading(true); // Start loading


//         if (!user) {
//             setError("Please log in first!");
//             setLoading(false);
//             return;
//         }

//         // Combine cuisine and dietary tag
//         const dietaryPreferences = `${selectedCuisine}${selectedCuisine && selectedDietaryTag ? ", " : ""}${selectedDietaryTag}${selectedDietaryTag && selectedDishType ? ", " : ""}${selectedDishType}`;

//         try {
//             const data = await generateRecipe(ingredients, dietaryPreferences);
//             // console.log("Data from generateRecipe:", data);

//             if (!data || !data.recipe) {
//                 console.error("Invalid data received from API:", data);
//                 setError("Invalid recipe data received.");
//                 setLoading(false);
//                 return;
//             }

//             setRecipe(data.recipe);
//             // console.log("Recipe state:", data.recipe);

//         } catch (err) {
//             console.error("Error generating recipe:", err);
//             setError("An error occurred. Please try again later.");
//         } finally {
//             setLoading(false); // Stop loading
//         }
//     };

//     return (

//         <div className="w-full h-full flex-col   items-center justify-center   ">

//             <div className="flex items-end  h-[calc(100vh-80px)] mx-auto px-8 py-16 gap-5 w-fit ">
//                 <div className="relative w-3xl sm:h-4/5 md:w-4xl h-4/5  flex justify-center items-center  ">
//                     <img
//                         src="/kiwi.png"
//                         alt="Kiwi"
//                         className="absolute inset-0 md:w-full md:h-full w-lg   object-cover z-0 "
//                     />

//                     <div className="  flex-col absolute inset-0 bg-[#82a060] mix-blend-multiply opacity-90  w-full h-full rounded-3xl self-center justify-self-center backdrop-brightness-90 backdrop-blur-none bg-[url('/kiwi.png')]"></div>

//                     <div className="relative z-20 w-9/10 h-8/10 flex flex-wrap  justify-between items-start bg-opacity-80 md:gap-5 gap-2  ">
//                         <div className="relative  w-full rounded-2xl flex items-center justify-center text-white h-1/8 potta-one  text-xl sm:text-3xl md:text-4xl ">AI Recipe Generator</div>

//                         <div className="flex flex-wrap items-center justify-around  w-full h-1/8 gap-3 ">
//                             <select
//                                 value={selectedCuisine}
//                                 onChange={(e) => setSelectedCuisine(e.target.value)}
//                                 className="relative bg-white border text-[9px] sm:text-xs lg:text-sm w-28 sm:w-42 lg:w-40 xl:w-40 rounded-2xl flex items-center justify-center h-8 font-semibold px-3 focus:outline-none"
//                             >
//                                 <option value="">Select Cuisine</option>
//                                 {cuisines.map((cuisine) => (
//                                     <option key={cuisine} value={cuisine}>{cuisine}</option>
//                                 ))}
//                             </select>

//                             <select
//                                 value={selectedDietaryTag}
//                                 onChange={(e) => setSelectedDietaryTag(e.target.value)}
//                                 className="relative bg-white border text-[9px] sm:text-xs lg:text-sm w-34 sm:w-42 lg:w-48 rounded-2xl flex items-center justify-center h-8 font-semibold px-3 focus:outline-none"
//                             >
//                                 <option value="">Select Dietary Tag</option>
//                                 {dietaryTags.map((tag) => (
//                                     <option key={tag} value={tag}>{tag}</option>
//                                 ))}
//                             </select>

//                             <select
//                                 value={selectedDishType}
//                                 onChange={(e) => setSelectedDishType(e.target.value)}
//                                 className="relative bg-white border text-[9px] sm:text-xs lg:text-sm w-34 sm:w-42 lg:w-42 rounded-2xl flex items-center justify-center h-8 font-semibold px-3 focus:outline-none"
//                             >
//                                 <option value="">Select Dish Type</option>
//                                 {dishTypes.map((dish) => (
//                                     <option key={dish} value={dish}>{dish}</option>
//                                 ))}
//                             </select>
//                         </div>


//                         <div className="flex justify-around  items-center  w-full gap-5 lg:gap-15 pr-5 h-4/8 md:mb-5">
//                             <img src="/chef-icon.png" alt="Chef Icon" className={` lg:w-44 md:w-40 w-32  `} />
//                             <input
//                                 type="text"
//                                 placeholder="Enter ingredients"
//                                 value={ingredients}
//                                 onChange={(e) => setIngredients(e.target.value)}
//                                 className="relative bg-white  sm:w-3/4 w-68 rounded-4xl flex items-center justify-center h-28 sm:h-40  md:h-47  font-semibold  border p-5 focus:outline-none ;"
//                                 style={{ textAlign: "left", verticalAlign: "top" }}
//                             />
//                         </div>

//                         <div className=" relative w-full flex justify-end items-center pr-5 h-1/8 pb-3">
//                             <button onClick={handleGenerate} className="text-primary font-medium text-xs sm:text-sm md:text-lg text-white w-full md:w-2/3 flex justify-center items-center bg-[#216e40] hover:bg-[#50865b] h-12 rounded-3xl  ">
//                                 Generate Recipe</button>
//                         </div>
//                     </div>



//                 </div>


//             </div>

//             {loading && (
//                 <div className="flex flex-col items-center justify-center w-full mt-5 px-8">
//                     <div className="flex flex-col items-center justify-center w-full mt-5 px-4 ">
//                         <div className="border bg-[#82a060] p-6 rounded-xl w-full max-w-lg flex flex-col justify-center animate-pulse h-1/2 ">
//                             <div className=" bg-yellow-100 rounded w-full mb-4 h-64 ">
//                                 <div className="flex flex-col items-center justify-center border h-full gap-2">
//                                     <div className="w-5 h-5 border-3 border-[#82a060] border-t-transparent rounded-full animate-spin"></div>
//                                     <div className="text-xs text-amber-950 animate-pulse">Loading</div>
//                                 </div>
//                             </div>
//                             <div className="h-10 bg-gray-300 rounded w-full"></div>
//                         </div>
//                     </div>
//                 </div>
//             )}


//             {recipe && user && (


//                 <div className="flex flex-col items-center justify-center w-full mt-5 px-4">
//                     <div className="border bg-[#82a060] p-5 rounded-xl w-fit max-w-lg flex justify-center">
//                         <RecipeCard recipe={recipe} />
//                     </div>
//                 </div>


//             )}

//         </div>
//     )
// }


// export default CreateRecipeHero


//version 2 works very great dropping to update it according to new desing
// import { useState } from "react";
// import { generateRecipe } from "../../../api";
// import { auth } from "../../../lib/firebase";
// import RecipeCard from "./RecipeCard";

// const cuisines = [
//     "Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"
// ];
// const dietaryTags = [
//     "Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto",
//     "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other"
// ];
// const dishTypes = [
//     "Appetizer", "Main Course", "Dessert", "Soup", "Salad",
//     "Beverage", "Snack", "Side Dish", "Smoothie"
// ];

// const CreateRecipeHero = () => {
//     const [ingredients, setIngredients] = useState("");
//     const [selectedCuisine, setSelectedCuisine] = useState("");
//     const [selectedDietaryTag, setSelectedDietaryTag] = useState("");
//     const [selectedDishType, setSelectedDishType] = useState("");
//     const [recipe, setRecipe] = useState(null);
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const user = auth.currentUser;

//     const handleGenerate = async () => {
//         setError(null);
//         setLoading(true);
//         if (!user) {
//             setError("Please log in first!");
//             setLoading(false);
//             return;
//         }
//         const dietaryPreferences = `${selectedCuisine}${selectedCuisine && selectedDietaryTag ? ", " : ""}${selectedDietaryTag}${selectedDietaryTag && selectedDishType ? ", " : ""}${selectedDishType}`;
//         try {
//             const data = await generateRecipe(ingredients, dietaryPreferences);
//             if (!data || !data.recipe) {
//                 setError("Invalid recipe data received.");
//                 setLoading(false);
//                 return;
//             }
//             setRecipe(data.recipe);
//         } catch (err) {
//             setError("An error occurred. Please try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-4 md:px-12 bg-[#ebfadb]">
//             <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
//                 <div
//                     className="
//             relative w-full rounded-3xl shadow-lg p-5 sm:p-8 md:p-12
//             flex flex-col gap-4 md:gap-6
//             bg-[url('/kiwi.png')] bg-cover bg-center bg-no-repeat
//             bg-[#82a060]/90
//             overflow-hidden 
//           "
//                     style={{
//                         backgroundBlendMode: "multiply", // Ensures the green mixes with the image
//                     }}
//                 >
//                     <div className="text-white font-bold text-2xl md:text-4xl text-center mb-3 potta-one drop-shadow-lg">
//                         AI Recipe Generator
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
//                         {/* Cuisine */}
//                         <select
//                             value={selectedCuisine}
//                             onChange={e => setSelectedCuisine(e.target.value)}
//                             className="bg-white border text-xs sm:text-sm w-full sm:w-1/3 rounded-2xl p-2 font-semibold focus:outline-none"
//                         >
//                             <option value="">Select Cuisine</option>
//                             {cuisines.map(c => <option key={c} value={c}>{c}</option>)}
//                         </select>
//                         {/* Dietary */}
//                         <select
//                             value={selectedDietaryTag}
//                             onChange={e => setSelectedDietaryTag(e.target.value)}
//                             className="bg-white border text-xs sm:text-sm w-full sm:w-1/3 rounded-2xl p-2 font-semibold focus:outline-none"
//                         >
//                             <option value="">Select Dietary Tag</option>
//                             {dietaryTags.map(t => <option key={t} value={t}>{t}</option>)}
//                         </select>
//                         {/* Dish Type */}
//                         <select
//                             value={selectedDishType}
//                             onChange={e => setSelectedDishType(e.target.value)}
//                             className="bg-white border text-xs sm:text-sm w-full sm:w-1/3 rounded-2xl p-2 font-semibold focus:outline-none"
//                         >
//                             <option value="">Select Dish Type</option>
//                             {dishTypes.map(d => <option key={d} value={d}>{d}</option>)}
//                         </select>
//                     </div>

//                     <div className="flex justify-between gap-3 mt-2">
//                         <img
//                             src="/chef-icon.png"
//                             alt="Chef Icon"
//                             className="w-30 h-30 sm:w-50 sm:h-50 object-contain"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Enter ingredients"
//                             value={ingredients}
//                             onChange={e => setIngredients(e.target.value)}
//                             className="bg-white border rounded-2xl w-2/3 p-3 font-semibold h-32 sm:h-40 text-sm sm:text-base focus:outline-none mt-0 sm:mt-8"
//                             style={{ textAlign: "left", verticalAlign: "top" }}
//                         />
//                     </div>

//                     {error && (
//                         <div className="text-red-500 text-xs md:text-sm mt-1">{error}</div>
//                     )}

//                     <button
//                         onClick={handleGenerate}
//                         className="text-white font-medium text-base mt-2 w-full sm:w-2/3 p-3 bg-[#216e40] hover:bg-[#50865b] rounded-2xl transition-colors flex sm:place-self-end justify-center disabled:opacity-50"
//                         disabled={loading}
//                     >
//                         Generate Recipe
//                     </button>
//                 </div>
//             </div>

//             {/* Loading Spinner */}
//             {loading && (
//                 <div className="flex flex-col items-center w-full mt-5 px-2">
//                     <div className="border bg-[#82a060] p-6 rounded-xl w-full max-w-lg flex flex-col justify-center animate-pulse">
//                         <div className="bg-yellow-100 rounded w-full mb-4 h-40 flex flex-col items-center justify-center border gap-2">
//                             <div className="w-5 h-5 border-4 border-[#82a060] border-t-transparent rounded-full animate-spin"></div>
//                             <div className="text-xs text-amber-950 animate-pulse">Loading</div>
//                         </div>
//                         <div className="h-10 bg-gray-300 rounded w-full"></div>
//                     </div>
//                 </div>
//             )}

//             {/* Generated Recipe Card */}
//             {recipe && user && (
//                 <div className="flex flex-col items-center w-full mt-5 px-2">
//                     <div className="border bg-[#82a060] p-5 rounded-xl w-full max-w-lg flex justify-center">
//                         <RecipeCard recipe={recipe} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CreateRecipeHero;


//updated ai version 1
// import { useState } from "react";
// import { generateRecipe } from "../../../api";
// import { auth } from "../../../lib/firebase";
// import RecipeCard from "./RecipeCard";

// const cuisines = [
//     "Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American",
// ];
// const dietaryTags = [
//     "Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other",
// ];
// const dishTypes = [
//     "Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish", "Smoothie",
// ];

// const CreateRecipeHero = () => {
//     const [ingredients, setIngredients] = useState("");
//     const [selectedCuisine, setSelectedCuisine] = useState("");
//     const [selectedDietaryTag, setSelectedDietaryTag] = useState("");
//     const [selectedDishType, setSelectedDishType] = useState("");
//     const [recipe, setRecipe] = useState(null);
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const user = auth.currentUser;

//     const handleGenerate = async () => {
//         setError(null);
//         setLoading(true);
//         if (!user) {
//             setError("Please log in first!");
//             setLoading(false);
//             return;
//         }
//         const dietaryPreferences = [
//             selectedCuisine,
//             selectedDietaryTag,
//             selectedDishType,
//         ].filter(Boolean).join(", ");
//         try {
//             const data = await generateRecipe(ingredients, dietaryPreferences);
//             if (!data || !data.recipe) {
//                 setError("Invalid recipe data received.");
//                 setLoading(false);
//                 return;
//             }
//             setRecipe(data.recipe);
//         } catch (err) {
//             setError("An error occurred. Please try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-x-clip">
//             {/* Wild modern mesh/radial background */}
//             <div className="fixed inset-0 -z-10">
//                 <svg width="100%" height="100%" viewBox="0 0 1728 1117" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                     <radialGradient id="bg1" cx="50%" cy="40%" r="70%">
//                         <stop offset="0%" stopColor="#b0eeae" stopOpacity="0.7" />
//                         <stop offset="80%" stopColor="#fff" stopOpacity="0" />
//                     </radialGradient>
//                     <ellipse cx="40%" cy="30%" rx="60%" ry="50%" fill="url(#bg1)" />
//                     <ellipse cx="85%" cy="80%" rx="30%" ry="15%" fill="#bee7d5" opacity="0.3" />
//                     <ellipse cx="30%" cy="85%" rx="20%" ry="8%" fill="#e6f9b4" opacity="0.28" />
//                 </svg>
//                 {/* Meshy kiwi underlay */}
//                 <img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-soft-light" src="/kiwi.png" alt="kiwi mesh" />
//             </div>

//             {/* Main "card" */}
//             <div
//                 className="
//         relative w-full max-w-2xl mx-auto
//         animate-crazyFadeUp
//         mt-10 mb-20 sm:mb-0
//       ">
//                 {/* Glowing border */}
//                 <div className="absolute -inset-1 rounded-3xl z-0 pointer-events-none border-0 after:absolute after:inset-0 after:rounded-3xl after:ring-4 after:ring-[#b5ffbb50] after:blur-xl after:animate-animatedGlow"></div>

//                 {/* Glass card */}
//                 <div
//                     className="
//             z-10 relative bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl
//             border border-[#d2faca] px-5 sm:px-10 py-9 flex flex-col gap-8
//             animate-crazyCardPop
//             "
//                     style={{
//                         boxShadow: "0 6px 48px 0 #7efc9840, 0 2px 16px #173e1737",
//                     }}
//                 >
//                     {/* TITLE */}
//                     <div className="flex items-center gap-3 justify-center">
//                         <img
//                             src="/chef-icon.png"
//                             className="w-16 h-16 md:w-20 md:h-20 object-contain select-none inline-block animate-bounceTwist"
//                             alt="Chef"
//                             aria-hidden="true"
//                             style={{ filter: "drop-shadow(0 3px 16px #afe9bbad)" }}
//                         />
//                         <span className="potta-one text-[#216e40] font-bold text-2xl sm:text-4xl tracking-wider !leading-tight drop-shadow-glow animate-glowText">AI Recipe Generator</span>
//                     </div>

//                     {/* SELECTS */}
//                     <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
//                         <FloatLabelInput
//                             label="Cuisine"
//                             value={selectedCuisine}
//                             onChange={setSelectedCuisine}
//                             options={cuisines}
//                         />
//                         <FloatLabelInput
//                             label="Dietary"
//                             value={selectedDietaryTag}
//                             onChange={setSelectedDietaryTag}
//                             options={dietaryTags}
//                         />
//                         <FloatLabelInput
//                             label="Dish Type"
//                             value={selectedDishType}
//                             onChange={setSelectedDishType}
//                             options={dishTypes}
//                         />
//                     </div>

//                     {/* INGREDIENTS */}
//                     <div className="w-full flex flex-col items-center sm:flex-row gap-6">
//                         <div className="hidden sm:block w-20" />
//                         <div className="relative w-full">
//                             <textarea
//                                 value={ingredients}
//                                 onChange={e => setIngredients(e.target.value)}
//                                 spellCheck={false}
//                                 className="peer bg-white/70 border border-[#bae6bd] text-[#216e40] rounded-2xl px-6 py-4 w-full font-semibold text-base min-h-[60px] max-h-40 shadow-md focus:outline-none focus:ring-2 focus:ring-[#216e40] transition"
//                                 id="ingredients"
//                                 placeholder=" "
//                                 aria-label="Enter ingredients"
//                             />
//                             <label
//                                 htmlFor="ingredients"
//                                 className="pointer-events-none absolute left-7 top-1.5 text-[#6cd69a] font-semibold text-sm peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a6e5c5] transition-all"
//                             >Ingredients</label>
//                         </div>
//                     </div>

//                     {/* ERROR */}
//                     {!!error && (
//                         <div className="rounded-xl bg-[#fbd9d9] text-[#ba2626] py-2 px-5 text-sm font-semibold animate-wiggle">
//                             {error}
//                         </div>
//                     )}

//                     {/* BUTTON */}
//                     <button
//                         className="w-full py-3 rounded-3xl bg-gradient-to-br from-[#216e40] via-[#49ba7c] to-[#80e499] shadow-md text-white font-bold text-lg relative overflow-hidden select-none focus:outline-none focus:ring-4 focus:ring-[#baedcd] group transition-all"
//                         style={{ letterSpacing: "0.04em" }}
//                         onClick={handleGenerate}
//                         disabled={loading}
//                     >
//                         <span className="relative z-10">
//                             {loading ? (
//                                 <span className="flex gap-2 items-center animate-crazyPulse">
//                                     <span className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
//                                     Generating...
//                                 </span>
//                             ) : (
//                                 <span>Generate Recipe</span>
//                             )}
//                         </span>
//                         <span
//                             className="absolute left-0 top-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/40 to-white/0 pointer-events-none blur-md opacity-0 group-hover:opacity-70 transition-all duration-700 animate-glossGlow"
//                         />
//                     </button>
//                 </div>
//             </div>

//             {/* Show generated recipe */}
//             {recipe && user && (
//                 <div className="flex flex-col items-center w-full mt-12 px-2 animate-crazyFadeUp">
//                     <div className="border-2 border-[#216e40] bg-[#fff]/70 rounded-3xl max-w-lg w-full p-6 shadow-lg animate-crazyFadeUp" style={{ animationDelay: '0.15s' }}>
//                         <RecipeCard recipe={recipe} />
//                     </div>
//                 </div>
//             )}

//             {/* Animations */}
//             <style>{`
//         /* Card fade/slide in */
//         @keyframes crazyFadeUp {
//           0% { opacity: 0; transform: translateY(64px) scale(0.98); }
//           70% { opacity: 1; }
//           100% { opacity: 1; transform: none; }
//         }
//         .animate-crazyFadeUp { animation: crazyFadeUp 0.7s cubic-bezier(.37,1.07,.68,.92) both; }
//         .animate-crazyCardPop { animation: crazyFadeUp 1.1s cubic-bezier(.41,.25,.43,1.3) both; }

//         /* button gloss on hover */
//         @keyframes glossGlow {
//           0% { opacity:0; }
//           100% { opacity: 0.7; }
//         }
//         .animate-glossGlow { transition: opacity 1s; }

//         /* Button pulsate */
//         @keyframes crazyPulse {
//           0%,100% { opacity:1; }
//           50% { opacity:.4; }
//         }
//         .animate-crazyPulse { animation: crazyPulse .9s infinite; }

//         /* Error wiggle */
//         @keyframes wiggle {
//           0%, 100% { transform: translateX(0); }
//           15% { transform: translateX(-2px); }
//           30% { transform: translateX(3px); }
//           45% { transform: translateX(-4px); }
//           60% { transform: translateX(2px);}
//           75% { transform: translateX(-1px);}
//         }
//         .animate-wiggle { animation: wiggle .35s linear; }

//         /* Animated chef icon bounce and twist */
//         @keyframes chef-bounceTwist {
//           0%,100% { transform: translateY(0) rotate(-7deg);}
//           49% { transform:translateY(-10px) rotate(15deg);}
//           59% { transform:translateY(-7px) rotate(9deg);}
//           68% { transform:translateY(-6px) rotate(-6deg);}
//           83% { transform:translateY(-3px) rotate(-15deg);}
//         }
//         .animate-bounceTwist { animation: chef-bounceTwist 2.3s infinite; }

//         /* Card border animated glow */
//         @keyframes animatedGlow {
//           0% { box-shadow: 0 0 34px 0 #caffcb44, 0 0 17px #18c75227;}
//           50% { box-shadow: 0 0 53px 3px #47dc67aa, 0 0 40px #8cfed3;}
//           100% { box-shadow: 0 0 34px 0 #caffcb44, 0 0 17px #18c75227;}
//         }
//         .after\\:animate-animatedGlow::after { animation: animatedGlow 2.6s infinite both;}
//         /* Modern glowing heading */
//         .animate-glowText { text-shadow: 0 2px 12px #aaeecd,0 0 24px #b4fadbad; }

//         /* Responsive float label (modern form) */
//       `}</style>
//         </div>
//     );
// }

// // --- Animated floating-label select ---
// function FloatLabelInput({ label, value, onChange, options }) {
//     return (
//         <div className="relative w-full sm:w-auto flex-1 min-w-[120px]">
//             <select
//                 value={value}
//                 onChange={e => onChange(e.target.value)}
//                 className="peer block appearance-none w-full bg-white/80 border border-[#bae6bd] text-[#216e40] rounded-2xl py-4 px-5 font-semibold text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#216e40] focus:ring-offset-1 transition"
//                 id={label}
//             >
//                 <option value="">{label}</option>
//                 {options.map(opt => (
//                     <option key={opt} value={opt}>{opt}</option>
//                 ))}
//             </select>
//             <label
//                 htmlFor={label}
//                 className="absolute left-6 -top-3 px-1 pointer-events-none text-xs bg-white/70 text-[#3fc34c] font-bold transition-all scale-90 peer-focus:scale-100 peer-focus:text-[#216e40] peer-focus:-top-5"
//                 style={{ zIndex: 2 }}
//             >
//                 {label}
//             </label>
//         </div>
//     );
// }

// export default CreateRecipeHero;


// //ai version # works great
// import { useState } from "react";
// import { generateRecipe } from "../../../api";
// import { auth } from "../../../lib/firebase";
// import RecipeCard from "./RecipeCard";

// const cuisines = [
//     "Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American"
// ];
// const dietaryTags = [
//     "Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg",
//     "BreakFast", "Dinner", "Lunch", "Dessert", "Other"
// ];
// const dishTypes = [
//     "Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish",
//     "Smoothie"
// ];

// const CreateRecipeHero = () => {
//     const [ingredients, setIngredients] = useState("");
//     const [selectedCuisine, setSelectedCuisine] = useState("");
//     const [selectedDietaryTag, setSelectedDietaryTag] = useState("");
//     const [selectedDishType, setSelectedDishType] = useState("");
//     const [recipe, setRecipe] = useState(null);
//     const [error, setError] = useState("");
//     const [loading, setLoading] = useState(false);
//     const user = auth.currentUser;

//     const handleGenerate = async () => {
//         setError(null);
//         setLoading(true);
//         if (!user) {
//             setError("Please log in first!");
//             setLoading(false);
//             return;
//         }
//         const dietaryPreferences = [
//             selectedCuisine, selectedDietaryTag, selectedDishType
//         ].filter(Boolean).join(", ");
//         try {
//             const data = await generateRecipe(ingredients, dietaryPreferences);
//             if (!data || !data.recipe) {
//                 setError("Invalid recipe data received.");
//                 setLoading(false);
//                 return;
//             }
//             setRecipe(data.recipe);
//         } catch (err) {
//             setError("An error occurred. Please try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-[#eaf9d1]">
//             {/* Hero mesh & grid-dot bg */}
//             <div className="absolute inset-0 -z-10">
//                 {/* Blend your theme with mesh and grid dots */}
//                 <svg className="absolute w-full h-full pointer-events-none" style={{ mixBlendMode: 'multiply' }} width="100%" height="100%">
//                     <defs>
//                         <radialGradient id="meshKiwi" cx="50%" cy="40%" r="60%">
//                             <stop offset="0%" stopColor="#c5ec87" stopOpacity="0.7" />
//                             <stop offset="80%" stopColor="#eaf9d1" stopOpacity="0" />
//                         </radialGradient>
//                         <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
//                             <circle cx="8" cy="8" r="1.5" fill="#bddd85" opacity="0.18" />
//                         </pattern>
//                     </defs>
//                     <rect width="100%" height="100%" fill="url(#meshKiwi)" />
//                     <rect width="100%" height="100%" fill="url(#dots)" />
//                 </svg>
//                 <img src="/kiwi.png"
//                     className="absolute left-1/2 top-3/4 w-[900px] sm:w-[600px] opacity-40 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2"
//                     style={{ filter: "blur(16px)" }}
//                     alt="" />
//             </div>

//             {/* Carousel ticket-style CARD */}
//             <div
//                 className={`
//           w-full max-w-lg mx-auto animate-cardPop relative py-0
//           flex flex-col items-center group
//         `}
//             >
//                 {/* Card slice/edge effects */}
//                 <div className="
//           absolute left-0 top-[-30px] w-full h-[40px] z-10 pointer-events-none
//           [clip-path:polygon(0_100%,100%_0,100%_100%)] bg-[#82a060]/80 blur-[2.5px]
//         " />
//                 <div className="
//           absolute left-0 bottom-[-30px] w-full h-[40px] z-10 pointer-events-none
//           [clip-path:polygon(0_0,100%_0,100%_50%,0_100%)] bg-[#82a060]/80 blur-[2.5px]
//         " />
//                 {/* Glowing boundary */}
//                 <div className="absolute -inset-1 rounded-[2rem] z-0 pointer-events-none border-0 after:absolute after:inset-0 after:rounded-[2rem] after:ring-4 after:ring-[#c3fda7aa] after:blur-lg after:animate-ticketGlow"></div>

//                 {/* Main glass “card” */}
//                 <div className="
//           relative w-full bg-white/80 backdrop-blur-2xl flex flex-col items-center
//           rounded-[2rem] border-2 border-[#d8efb9] shadow-hero
//           px-7 py-8 sm:py-12 gap-7
//           before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:to-[#cae79b22] before:p-1 before:rounded-[2rem] before:z-0 overflow-hidden
//          ">
//                     <div className="relative flex w-full justify-center items-center mb-2 z-10">
//                         <img
//                             src="/chef-icon.png"
//                             alt="Chef Icon"
//                             className="w-14 sm:w-20 drop-shadow-[0_2px_12px_#bae7a9] z-10 animate-floatChef"
//                         />
//                         <h1 className="flex-1 text-center text-[#216e40] potta-one font-bold text-2xl sm:text-4xl px-3 leading-tight tracking-widest select-none animate-glowText">AI Recipe Generator</h1>
//                     </div>
//                     {/* Selects row */}
//                     <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
//                         <FloatLabelSelect
//                             label="Cuisine"
//                             value={selectedCuisine}
//                             onChange={setSelectedCuisine}
//                             options={cuisines}
//                         />
//                         <FloatLabelSelect
//                             label="Dietary"
//                             value={selectedDietaryTag}
//                             onChange={setSelectedDietaryTag}
//                             options={dietaryTags}
//                         />
//                         <FloatLabelSelect
//                             label="Dish"
//                             value={selectedDishType}
//                             onChange={setSelectedDishType}
//                             options={dishTypes}
//                         />
//                     </div>
//                     {/* Ingredients textarea */}
//                     <div className="relative w-full">
//                         <textarea
//                             id="ingredientBox"
//                             value={ingredients}
//                             onChange={e => setIngredients(e.target.value)}
//                             className="peer resize-y bg-white/80 border-2 border-[#c4e792] text-[#216e40] font-semibold px-6 py-4 rounded-2xl w-full text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-[#216e40] transition"
//                             placeholder=" "
//                             aria-label="Ingredients"
//                             spellCheck={false}
//                             maxLength={320}
//                         />
//                         <label htmlFor="ingredientBox"
//                             className="
//                 pointer-events-none absolute left-7 top-1.5 text-[#70c985] font-extrabold text-base peer-placeholder-shown:top-4
//                 peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold
//                 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#bce9c7]
//                 transition-all duration-300
//               ">Ingredients</label>
//                     </div>
//                     {/* Error message */}
//                     {error && (
//                         <div className="rounded-xl bg-[#f6e9eb] text-[#e34242] py-2 px-5 font-semibold text-center animate-wiggle">{error}</div>
//                     )}
//                     {/* Animated Button */}
//                     <button
//                         onClick={handleGenerate}
//                         disabled={loading}
//                         className="
//               w-full py-3 mt-1 bg-gradient-to-r from-[#216e40] via-[#6fea97] to-[#d6eba0] text-white font-bold
//               rounded-[1.6rem] shadow-md group relative overflow-hidden
//               focus:outline-none focus:ring-4 focus:ring-[#c6ffb7] focus:ring-offset-2 select-none
//               transition transform active:scale-[0.98] hover:ring-2 hover:ring-[#d8efb9]
//               after:absolute after:left-[-80%] after:top-0 after:w-[70%] after:h-full after:bg-white/50 after:rotate-[-15deg] after:pointer-events-none after:opacity-0 group-hover:after:opacity-60 group-hover:after:left-[120%] after:transition-all after:duration-[1100ms] animate-ticketBtn"
//                     >
//                         <span className="relative z-10 flex items-center justify-center gap-2">
//                             {loading ? (
//                                 <>
//                                     <span className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
//                                     Generating...
//                                 </>
//                             ) : (
//                                 <>Generate Recipe</>
//                             )}
//                         </span>
//                     </button>
//                 </div>
//             </div>
//             {/* Loaded output - RecipeCard */}
//             {recipe && user && (
//                 <div className="flex flex-col items-center w-full mt-10 px-4 animate-cardPop">
//                     <div className="border-2 border-[#8cd753] bg-[#eaffeb]/95 rounded-3xl max-w-lg w-full p-8 shadow-xl">
//                         <RecipeCard recipe={recipe} />
//                     </div>
//                 </div>
//             )}

//             {/* Keyframes/Extra style */}
//             <style>{`
//         @keyframes cardPop {
//           0% { opacity:0; transform: translateY(70px) scale(.98);}
//           65% {opacity:1;}
//           100% {opacity:1; transform:none;}
//         }
//         .animate-cardPop { animation: cardPop 0.6s cubic-bezier(.38,.87,.57,1.12) both }
//         @keyframes floatChef {
//           0%,98%,100% { transform: translateY(0) scale(1);}
//           48% {transform:translateY(-12px) scale(1.13) rotate(3deg);}
//           65% {transform:translateY(-7px) scale(.95);}
//         }
//         .animate-floatChef { animation: floatChef 2.9s infinite; }
//         @keyframes ticketGlow {
//           0% { box-shadow: 0 0 26px 0 #e3ffb944, 0 0 9px #b9ffb522;}
//           60% { box-shadow: 0 0 60px 20px #d0eca6bb; }
//           100% { box-shadow: 0 0 26px 0 #e3ffb944, 0 0 9px #b9ffb522;}
//         }
//         .after\\:animate-ticketGlow::after { animation: ticketGlow 2.6s infinite both;}
//         @keyframes ticketBtn {
//           0%,85% {box-shadow: 0 1.5px 18px #add78555;}
//           45% {box-shadow:0 5px 50px #e5ffba20;}
//           100% {box-shadow:0 4.5px 12px #bbffda70;}
//         }
//         .animate-ticketBtn { animation: ticketBtn 1.8s infinite }
//         .animate-glowText { text-shadow: 0 4px 46px #b8ffcbd0, 0 2px 14px #cde29799;}
//         .shadow-hero { box-shadow: 0 12px 80px 0 #80f09e33, 0 2px 16px #71f1b274;}
//         @keyframes wiggle {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px);}
//           50% { transform: translateX(6px);}
//           75% { transform: translateX(-2.5px);}
//         }
//         .animate-wiggle { animation: wiggle .33s linear; }
//       `}</style>
//         </div>
//     );
// };

// // Modern floating label select
// function FloatLabelSelect({ label, value, onChange, options }) {
//     return (
//         <div className="relative w-full sm:w-auto flex-1 min-w-[108px]">
//             <select
//                 value={value}
//                 onChange={e => onChange(e.target.value)}
//                 className="
//           peer appearance-none w-full bg-white/60 border-2 border-[#b0de9a] text-[#216e40]
//           rounded-2xl py-4 px-4 font-semibold text-sm shadow-md focus:outline-none
//           focus:ring-2 focus:ring-[#216e40] focus:ring-offset-1 transition
//         "
//                 id={label}
//             >
//                 <option value="">{label}</option>
//                 {options.map(opt => (
//                     <option key={opt} value={opt}>{opt}</option>
//                 ))}
//             </select>
//             <label
//                 htmlFor={label}
//                 className="absolute left-4 -top-3 px-1 pointer-events-none text-xs bg-white/80 text-[#6cd69a] font-bold transition-all scale-90 peer-focus:scale-100 peer-focus:text-[#216e40] peer-focus:-top-5"
//                 style={{ zIndex: 2 }}
//             >{label}</label>
//         </div>
//     );
// }

// export default CreateRecipeHero;
import { useState } from "react";
import { generateRecipe } from "../../../api";
import { auth } from "../../../lib/firebase";
import RecipeCard from "./RecipeCard";

const cuisines = [
    "Italian", "Mexican", "Indian", "Chinese", "French", "Japanese", "Belgian", "American",
];
const dietaryTags = [
    "Vegan", "Gluten-Free", "High-Protein", "Low-Carb", "Keto", "Paleo", "Veg", "Non-Veg", "BreakFast", "Dinner", "Lunch", "Dessert", "Other"
];
const dishTypes = [
    "Appetizer", "Main Course", "Dessert", "Soup", "Salad", "Beverage", "Snack", "Side Dish", "Smoothie"
];

// Main very dark green (deep emerald), mint accent, very pale green for contrast
const CARD_BG = "#183928";
const CARD_BG_OPACITY = "bg-[#183928]/96";
const ACCENT_RING = "#a2f7c2";
const TXT_MAIN = "text-[#f8fff9]";
const TXT_ACCENT = "text-[#a2f7c2]";
const BTN_GRAD = "from-[#a2f7c2] via-[#79e6c0] to-[#348e6b]";
const BTN_TXT = "text-[#183928]";

const CreateRecipeHero = () => {
    const [ingredients, setIngredients] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("");
    const [selectedDietaryTag, setSelectedDietaryTag] = useState("");
    const [selectedDishType, setSelectedDishType] = useState("");
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const user = auth.currentUser;

    const handleGenerate = async () => {
        setError(null);
        setLoading(true);
        if (!user) {
            setError("Please log in first!");
            setLoading(false);
            return;
        }
        const dietaryPreferences = [
            selectedCuisine, selectedDietaryTag, selectedDishType
        ].filter(Boolean).join(", ");
        try {
            const data = await generateRecipe(ingredients, dietaryPreferences);
            if (!data || !data.recipe) {
                setError("Invalid recipe data received.");
                setLoading(false);
                return;
            }
            setRecipe(data.recipe);
        } catch (err) {
            setError("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-gradient-to-b from-[#f2f8ef] via-[#ebfadb] to-[#e4faea]">
            {/* Soft mesh/dot bg */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <svg className="w-full h-full absolute" style={{ mixBlendMode: 'multiply' }} width="100%" height="100%">
                    <defs>
                        <radialGradient id="meshBg" cx="45%" cy="32%" r="58%">
                            <stop offset="0%" stopColor="#a0eec7" stopOpacity="0.15" />
                            <stop offset="75%" stopColor="#ebfadb" stopOpacity="0" />
                        </radialGradient>
                        <pattern id="dots" width="36" height="36" patternUnits="userSpaceOnUse">
                            <circle cx="8" cy="8" r="2" fill="#bee4ce" opacity="0.08" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#meshBg)" />
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
                <img src="/kiwi.png"
                    className="absolute left-1/2 top-2/3 w-[500px] sm:w-[350px] opacity-15 z-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-[1.5px]"
                    alt=""
                />
            </div>
            {/* Main Card */}
            <div className="w-full max-w-lg mx-auto animate-cardPop relative">
                {/* Subtle border ring (finish is gentle, not glowy) */}
                <div
                    className="absolute -inset-1 rounded-[2rem] pointer-events-none z-0 after:absolute after:inset-0 after:rounded-[2rem] after:ring after:ring-[#a2f7c2]/35 after:blur after:opacity-70"
                />

                <div className={`
          relative w-full ${CARD_BG_OPACITY} backdrop-blur-2xl backdrop-saturate-150
          rounded-[2rem] shadow-2xl border border-[#a2f7c2]/30 flex flex-col items-center px-7 py-8 sm:py-10 gap-7 overflow-hidden
        `}>
                    <div className="relative flex w-full justify-center items-center mb-2 z-10">
                        <img
                            src="/chef-icon.png"
                            alt="Chef Icon"
                            className="w-14 sm:w-20 drop-shadow-[0_2px_10px_#87eec1a0] z-10"
                        />
                        <h1 className={`flex-1 text-center potta-one font-bold text-2xl sm:text-4xl px-3 leading-tight tracking-widest select-none ${TXT_ACCENT} drop-shadow`}>AI Recipe Generator</h1>
                    </div>
                    {/* Selects */}
                    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
                        <FloatLabelSelect
                            label="Cuisine"
                            value={selectedCuisine}
                            onChange={setSelectedCuisine}
                            options={cuisines}
                        />
                        <FloatLabelSelect
                            label="Dietary"
                            value={selectedDietaryTag}
                            onChange={setSelectedDietaryTag}
                            options={dietaryTags}
                        />
                        <FloatLabelSelect
                            label="Dish"
                            value={selectedDishType}
                            onChange={setSelectedDishType}
                            options={dishTypes}
                        />
                    </div>
                    {/* Ingredients */}
                    <div className="relative w-full">
                        <textarea
                            id="ingredientBox"
                            value={ingredients}
                            onChange={e => setIngredients(e.target.value)}
                            className="peer resize-y bg-[#22342a]/70 border border-[#a2f7c2]/30 text-[#f8fff9] placeholder:text-[#b3eeda] font-semibold px-6 py-4 rounded-2xl w-full text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-[#a2f7c2] focus:ring-offset-1 transition backdrop-blur"
                            placeholder=" "
                            aria-label="Ingredients"
                            spellCheck={false}
                            maxLength={320}
                        />
                        <label htmlFor="ingredientBox"
                            className="pointer-events-none absolute left-7 top-1.5 text-[#a2f7c2] font-extrabold text-base peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold peer-placeholder-shown:text-base peer-placeholder-shown:text-[#bbefd0] transition-all duration-300"
                        >Ingredients</label>
                    </div>
                    {/* Error message */}
                    {error && (
                        <div className="rounded-xl bg-[#273326dd] text-[#ff99a4] py-2 px-5 font-semibold text-center animate-wiggle">{error}</div>
                    )}
                    {/* Button */}
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className={`w-full py-3 mt-1 bg-gradient-to-r ${BTN_GRAD} ${BTN_TXT} font-bold rounded-[1.5rem] shadow-md group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#a2f7c2]/30 transition transform active:scale-[0.98] hover:ring-2 hover:ring-[#a2f7c2]/50`}
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Generating...
                                </>
                            ) : (
                                <>Generate Recipe</>
                            )}
                        </span>
                    </button>
                </div>
            </div>
            {/* Loaded output - RecipeCard */}
            {recipe && user && (
                <div className="flex flex-col items-center w-full mt-10 px-4 animate-cardPop">
                    <div className="border-2 border-[#6bd7a2]/80 bg-[#1a3122]/90 backdrop-blur-xl rounded-3xl max-w-lg w-full p-8 shadow-xl">
                        <RecipeCard recipe={recipe} />
                    </div>
                </div>
            )}
            <style>{`
        @keyframes cardPop {
          0% { opacity:0; transform: translateY(60px) scale(.94);}
          65% {opacity:1;}
          100% {opacity:1; transform:none;}
        }
        .animate-cardPop { animation: cardPop 0.7s cubic-bezier(.37,1.02,.77,.9) both }
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px);}
          50% { transform: translateX(4px);}
          75% { transform: translateX(-2px);}
        }
        .animate-wiggle { animation: wiggle .33s linear; }
        .after\\:animate-fadeGlow::after { animation: fadeGlow 6s infinite both;}
        @keyframes fadeGlow {
          0%,100% { box-shadow: 0 0 8px 0 #a2f7c233;}
          50% { box-shadow: 0 0 16px 2px #b4ffe0a0;}
        }
      `}</style>
        </div>
    );
};

function FloatLabelSelect({ label, value, onChange, options }) {
    return (
        <div className="relative w-full sm:w-auto flex-1 min-w-[108px]">
            <select
                value={value}
                onChange={e => onChange(e.target.value)}
                className="peer appearance-none w-full bg-[#294939]/85 border border-[#a2f7c2]/30 text-[#f1fff6] rounded-2xl py-4 px-4 font-semibold text-xs sm:text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#a2f7c2] focus:ring-offset-1 transition backdrop-blur"
                id={label}
            >
                <option value="">{label}</option>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
            <label
                htmlFor={label}
                className="absolute left-4 -top-3 px-1 pointer-events-none text-xs bg-[#22342a]/70 text-[#a2f7c2] font-bold transition-all scale-90 peer-focus:scale-100 peer-focus:text-[#e2fff5] peer-focus:-top-5"
                style={{ zIndex: 2 }}
            >{label}</label>
        </div>
    );
}

export default CreateRecipeHero;
