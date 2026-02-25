import { useState } from "react";
import "./ben10omniverse.css"
import Episodes from "./Buttons/Episodes";
function Ben10OmniverseComponent(){
    const [showEpisodes, setShowEpisodes] = useState(false);
    return(
        <>
        <h1 className="ben10-title">Ben 10 Omniverse</h1>
        <div className="buttons">
        <button className="ben10-button" onClick={() => setShowEpisodes(!showEpisodes)}>Episodes</button>

        <button className="ben10-button">Play</button>

        <button className="ben10-button">Play</button>

        <button className="ben10-button">Play</button>

        <button className="ben10-button">Play</button>

        </div>
        {showEpisodes && <Episodes/>}
        </>
    )
}
export default Ben10OmniverseComponent;