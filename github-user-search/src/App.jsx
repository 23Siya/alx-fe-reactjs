import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from "./components/Search";
import './App.css'

function App() {
  const [search, setSearch] = useState("");

  return (
   
      <div className="App">
      <Search />
    </div>
      );
}

export default App
