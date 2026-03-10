import "./ben10.css"
import Aliens from "./Buttons/Aliens";
import Episodes from "./Buttons/Episodes";
import Media from "./Buttons/Media";
import { useState } from 'react';

function Ben10(){
    const [activeTab, setActiveTab] = useState(''); // '', 'episodes', or 'merch'
    
    const toggleEpisodes = () => {
        setActiveTab(activeTab === 'episodes' ? '' : 'episodes');
    };
    
    const toggleAliens = () => {
        setActiveTab(activeTab === 'aliens' ? '' : 'aliens');
    };
        const toggleMedia = () => {
        setActiveTab(activeTab === 'media' ? '' : 'media');
    };
    return(
        <>
        <h1 className="ben10-title">Ben 10</h1>
        <div className="buttons">
        <button className="ben10-button" onClick={toggleEpisodes}>Episodes</button>
        <button className="ben10-button" onClick={toggleAliens}>Aliens</button>
        <button className="ben10-button" onClick={toggleMedia}>Media</button>
        <button className="ben10-button">Play</button>
        <button className="ben10-button">Play</button>
        </div>
        
        {activeTab === 'episodes' && <Episodes />}
        {activeTab === 'aliens' && <Aliens />}
        {activeTab === 'media' && <Media />}
        </>
    )
}

export default Ben10;