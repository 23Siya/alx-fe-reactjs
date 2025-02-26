import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './Components/RecipeList.jsx';
import AddRecipeForm from './Components/AddRecipeForm.jsx';


function App() {
  

  return (
 
        <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
   
  );
}

export default App;
