import "./Aliens.css"
// Aliens.tsx
import React, { useState, useEffect } from "react";

// Type for an alien
interface Alien {
  name: string;
  image: string;
  special_ability: string;
  series: string[];
}

const Aliens: React.FC = () => {
  const [aliens, setAliens] = useState<Alien[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Load aliens from JSON file with hardcoded image paths
  useEffect(() => {
    const loadAliensWithImages = async () => {
      try {
        // Import and parse the aliens data
        const aliensData = await import("../../API/aliens.json");
        const allAliens: Alien[] = aliensData.default;
        
        // Only show aliens from Ben 10 Original series
        const originalSeriesAliens = allAliens.filter(alien => 
          alien.series.includes("Ben 10 Original")
        );
        
        setAliens(originalSeriesAliens);
      } catch (err) {
        console.error("Failed to load aliens:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAliensWithImages();
  }, []);

  const filteredAliens = aliens.filter((alien) =>
    alien.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="aliens-container">
        <p>Loading aliens...</p>
      </div>
    );
  }

  const nextAlien = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredAliens.length);
  const prevAlien = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + filteredAliens.length) % filteredAliens.length
    );

  if (filteredAliens.length === 0) {
    return (
  <div className="no-aliens-container">
    <input
      type="text"
      placeholder="Search aliens..."
      className="no-aliens-input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <p className="no-aliens-text">No aliens found.</p>
  </div>
);
  }

  const currentAlien = filteredAliens[currentIndex];

  return (
    <div className="aliens-container">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search aliens..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Slideshow / Alien display */}
      <div className="slideshow-card">
        <h2 className="alien-name">{currentAlien.name}</h2>
        <img
          src={currentAlien.image}
          alt={currentAlien.name}
          className="alien-image"
        />
        <p>
          <strong>Abilities:</strong> {currentAlien.special_ability}
        </p>
        <p>
          <strong>Series:</strong> {currentAlien.series.join(", ")}
        </p>

        {/* Navigation */}
        <div className="nav-buttons">
          <button onClick={prevAlien}>Prev</button>
          <button onClick={nextAlien}>Next</button>
        </div>
      </div>

      {/* Thumbnail / quick search grid */}
      <div className="thumbnail-grid">
        {filteredAliens.map((alien, idx) => (
          <div
            key={alien.name}
            className={`thumbnail-card ${
              idx === currentIndex ? "active-thumbnail" : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
          >
            <img
              src={alien.image}
              alt={alien.name}
              className="thumbnail-image"
            />
            <span className="thumbnail-name">{alien.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Aliens;