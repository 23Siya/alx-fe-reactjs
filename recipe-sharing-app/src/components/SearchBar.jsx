import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
      className="p-2 w-60 border rounded-md border-gray-300"
    />
  );
};

export default SearchBar;
