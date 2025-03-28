

import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import filled heart icon
import PropTypes from "prop-types"; 

const API_URL = import.meta.env.VITE_API_URL;

const LikeButton = ({ recipeId, userId }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  // Fetch initial like state
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/recipes/${recipeId}`);
        setLikes(response.data.likedBy.length);
        setLiked(response.data.likedBy.includes(userId));
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };
    fetchLikes();
  }, [recipeId, userId]);

  // Toggle Like
  const toggleLike = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/recipes/like/${recipeId}`,
        { userId }
      );

      setLikes(response.data.likedBy.length);
      setLiked(response.data.likedBy.includes(userId));
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (

    <div>

    <button
  onClick={toggleLike}
  className={`px-4 py-2 rounded-lg font-semibold   flex items-center gap-2 transition-transform active:scale-95 duration-300 ${
    liked
      ? "bg-red-500 text-white shadow-md hover:bg-red-600"
      : "bg-yellow-200 text-gray-800 hover:bg-yellow-400 "
  }`}
>
  {liked ? <FaHeart className="text-white" /> : <FaRegHeart className="text-red-500" />}
  {likes}
</button>
</div>
  );
};

LikeButton.propTypes = {
  recipeId: PropTypes.string.isRequired,  
  userId: PropTypes.string.isRequired,    
};


export default LikeButton;
