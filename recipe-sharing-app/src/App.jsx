import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import EditRecipeForm from './EditRecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
