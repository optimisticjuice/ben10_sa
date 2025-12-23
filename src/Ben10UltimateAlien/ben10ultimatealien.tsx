import "./ben10ultimatealien.css"
import Games from "./games";
import { useState } from "react";
function Ben10UltimateAlien(){
    const [showComponent, setShowComponent] = useState(false);
    const handleToggle = () => {
      setShowComponent(!showComponent);
    };
    return(
        <>
        <h1>Ben 10 Ultimate Alien</h1>
         <button onClick={handleToggle}>
        {showComponent? 'Hide Games' : 'Games'}
      </button>
      {showComponent && <Games />}
        </>
    )
}
export default Ben10UltimateAlien;