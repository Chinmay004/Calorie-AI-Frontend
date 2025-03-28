import { getAuth } from "firebase/auth"; // Import getAuth

const API_URL = import.meta.env.VITE_API_URL;

 const generateRecipe = async ( ingredients, dietaryPreferences) => {

    const auth = getAuth(); // Get the auth instance
    const user = auth.currentUser; // Get the current user
  
    if (!user) {
      throw new Error("No user is currently signed in."); // Or handle this differently
    }
  
    const idToken = await user.getIdToken(); // Get the ID token

    try {
        const response = await fetch(`${API_URL}/api/recipes/generate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': idToken,
            },
            body: JSON.stringify({ ingredients, dietaryPreferences }),
        });

        if (!response.ok) { // Check for HTTP errors (4xx or 5xx)
            const errorData = await response.json(); // Try to parse error response
            throw new Error(errorData.message || `HTTP error ${response.status}`);  // Throw error with message
        }

        const data = await response.json(); // Parse JSON *once*

        console.log('Success:', data);
        return data; // Return the parsed JSON data

    } catch (error) {
        console.error('Error in FETCH:', error);
        throw error; // Re-throw the error to be handled by the calling component
    }

  };
  // api.js
 const getRecipeById = async (recipeId) => {
    const response = await fetch(`${API_URL}/api/recipes/${recipeId}`); // Adjust the API endpoint
    if (!response.ok) {
        throw new Error('Failed to fetch recipe.');
    }
    return response.json();
};



const getAllRecipes = async (filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_URL}/api/recipes/?${queryParams}`); // Adjust the API endpoint
    if (!response.ok) {
        throw new Error('Failed to fetch recipes.');
    }
    return response.json();
};

//  const likeRecipe = async (recipeId, newLikes) => {
//     await fetch(`http://localhost:5000/api/recipes/${recipeId}/like`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ likes: newLikes }),
//     });
// };




  export{generateRecipe,getRecipeById,getAllRecipes} 
  