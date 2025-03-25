import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the ID from the URL
import recipeData from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Simulating fetching recipe based on ID
    const fetchedRecipe = recipeData.find(recipe => recipe.id === parseInt(id));
    setRecipe(fetchedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-lg">Recipe not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{recipe.title}</h2>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc pl-5 space-y-2">
              {/* Example ingredients */}
              <li>1 package spaghetti</li>
              <li>4 eggs</li>
              <li>100g pancetta</li>
              <li>1 cup Parmesan cheese</li>
              <li>Freshly ground black pepper</li>
            </ul>
          </div>

          {/* Cooking Instructions */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Cooking Instructions</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Boil pasta according to package instructions.</li>
              <li>Fry pancetta in a pan until crispy.</li>
              <li>Mix eggs and cheese in a bowl.</li>
              <li>Combine pasta, pancetta, and egg mixture.</li>
              <li>Season with black pepper and serve.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
