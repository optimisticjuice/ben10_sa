import './App.css' // Import CSS for styling
import Navbar from './components/Navbar'
import { Ben10Thumbnails } from './components/Selection'
import { Ben10Layout } from './components/Selection'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Ben10Layout series={null}  />
      <Ben10Thumbnails onSelect={(series) => console.log(series)} />
    </div>
  )
}

export default App
