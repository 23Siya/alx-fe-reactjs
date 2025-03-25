import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import HomePage from './components/HomePage'; // Import the HomePage component
import RecipeDetail from './components/RecipeDetail'; // Import the RecipeDetail component
import AddRecipeForm from './components/AddRecipeForm'; // Import the AddRecipeForm component


const App = () => {
  return (
    <Router> 
      <Routes> 
        {/* Define the routes for HomePage and RecipeDetail */}
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Dynamic route for recipe details */}
        <Route path="/add-recipe" element={<AddRecipeForm />} /> {/* Route for adding a recipe */}
      </Routes>
    </Router>
  );
};

export default App;
