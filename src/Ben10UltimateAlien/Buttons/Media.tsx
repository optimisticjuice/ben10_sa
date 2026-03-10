import "./Media.css"
// Media.tsx
import React, { useState, useEffect } from "react";

// Type for media item
interface MediaItem {
  name: string;
  image: string;
  series: string[];
}

const Media: React.FC = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<"all" | "movies" | "games">("all");

  // Load media from JSON file with hardcoded image paths
  useEffect(() => {
    const loadMediaWithImages = async () => {
      try {
        // Import and parse media data
        const mediaData = await import("../../API/media.json");
        const allMedia: MediaItem[] = mediaData.default;
        
        // Only show media from Ben 10 Ultimate Alien series
        const ultimateAlienSeriesMedia = allMedia.filter(item => 
          item.series.includes("Ben 10 Ultimate Alien")
        );
        
        setMedia(ultimateAlienSeriesMedia);
      } catch (err) {
        console.error("Failed to load media:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMediaWithImages();
  }, []);

  // Filter media based on search query and type
  const filteredMedia = media.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === "all") return matchesSearch;
    if (filterType === "movies") {
      return matchesSearch && item.name.toLowerCase().includes("ultimate alien");
    }
    if (filterType === "games") {
      return matchesSearch && (item.name.includes("Alien Force") || item.name.includes("The Rise of Hex"));
    }
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="media-container">
        <p>Loading media...</p>
      </div>
    );
  }

  const nextMedia = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredMedia.length);
  const prevMedia = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredMedia.length) % filteredMedia.length
    );

  if (filteredMedia.length === 0) {
    return (
  <div className="no-media-container">
    <input
      type="text"
      placeholder="Search media..."
      className="no-media-input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <p className="no-media-text">No media found.</p>
  </div>
);
  }

  // Ensure currentIndex is always valid
  const safeIndex = Math.min(currentIndex, filteredMedia.length - 1);
  const currentMedia = filteredMedia[safeIndex];

  return (
    <div className="media-container">
      {/* Filter buttons */}
      <div className="filter-buttons">
      
        <button 
          className={`filter-button ${filterType === "games" ? "active" : ""}`}
          onClick={() => setFilterType("games")}
        >
          Games
        </button>
       
      </div>

      {/* Slideshow / Media display */}
      <div className="slideshow-card">
        <h2 className="media-name">{currentMedia.name}</h2>
        <img
          src={currentMedia.image}
          alt={currentMedia.name}
          className="media-image"
        />
        <p>
          <strong>Series:</strong> {currentMedia.series.join(", ")}
        </p>

        {/* Navigation */}
        <div className="nav-buttons">
          <button onClick={prevMedia}>Prev</button>
          <button onClick={nextMedia}>Next</button>
        </div>
      </div>

      {/* Thumbnail / quick search grid */}
      <div className="thumbnail-grid">
        {filteredMedia.map((item, idx) => (
          <div
            key={item.name}
            className={`thumbnail-card ${
              idx === currentIndex ? "active-thumbnail" : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="thumbnail-image"
            />
            <span className="thumbnail-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Media;