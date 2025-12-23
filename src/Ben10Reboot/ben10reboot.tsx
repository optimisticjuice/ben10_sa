import "./ben10reboot.css"
import Games from "./games";
import { useState } from "react";
function Ben10Reboot(){
    const [showComponent, setShowComponent] = useState(false);
    const handleToggle = () => {
      setShowComponent(!showComponent);
    };
    return(
        <>
        <h1>Ben 10 Reboot</h1>
         <button onClick={handleToggle}>
        {showComponent? 'Hide Games' : 'Games'}
      </button>
      {showComponent && <Games />}
        </>
    )
}
export default Ben10Reboot;