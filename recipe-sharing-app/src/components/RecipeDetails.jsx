import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>Edit</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};
export default RecipeDetails ;
