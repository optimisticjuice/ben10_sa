import "./ben10ultimatealien.css"
import { useState } from 'react';
import Episodes from "./Buttons/Episodes";
import Aliens from "./Buttons/Aliens";
import Media from "./Buttons/Media";
import Quotes from "./Buttons/Quotes";
import Discord from "./Buttons/Discord";
function Ben10UltimateAlien(){
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
        const toggleQuotes = () => {
        setActiveTab(activeTab === 'quotes' ? '' : 'quotes');
    };
    
    const toggleDiscord = () => {
        setActiveTab(activeTab === 'discord' ? '' : 'discord');
    };

    return(
        <>
        <h1 className="ben10-title" >Ben 10 Ultimate Alien</h1>
        <div className="buttons">
        <button className="ben10-button" onClick={toggleEpisodes}>Episodes</button>

        <button className="ben10-button" onClick={toggleAliens}>Aliens</button>

        <button className="ben10-button" onClick={toggleMedia}>Media</button>

        <button className="ben10-button" onClick={toggleQuotes}>Quotes</button>

        <button className="ben10-button" onClick={toggleDiscord}>Discord</button>

        </div>
       {activeTab === 'episodes' && <Episodes />}
        {activeTab === 'aliens' && <Aliens />}
        {activeTab === 'media' && <Media />}
        {activeTab === 'quotes' && <Quotes />}
        {activeTab === 'discord' && <Discord />}
        </>
    )
}
export default Ben10UltimateAlien;