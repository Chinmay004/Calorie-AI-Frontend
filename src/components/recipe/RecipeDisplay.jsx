// import LikeButton from "./LikeButton";
// import ShareButton from "./ShareButton";
// import { getAuth } from "firebase/auth";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL;

// const RecipeDisplay = ({ recipe }) => {
//     const auth = getAuth();
//     const userId = auth.currentUser ? auth.currentUser.uid : null;

//     return (

//         <div className="w-full h-fit flex-col bg-[url('/kiwiWall.png')] bg-repeat lg:bg-[length:50%_25%] sm:bg-[length:50%_10%] bg-[length:80%_10%] items-center justify-center py-20 sm:mt-20 ">

//             <div className=" inset-0 bg-[#82a060]   opacity-95  w-full sm:w-10/12 h-fit sm:border-4 rounded-3xl self-center justify-self-center backdrop-brightness-90 backdrop-blur-none  sm:scale-[1] md:scale-[1] lg:scale-[1] xl:scale-[1]">

//                 <div className="container xl:p-15  my-15 w-full sm:w-8/9 flex-wrap justify-self-center sm:border  bg-white opacity-95 rounded-xl   ">

//                     <div className=" text-md underline  black text-[#82a060] hover:text-green-900"> <Link to="/recipes2" className="  ">
//                         ←Back to Discover
//                     </Link></div>


//                     <div className=" sm:border sm:border-b-0 md:border-r-1 border-r-0 flex w-fit sm:w-full  justify-center items-center p-3">
//                         <div className=" flex flex-col md:flex-row justify-around  w-fit sm:w-full items-center gap-5">
//                             <h2 className=" md:text-xl lg:text-2xl xl:text-3xl font-semibold  w-fit sm:w-full text-center potta-one text-[#196832] ">{recipe.title}</h2>
//                             <div className="flex gap-5">
//                                 <LikeButton recipeId={recipe._id} userId={userId} />

//                                 <ShareButton recipeId={recipe._id} />
//                             </div>

//                         </div>


//                     </div>

//                     {/* Image Display Logic */}
//                     <div className="md:flex-row flex flex-col sm:border sm:border-y-0">

//                         {/* <div className="flex-row flex  border border-y-0"> */}
//                         <div className="  flex flex-col   p-4  w-fit  ">
//                             {recipe.image && (
//                                 <div className="   flex-col  rounded-md border   mb-10 ">
//                                     {Array.isArray(recipe.image) ? (
//                                         recipe.image.map((imageFilename, index) => {
//                                             const sanitizedFilename = imageFilename.replace(/[^a-zA-Z0-9.-]+/g, '-');
//                                             // const imageUrl = `${API_URL}/generated_images/${sanitizedFilename}`;
//                                             const imageUrl = `https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image[0]}`;
//                                             return (
//                                                 <img
//                                                     key={index}
//                                                     src={imageUrl}
//                                                     alt={recipe.title}
//                                                     className=" rounded-t-md w-full size-fit"
//                                                     onError={(e) => {
//                                                         console.error(`Error loading image ${sanitizedFilename}:`, e);
//                                                         e.target.onerror = null;
//                                                         e.target.src = "/placeholder_image.png";
//                                                     }}
//                                                 />
//                                             );
//                                         })
//                                     ) : (
//                                         <img
//                                             src={`https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image[0].replace(

