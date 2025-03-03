import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';
import AddRecipeForm from './Components/AddRecipeForm.jsx';
import RecipeList from './Components/RecipeList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
