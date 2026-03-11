import './App.css' // Import CSS for styling

import { Ben10Thumbnails } from './components/Selection'

import { Ben10Layout } from './components/Selection'

import Navbar from './components/Navbar'

import { useState } from 'react'

function App() {
// ben 10 co.za done 
  const [selectedSeries, setSelectedSeries] = useState<"classic" | "alien-force" | "ultimate-alien" | "omniverse" | "reboot" | null>(null)

  return (

    <div className="App">

      <Ben10Thumbnails onSelect={setSelectedSeries} > <Navbar onSelect={setSelectedSeries} /></Ben10Thumbnails>

      <Ben10Layout series={selectedSeries} />
 {/* Should work now   */}
    </div>

  )

}



export default App

