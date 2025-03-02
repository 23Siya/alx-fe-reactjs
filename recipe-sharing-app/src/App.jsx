import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';

function App() {
  return (
    <Router>
      <div>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
