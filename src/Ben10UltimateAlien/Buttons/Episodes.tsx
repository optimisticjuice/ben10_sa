import "./Episodes.css";
import { ultimateAlienEpisodes } from "../../API/episode";
import { useEffect, useState } from "react";

function Episodes() {
    
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="episodes-container">
        {
            loading ? (
                <div className="loading-state">Loading Ben 10 Episodes...</div>
            ) : (
                <div className="episodes-table">
                        <details>
                            <summary>Season 1</summary>
                            <div className="episode-list">
                            {ultimateAlienEpisodes.filter(episode => episode.season === "1").map((episode) => (
                                <div key={episode.id} className="episode-row">
                                    <div className="episode-number">Episode Number : {episode.id}</div>
                                    <div className="episode-title">{episode.title}</div>
                                </div>
                            ))}
                            </div>
                        </details>
                        <details>
                            <summary>Season 2</summary>
                            <div className="episode-list">
                            {ultimateAlienEpisodes.filter(episode => episode.season === "2").map((episode) => (
                                <div key={episode.id} className="episode-row">
                                    <div className="episode-number">Episode Number : {episode.id}</div>
                                    <div className="episode-title">{episode.title}</div>
                                </div>
                            ))}
                            </div>
                        </details>
                         <details>
                            <summary>Season 3</summary>
                            <div className="episode-list">
                            {ultimateAlienEpisodes.filter(episode => episode.season === "3").map((episode) => (
                                <div key={episode.id} className="episode-row">
                                    <div className="episode-number">Episode Number : {episode.id}</div>
                                    <div className="episode-title">{episode.title}</div>
                                </div>
                            ))}
                            </div>
                        </details>
                </div>
            )
        }
    </div>
  )
}

export default Episodes;