//                                                 /[^a-zA-Z0-9.-]+/g,
//                                                 "-"
//                                             )}`}
//                                             alt={recipe.title}
//                                             className="max-w-full h-auto rounded"
//                                             onError={(e) => {
//                                                 console.error(`Error loading image ${recipe.image}:`, e);
//                                                 e.target.onerror = null;
//                                                 e.target.src = "/placeholder_image.png";
//                                             }}
//                                         />
//                                     )}
//                                     <div className="w-full border-t-0  ">
//                                         <p className="  bg-[#F5EDF7] rounded-t-0 rounded-b-md p-4 flex grow w-full lg:text-md md:text-sm  sm:text-md  text-xs">{recipe.description}</p>
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="mb-4 border bg-[#E9EDC9] rounded-md p-4 grow">
//                                 <h4 className="font-bold mb-5 text-xl ">Ingredients</h4>
//                                 <ul className="list-disc ml-6 space-y-5 ">
//                                     {recipe.ingredients.map((ingredient, index) => (
//                                         <div key={index}>
//                                             <li className="lg:text-md md:text-sm  sm:text-md  text-xs" key={index}>{ingredient.name} - {ingredient.amount}</li>
//                                             {index !== recipe.ingredients.length - 1 && <hr className="my-2 border-gray-500" />}
//                                         </div>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>



//                         <div className="flex flex-col  gap-4 p-4   w-full">


//                             <div className="mb-4 border bg-[#ECF9FF] rounded-md p-4 flex-col w-full grow  ">
//                                 <h4 className="font-bold mb-8  text-xl ">Nutrition</h4>
//                                 <div className="mt-2 space-y-5 lg:text-md md:text-sm  sm:text-md  text-xs">
//                                     {[
//                                         `Calories: ${recipe.nutrition.calories} kcal`,
//                                         `Protein: ${recipe.nutrition.protein} g`,
//                                         `Carbs: ${recipe.nutrition.carbs} g`,
//                                         `Fats: ${recipe.nutrition.fats} g`,
//                                         recipe.nutrition.vitamins && `${recipe.nutrition.vitamins}`,
//                                     ]
//                                         .filter(Boolean)
//                                         .map((item, index, array) => (
//                                             <div key={index}>
//                                                 <p>{item}</p>
//                                                 {index !== array.length - 1 && <hr className="my-2 border-gray-500" />}
//                                             </div>
//                                         ))}
//                                 </div>

//                             </div>

//                             <div className="mb-4 border bg-[#FFFBE9] rounded-md p-4 w-full grow ">
//                                 <h4 className="font-bold mb-5 text-xl ">Steps</h4>
//                                 <ol className="list-decimal ml-6 space-y-4">
//                                     {recipe.steps.map((step, index) => (
//                                         <div key={index}>
//                                             <li className="lg:text-md md:text-sm  sm:text-md  text-xs" key={index}>{step}</li>
//                                             {index !== recipe.steps.length - 1 && <hr className="my-2 border-gray-500" />}

//                                         </div>
//                                     ))}
//                                 </ol>
//                             </div>
//                         </div>


//                     </div>



//                     {/* Tags */}
//                     <div className="lg:flex-row flex flex-col gap-4 pb-4 w-full  sm:border sm:border-y-0">
//                         <div className="border bg-[#FFF8F3] rounded-md p-4 w-full flex gap-4 border-l-0 lg:text-md md:text-sm  sm:text-md  text-xs" >
//                             <h4 className="font-bold ">Tags : </h4>
//                             <p > Meal Type: {recipe.tags.mealType}</p>
//                             <p >Cuisine: {recipe.tags.cuisine}</p>
//                             {recipe.tags.extra.length > 0 && (
//                                 <div>
//                                     <p>Extra Tags: {recipe.tags.extra.join(", ")}</p>
//                                 </div>
//                             )}
//                         </div>
//                         <div className=" border bg-[#FFF8F3] rounded-md p-4 w-full flex gap-5 border-r-0 lg:text-md md:text-sm  sm:text-md  text-xs">
//                             <h4 className="font-bold">Recipe ID:</h4>
//                             <p>{recipe._id}</p>
//                         </div>
//                     </div>

//                     <div className="border bg-[#F5E9FF] rounded-md p-4 w-full flex gap-5 lg:text-md md:text-sm  sm:text-md  text-xs">
//                         <span className="font-semibold"> NOTE: This recipe is AI-Generated And Calorie AI has not verified it for accuracy or safety. It may contain errors. Always use your best judgement when making AI Generated Dishes</span>
//                     </div>

