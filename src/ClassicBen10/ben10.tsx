import Games from "./games";
import { useState } from "react";
import "./ben10.css"
function Ben10(){
    const [showComponent, setShowComponent] = useState(false);
    const handleToggle = () => {
      setShowComponent(!showComponent);
    };
    return(
        <>
        <h1>Ben 10</h1>
         <button onClick={handleToggle}>
        {showComponent? 'Hide Games' : 'Games'}
      </button>
      {showComponent && <Games />}
        </>
    )
}
export default Ben10;