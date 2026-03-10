import "./ben10omniverse.css"
import Aliens  from "./Buttons/Aliens";
import Episodes  from "./Buttons/Episodes";
import { useState } from 'react';

function Ben10Omniverse(){
    const [activeTab, setActiveTab] = useState(''); // '', 'episodes', or 'merch'
    
    const toggleEpisodes = () => {
        setActiveTab(activeTab === 'episodes' ? '' : 'episodes');
    };
    
    const toggleAliens = () => {
        setActiveTab(activeTab === 'aliens' ? '' : 'aliens');
    };
    
    return(
        <>
        <h1 className="ben10-title">Ben 10 Omniverse</h1>
        <div className="buttons">
        <button className="ben10-button" onClick={toggleEpisodes}>Episodes</button>
        <button className="ben10-button" onClick={toggleAliens}>Aliens</button>
        <button className="ben10-button">Play</button>
        <button className="ben10-button">Play</button>
        <button className="ben10-button">Play</button>
        </div>
        
        {activeTab === 'episodes' && <Episodes />}
        {activeTab === 'aliens' && <Aliens />}
        </>
    )
}

export default Ben10Omniverse;