//                 </div>
//             </div>
//         </div>

//     );
// };

// RecipeDisplay.propTypes = {
//     recipe: PropTypes.shape({
//         _id: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string,
//         image: PropTypes.oneOfType([
//             PropTypes.string,
//             PropTypes.arrayOf(PropTypes.string),
//         ]),
//         ingredients: PropTypes.arrayOf(
//             PropTypes.shape({
//                 name: PropTypes.string.isRequired,
//                 amount: PropTypes.string.isRequired,
//             })
//         ).isRequired,
//         nutrition: PropTypes.shape({
//             calories: PropTypes.number,
//             protein: PropTypes.number,
//             carbs: PropTypes.number,
//             fats: PropTypes.number,
//             vitamins: PropTypes.string,
//         }).isRequired,
//         steps: PropTypes.arrayOf(PropTypes.string).isRequired,
//         tags: PropTypes.shape({
//             mealType: PropTypes.string,
//             cuisine: PropTypes.string,
//             extra: PropTypes.arrayOf(PropTypes.string),
//         }).isRequired,
//     }).isRequired,
// };


// export default RecipeDisplay;



import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import { getAuth } from "firebase/auth";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const shimmerKeyframes = `
@keyframes shimmer {
  100% {
    background-position: 100% 0;
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
`;

