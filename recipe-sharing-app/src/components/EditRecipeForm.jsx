import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id, title, description });
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter recipe title..." 
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Enter recipe description..." 
        className="p-2 mr-2 w-60 border rounded-md border-gray-300"
      />
      <button type="submit" className="p-2 rounded-md bg-green-500 text-white">
        Save Recipe
      </button>
    </form>
  );
};

export default EditRecipeForm;
