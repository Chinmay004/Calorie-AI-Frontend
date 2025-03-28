import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import { getAuth } from "firebase/auth";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const RecipeDisplay = ({ recipe }) => {
    const auth = getAuth();
    const userId = auth.currentUser ? auth.currentUser.uid : null;

    return (

        <div className="w-full h-fit flex-col bg-[url('/kiwiWall.png')] bg-repeat lg:bg-[length:50%_25%] sm:bg-[length:50%_10%] bg-[length:80%_10%] items-center justify-center py-20  "> 
        
        <div className=" inset-0 bg-[#82a060]   opacity-95  w-full sm:w-10/12 h-fit sm:border-4 rounded-3xl self-center justify-self-center backdrop-brightness-90 backdrop-blur-none  sm:scale-[1] md:scale-[1] lg:scale-[1] xl:scale-[1]">
        
            <div className="container xl:p-15  my-15 w-full sm:w-8/9 flex-wrap justify-self-center sm:border  bg-white opacity-95 rounded-xl   ">
            
            <div className=" text-md underline  black text-[#82a060] hover:text-green-900"> <Link to="/recipes2" className="  ">
            ←Back to Discover
            </Link></div>
    
        
            <div className=" sm:border sm:border-b-0 md:border-r-1 border-r-0 flex w-fit sm:w-full  justify-center items-center p-3">  
                <div className=" flex flex-col md:flex-row justify-around  w-fit sm:w-full items-center gap-5">
                    <h2 className=" md:text-xl lg:text-2xl xl:text-3xl font-semibold  w-fit sm:w-full text-center potta-one text-[#196832] ">{recipe.title}</h2>
                    <div className="flex gap-5">
                    <LikeButton recipeId={recipe._id} userId={userId} />

                    <ShareButton recipeId={recipe._id} />
                    </div>

                </div>
             
             
            </div>
    
            {/* Image Display Logic */}
            <div className="md:flex-row flex flex-col sm:border sm:border-y-0">

        {/* <div className="flex-row flex  border border-y-0"> */}
            <div className="  flex flex-col   p-4  w-fit  ">
                {recipe.image && (
                    <div className="   flex-col  rounded-md border   mb-10 ">
                        {Array.isArray(recipe.image) ? (
                            recipe.image.map((imageFilename, index) => {
                                const sanitizedFilename = imageFilename.replace(/[^a-zA-Z0-9.-]+/g, '-');
                                const imageUrl = `${API_URL}/generated_images/${sanitizedFilename}`;
                                return (
                                    <img
                                        key={index}
                                        src={imageUrl}
                                        alt={recipe.title}
                                        className=" rounded-t-md w-full size-fit"
                                        onError={(e) => {
                                            console.error(`Error loading image ${sanitizedFilename}:`, e);
                                            e.target.onerror = null;
                                            e.target.src = "/placeholder_image.png";
                                        }}
                                    />
                                );
                            })
                        ) : (
                            <img
                                src={`${API_URL}/generated_images/${recipe.image.replace(/[^a-zA-Z0-9.-]+/g, '-')}`}
                                alt={recipe.title}
                                className="max-w-full h-auto rounded"
                                onError={(e) => {
                                    console.error(`Error loading image ${recipe.image}:`, e);
                                    e.target.onerror = null;
                                    e.target.src = "/placeholder_image.png";
                                }}
                            />
                        )}
                        <div className="w-full border-t-0  ">  
                          <p className="  bg-[#F5EDF7] rounded-t-0 rounded-b-md p-4 flex grow w-full lg:text-md md:text-sm  sm:text-md  text-xs">{recipe.description}</p>
                        </div>
                    </div>
                )}
           
                  <div className="mb-4 border bg-[#E9EDC9] rounded-md p-4 grow">
                <h4 className="font-bold mb-5 text-xl ">Ingredients</h4>
                <ul className="list-disc ml-6 space-y-5 ">
                    {recipe.ingredients.map((ingredient, index) => (
                    <div key={index}>
                    <li className="lg:text-md md:text-sm  sm:text-md  text-xs" key={index}>{ingredient.name} - {ingredient.amount}</li> 
                    {index !== recipe.ingredients.length - 1 && <hr className="my-2 border-gray-500" />}
                    </div>
                    ) )}
                </ul>      
             </div>
            </div>
    
            
           
            <div className="flex flex-col  gap-4 p-4   w-full">

           
             <div className="mb-4 border bg-[#ECF9FF] rounded-md p-4 flex-col w-full grow  ">
                    <h4 className="font-bold mb-8  text-xl ">Nutrition</h4>
                        <div className="mt-2 space-y-5 lg:text-md md:text-sm  sm:text-md  text-xs">
                            {[
                            `Calories: ${recipe.nutrition.calories} kcal`,
                            `Protein: ${recipe.nutrition.protein} g`,
                            `Carbs: ${recipe.nutrition.carbs} g`,
                            `Fats: ${recipe.nutrition.fats} g`,
                            recipe.nutrition.vitamins && `${recipe.nutrition.vitamins}`,
                            ]
                            .filter(Boolean)
                            .map((item, index, array) => (
                                <div key={index}>
                                <p>{item}</p>
                                {index !== array.length - 1 && <hr className="my-2 border-gray-500" />}
                                </div>
                            ))}
                        </div>

                </div>
             
                <div className="mb-4 border bg-[#FFFBE9] rounded-md p-4 w-full grow ">
                    <h4 className="font-bold mb-5 text-xl ">Steps</h4>
                    <ol className="list-decimal ml-6 space-y-4">
                        {recipe.steps.map((step, index) => (
                             <div key={index}>
                            <li className="lg:text-md md:text-sm  sm:text-md  text-xs"key={index}>{step}</li>
                            {index !== recipe.steps.length - 1 && <hr className="my-2 border-gray-500" />}

                            </div>
                        ))}
                    </ol>
                </div>
            </div>


         </div>
          
    
        
             {/* Tags */}
        <div className="lg:flex-row flex flex-col gap-4 pb-4 w-full  sm:border sm:border-y-0">
            <div className="border bg-[#FFF8F3] rounded-md p-4 w-full flex gap-4 border-l-0 lg:text-md md:text-sm  sm:text-md  text-xs" >
                <h4 className="font-bold ">Tags : </h4>
                <p > Meal Type: {recipe.tags.mealType}</p>
                <p >Cuisine: {recipe.tags.cuisine}</p>
                {recipe.tags.extra.length > 0 && (
                    <div>
                        <p>Extra Tags: {recipe.tags.extra.join(", ")}</p>
                    </div>
                )}
            </div>
            <div className=" border bg-[#FFF8F3] rounded-md p-4 w-full flex gap-5 border-r-0 lg:text-md md:text-sm  sm:text-md  text-xs">
                <h4 className="font-bold">Recipe ID:</h4>
                <p>{recipe._id}</p>
            </div>
        </div>

        <div className="border bg-[#F5E9FF] rounded-md p-4 w-full flex gap-5 lg:text-md md:text-sm  sm:text-md  text-xs">
           <span className="font-semibold"> NOTE: This recipe is AI-Generated And Calorie AI has not verified it for accuracy or safety. It may contain errors. Always use your best judgement when making AI Generated Dishes</span>
        </div>
    
    </div>
    </div>
</div>  
          
     );
};

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
