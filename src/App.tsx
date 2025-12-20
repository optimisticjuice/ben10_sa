import { useState } from 'react' // Import useState for managing page color state
import './App.css' // Import CSS for styling

function App() {
  // State to track whether page should be dark green
  const [isDarkGreen, setIsDarkGreen] = useState(false)

  // Handle image click to toggle dark green background
  const handleImageClick = () => {
    setIsDarkGreen(!isDarkGreen)
  }

  return (
    <div className={`app-container ${isDarkGreen ? 'dark-green' : ''}`}>
      {/* First clickable Ben10 image positioned at top left */}
      <img 
        src="/ben10right.png" // First Ben10 image
        alt="Toggle dark green background" // Descriptive alt text for accessibility
        className="top-right-image" // CSS class for positioning and styling
        onClick={handleImageClick} // Click handler to toggle background color
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            handleImageClick()
          }
        }}
      />

      {/* Second clickable Ben10 image positioned to the right of the first */}
      <img 
        src="/ben10alienforce.jpeg" // Second Ben10 image (same source)
        alt="Toggle dark green background" // Descriptive alt text for accessibility
        className="second-ben10-image" // CSS class for positioning and styling
        onClick={handleImageClick} // Click handler to toggle background color
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            handleImageClick()
          }
        }}
      />

      {/* Third clickable Ultimate Alien image positioned to the right of the second */}
      <img 
        src="/ultimate_alien.png" // Ultimate Alien image
        alt="Toggle dark green background" // Descriptive alt text for accessibility
        className="ultimate-alien-image" // CSS class for positioning and styling
        onClick={handleImageClick} // Click handler to toggle background color
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            handleImageClick()
          }
        }}
      />

      {/* Fourth clickable Omniverse image positioned to the right of the third */}
      <img 
        src="/ben10omniverse.jpg" // Omniverse image
        alt="Toggle dark green background" // Descriptive alt text for accessibility
        className="omniverse-image" // CSS class for positioning and styling
        onClick={handleImageClick} // Click handler to toggle background color
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            handleImageClick()
          }
        }}
      />

      {/* Fifth clickable Reboot image positioned to the right of the fourth */}
      <img 
        src="/reboot.jpeg" // Reboot image
        alt="Toggle dark green background" // Descriptive alt text for accessibility
        className="reboot-image" // CSS class for positioning and styling
        onClick={handleImageClick} // Click handler to toggle background color
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            handleImageClick()
          }
        }}
      />
      
    </div>
  )
}

export default App
