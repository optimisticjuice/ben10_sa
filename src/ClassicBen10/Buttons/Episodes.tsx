import { useEffect, useState } from "react";
import "./Episodes.css";
import { ben10Episodes } from "../../API/episode";

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
                            {ben10Episodes.filter(episode => episode.season === "1").map((episode) => (
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
                            {ben10Episodes.filter(episode => episode.season === "2").map((episode) => (
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
                            {ben10Episodes.filter(episode => episode.season === "3").map((episode) => (
                                <div key={episode.id} className="episode-row">
                                    <div className="episode-number">Episode Number : {episode.id}</div>
                                    <div className="episode-title">{episode.title}</div>
                                </div>
                            ))}
                            </div>
                        </details>
                        <details>
                            <summary>Season 4</summary>
                            <div className="episode-list">
                            {ben10Episodes.filter(episode => episode.season === "4").map((episode) => (
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