import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../../api'; // Create this API function
import RecipeDisplay from './RecipeDisplay';

const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await getRecipeById(recipeId);
                setRecipe(data);
            } catch (err) {
                console.error('Error fetching recipe:', err);
                setError('Failed to load recipe.');
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!recipe) {
        return <p>Loading...</p>;
    }

    return (
       
        <RecipeDisplay recipe={recipe}  />
    )
   
};

export default RecipeDetails;