import "./ben10ultimatealien.css"
import { useState } from 'react';
import Episodes from "./Buttons/Episodes";
function Ben10UltimateAlien(){
    const [showEpisodes, setShowEpisodes] = useState(false);
    return(
        <>
        <h1 className="ben10-title" >Ben 10 Ultimate Alien</h1>
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
export default Ben10UltimateAlien;