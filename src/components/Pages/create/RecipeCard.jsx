import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ShareButton from "../../recipe/ShareButton";
import LikeButton from "../../recipe/LikeButton";
import { getAuth } from "firebase/auth";
import { TbHandClick } from "react-icons/tb";



const API_URL = import.meta.env.VITE_API_URL;


const RecipeCard = ({ recipe }) => {


  const auth = getAuth();
      const userId = auth.currentUser ? auth.currentUser.uid : null;

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-md p-4 bg-[#FAF4B7] group ">
      <Link to={`/recipe/${recipe._id}`} className="block">
        <img
          src={
            recipe.image && recipe.image.length > 0
              ? `${API_URL}/generated_images/${recipe.image[0].replace(/[^a-zA-Z0-9.-]+/g, "-")}`
              : "/placeholder_image.png"
          }
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-md mb-3"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder_image.png";
          }}
          
        />

        <div className="p-2">
          <h3 className="text-lg text-center potta-one tracking-widest  text-[#216e40]">{recipe.title}</h3>
        </div>
      </Link>

           <div className="absolute inset-0 bg-[#000000b9] bg-opacity-50 flex gap-4 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <LikeButton recipeId={recipe._id} userId={userId} />
                <Link to={`/recipe/${recipe._id}`} className='px-4 py-2 rounded-lg font-semibold  duration-300 flex items-center gap-2 bg-yellow-200 hover:bg-yellow-400  transition-transform active:scale-95'><TbHandClick size={25} /></Link>
                <ShareButton/>
            </div>
      
    </div>
  );
};RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string), // Image is optional
  }).isRequired,
};




export default RecipeCard;
