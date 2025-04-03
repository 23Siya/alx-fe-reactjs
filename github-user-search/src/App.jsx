import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="container">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </div>
  );
}

export default App
