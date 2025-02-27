 // RecipeDetails component
 import { useRecipeStore } from './recipeStore';
 import EditRecipeForm from './Components/EditRecipeForm.jsx';
 import DeleteRecipeButton from './Components/DeleteRecipeButton.jsx';

 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

   return (
     <div>
       <h1>{recipe.title}</h1>
       <p>{recipe.description}</p>
       <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit-recipe/:id" element={<EditRecipeForm />} />
      </Routes>
    </Router>
     </div>
   );
 };