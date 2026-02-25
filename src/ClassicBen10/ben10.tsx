import "./ben10.css"
import Episodes from "./Buttons/Episodes";
import { useState } from 'react';

function Ben10(){
    const [showEpisodes, setShowEpisodes] = useState(false);
    
    return(
        <>
        <h1 className="ben10-title">Ben 10</h1>
        <div className="buttons">
        <button className="ben10-button" onClick={() => setShowEpisodes(!showEpisodes)}>Episodes</button>

        <button className="ben10-button">Play</button>

        <button className="ben10-button">Play</button>

        <button className="ben10-button">Play</button>

        <button className="ben10-button">Play</button>

        </div>
        {showEpisodes && <Episodes />}
        </>
    )
}
export default Ben10;