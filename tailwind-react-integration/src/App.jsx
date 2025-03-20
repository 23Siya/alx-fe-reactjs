import './index.css';
import './App.css'
import UserProfile from "./components/UserProfile.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProfile />
    </>
  )
}

export default App
