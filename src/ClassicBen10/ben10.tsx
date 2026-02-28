import "./ben10.css"
import Episodes from "./Buttons/Episodes";
import Merch from "./Buttons/Merch";
import { useState } from 'react';

function Ben10(){
    const [activeTab, setActiveTab] = useState(''); // '', 'episodes', or 'merch'
    
    const toggleEpisodes = () => {
        setActiveTab(activeTab === 'episodes' ? '' : 'episodes');
    };
    
    const toggleMerch = () => {
        setActiveTab(activeTab === 'merch' ? '' : 'merch');
    };
    
    return(
        <>
        <h1 className="ben10-title">Ben 10</h1>
        <div className="buttons">
        <button className="ben10-button" onClick={toggleEpisodes}>Episodes</button>
        <button className="ben10-button" onClick={toggleMerch}>Merch</button>
        <button className="ben10-button">Play</button>
        <button className="ben10-button">Play</button>
        <button className="ben10-button">Play</button>
        </div>
        
        {activeTab === 'episodes' && <Episodes />}
        {activeTab === 'merch' && <Merch />}
        </>
    )
}

export default Ben10;