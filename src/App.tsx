import './App.css' // Import CSS for styling
import { useEffect } from 'react'
import { Ben10Thumbnails } from './components/Selection'
import { Ben10Layout } from './components/Selection'
import Navbar from './components/Navbar'
import { useState } from 'react'
import ProductDetail from './components/Merch/ProductDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    fetch("http://localhost:5000")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);
  const [selectedSeries, setSelectedSeries] = useState<"classic" | "alien-force" | "ultimate-alien" | "omniverse" | "reboot" | null>(null)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Ben10Thumbnails onSelect={setSelectedSeries} > <Navbar onSelect={setSelectedSeries} /></Ben10Thumbnails>
              <Ben10Layout series={selectedSeries} />
            </>
          } />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
