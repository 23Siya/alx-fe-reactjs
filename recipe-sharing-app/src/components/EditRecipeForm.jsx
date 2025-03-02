import { useRecipeStore } from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [formData, setFormData] = useState({
    title: recipe?.title || '',
    description: recipe?.description || ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id, ...formData });
    navigate(`/recipe/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} required />
      <textarea name="description" value={formData.description} onChange={handleChange} required />
      <button type="submit">Save</button>
    </form>
  );
};
