import "./ben10alienforce.css"
import Games from "./games.tsx"
import { useState } from "react";
function Ben10AlienForce(){
    const [showComponent, setShowComponent] = useState(false);
    const handleToggle = () => {
      setShowComponent(!showComponent);
    };
    return(
        <>
        <h1>Ben 10 Alien Force</h1>
         <button onClick={handleToggle}>
        {showComponent? 'Hide Games' : 'Games'}
      </button>
      {showComponent && <Games />}
        </>
    )
}
export default Ben10AlienForce;