const RecipeDisplay = ({ recipe }) => {
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    // Helper for tags
    const Tag = ({ children }) => (
        <span className="inline-block shadow-sm bg-gradient-to-r from-green-200 via-yellow-100 to-pink-200 border border-yellow-300 rounded-full px-3 py-1 text-xs font-bold text-[#218e57] tracking-wider mr-2 animate-in fade-in transition-all  ">{children}</span>
    );

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffa0cf]/20 via-[#eeffec]/60 to-[#bad4ff]/30 py-20 px-2 relative">
            {/* Shimmer and fade animations */}
            <style>{shimmerKeyframes}</style>

            {/* Centered glassmorphic Card */}
            <div
                className="relative w-full max-w-4xl mx-auto
        rounded-3xl shadow-2xl border-2 border-white/40 p-0 overflow-x-hidden
        flex flex-col
        before:content-[''] before:absolute before:inset-0 before:bg-[url('/kiwiWall.png')] before:bg-repeat before:opacity-30 before:-z-10
        after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#80c99d]/80 after:via-white/40 after:to-[#ffc6e0]/40 after:backdrop-blur-sm after:rounded-3xl after:-z-10
        animate-in fade-in"
                style={{
                    boxShadow: "0 8px 42px 0 #97e4c9b0, 0 2px 8px #3e683633",
                }}
            >
                <div className="p-6 sm:p-10">
                    {/* Back Link */}
                    <div className="mb-6 flex items-center gap-2 animate-fadeInUp" style={{ animationDelay: "0.1s", animationDuration: "0.6s", animationFillMode: "forwards" }}>
                        <Link to="/recipes2" className="group text-green-900 font-bold underline drop-shadow-sm flex items-center transition duration-200 hover:text-fuchsia-800">
                            <svg viewBox="0 0 16 16" className="h-5 w-5 mr-1 transition-transform duration-200 group-hover:-translate-x-1" fill="none">
                                <path d="M9 12L5 8l4-4" stroke="#82a060" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Discover
                        </Link>
                    </div>

                    {/* Title & Share/Like */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s", animationDuration: "0.7s" }}>
                        <h2 className="font-extrabold leading-tight text-2xl md:text-3xl xl:text-4xl text-center md:text-left text-[#125932] tracking-tight potta-one drop-shadow-lg uppercase">
                            {recipe.title}
                        </h2>
                        <div className="flex gap-4 items-center justify-center">
                            <LikeButton recipeId={recipe._id} userId={userId} />
                            <ShareButton recipeId={recipe._id} />
                        </div>
                    </div>

                    {/* Main content grid */}
                    <div className="flex flex-col md:flex-row gap-10 animate-fadeInUp" style={{ animationDelay: "0.25s", animationDuration: "0.7s" }}>
                        {/* Image + desc + ingredients */}
                        <div className="flex-1 min-w-0 flex flex-col gap-8 md:max-w-sm">
                            <div className="relative rounded-xl overflow-hidden shadow-lg border">
                                {/* Main image */}
                                {recipe.image && (
                                    <div className="aspect-[4/3] w-full bg-[#f0def5]">
                                        <img
                                            src={Array.isArray(recipe.image)
                                                ? `https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image[0].replace(/[^a-zA-Z0-9.-]+/g, "-")}`
                                                : `https://storage.googleapis.com/${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}/recipes/${recipe.image.replace(/[^a-zA-Z0-9.-]+/g, "-")}`}
                                            alt={recipe.title}
                                            className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:scale-105"
                                            loading="lazy"
                                            style={{
                                                // shimmer effect fallback while loading
                                                background: "linear-gradient(110deg, #e0e0e0 8%, #fce2ff 18%, #e0e0e0 33%)",
                                                backgroundSize: "200% 200%",
                                                animation: "shimmer 2s infinite linear",
                                            }}
                                            onError={e => { e.target.onerror = null; e.target.src = "/placeholder_image.png"; }}
                                        />
                                    </div>
                                )}

                                {/* Gradient overlay on image for snazz */}
                                <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-[#f8ffe268] via-transparent to-[#ecc2f3]/30" />
                            </div>

                            {/* Description */}
                            {recipe.description && (
                                <div className="bg-[#FAF6FF]/90 rounded-lg p-4 shadow border flex items-center text-base font-medium text-slate-800 animate-fadeInUp" style={{ animationDelay: "0.33s" }}>
                                    <svg className="h-6 w-6 text-fuchsia-300 shrink-0 mr-3" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path d="M8 12h8M8 16h8M8 8h8M8 4h8" /></svg>
                                    <span>{recipe.description}</span>
                                </div>
                            )}

                            {/* Ingredients */}
                            <section className="border bg-[#E9EDC9]/90 rounded-xl p-5 shadow mb-1 animate-fadeInUp" style={{ animationDelay: "0.38s" }}>
                                <h4 className="font-bold text-lg text-[#2b5a2b] mb-3 flex items-center gap-3">
                                    <span role="img" aria-label="Ingredients">🥦</span> Ingredients
                                </h4>
                                <ul className="list-disc ml-4 space-y-4">
                                    {recipe.ingredients.map((ingredient, idx) => (
                                        <li
                                            key={idx}
                                            className="text-base font-medium text-[#27694f] transition-transform duration-500"
                                            style={{
                                                animation: "fadeInUp 0.7s cubic-bezier(0.4,0.2,0.6,1) both",
                                                animationDelay: `${0.42 + idx * 0.06}s`
                                            }}
                                        >
                                            <span className="text-[#3a7f4d] font-bold">{ingredient.name}</span>
                                            <span className="ml-3 text-[#7e5b1a]">({ingredient.amount})</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        {/* Nutrition + Steps */}
                        <div className="flex-[2] flex flex-col gap-8 min-w-0">
                            {/* Nutrition */}
                            <section className="border bg-[#ECF9FF]/90 rounded-xl p-5 shadow animate-fadeInUp" style={{ animationDelay: "0.46s" }}>
                                <h4 className="font-bold text-lg text-[#2b547e] mb-3 flex items-center gap-3">
                                    <span role="img" aria-label="Nutrition">🍎</span> Nutrition
                                </h4>
                                <div className="grid grid-cols-2 gap-x-6 gap-y-2 sm:gap-x-12 text-sm md:text-base">
                                    <div>Calories: <b className="text-[#fd925b]">{recipe.nutrition.calories}</b> kcal</div>
                                    <div>Protein: <b className="text-[#65b01a]">{recipe.nutrition.protein}</b> g</div>
                                    <div>Carbs: <b className="text-[#6488ea]">{recipe.nutrition.carbs}</b> g</div>
                                    <div>Fats: <b className="text-[#f3bb1b]">{recipe.nutrition.fats}</b> g</div>
                                    {recipe.nutrition.vitamins && <div className="col-span-2">Vitamins: {recipe.nutrition.vitamins}</div>}
                                </div>
                            </section>

                            {/* Steps */}
                            <section className="border bg-[#FFFBE9]/95 rounded-xl p-5 shadow animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
                                <h4 className="font-bold text-lg text-[#d57e2b] mb-3 flex items-center gap-2">
                                    <span role="img" aria-label="Steps">👨‍🍳</span> Steps
                                </h4>
                                <ol className="list-decimal ml-4 space-y-4">
                                    {recipe.steps.map((step, index) => (
                                        <li
                                            key={index}
                                            className="text-base text-[#434040] font-[500] leading-relaxed pl-1 transition-all"
                                            style={{
                                                animation: "fadeInUp 0.7s cubic-bezier(0.4,0.2,0.6,1) both",
                                                animationDelay: `${0.54 + index * 0.06}s`
                                            }}
                                        >
                                            <span className="opacity-70 text-sm mr-2">Step {index + 1}:</span> {step}
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        </div>
                    </div>

                    {/* Tags and ID */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-7 items-center animate-fadeInUp" style={{ animationDelay: "0.67s" }}>
                        <div className="flex-1 border bg-[#fff8f3]/85 rounded-xl p-4 flex flex-wrap gap-2 items-center shadow-sm">
                            <h4 className="font-bold mr-2 text-slate-900">Tags:</h4>
                            <Tag>Meal: {recipe.tags.mealType}</Tag>
                            <Tag>Cuisine: {recipe.tags.cuisine}</Tag>
                            {recipe.tags.extra && recipe.tags.extra.length > 0 && (
                                recipe.tags.extra.map((tag, idx) => <Tag key={idx}>{tag}</Tag>)
                            )}
                        </div>
                        <div className="border bg-[#fff8f3]/85 rounded-xl p-4 flex gap-3 items-center shadow-sm">
                            <h4 className="font-bold text-slate-900">Recipe ID:</h4>
                            <span className="font-mono text-xs text-purple-700">{recipe._id}</span>
                        </div>
                    </div>

                    {/* AI disclaimer */}
                    <div className="mt-5 border bg-gradient-to-r from-[#f5e9ff]/95 via-[#e9f5ff]/90 to-[#f9ffed]/90 rounded-md p-4 w-full flex gap-5 shadow-sm items-center animate-fadeInUp" style={{ animationDelay: "0.75s" }}>
                        <span className="font-semibold text-sm text-[#d91c63]">
                            NOTE: This recipe is AI-Generated. Calorie AI has not verified it for accuracy or safety. It may contain errors. Always use your best judgement when making AI generated dishes.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ...propTypes as before
RecipeDisplay.propTypes = {
    recipe: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
        ]),
        ingredients: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
            })
        ).isRequired,
        nutrition: PropTypes.shape({
            calories: PropTypes.number,
            protein: PropTypes.number,
            carbs: PropTypes.number,
            fats: PropTypes.number,
            vitamins: PropTypes.string,
        }).isRequired,
        steps: PropTypes.arrayOf(PropTypes.string).isRequired,
        tags: PropTypes.shape({
            mealType: PropTypes.string,
            cuisine: PropTypes.string,
            extra: PropTypes.arrayOf(PropTypes.string),
        }).isRequired,
    }).isRequired,
};

export default RecipeDisplay;
