import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  
  // Add a recipe to the favorites
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  // Remove a recipe from the favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendations array
  recommendations: [],
  
  // Function to generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
