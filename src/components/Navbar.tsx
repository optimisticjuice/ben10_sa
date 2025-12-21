import './Navbar.css' // Import CSS for styling

// Define the props interface for Navbar component
// onSelect: Required callback function that takes a Ben10Series parameter
type NavbarProps = {
  onSelect: (series: "classic" | "alien-force" | "ultimate-alien" | "omniverse" | "reboot") => void;
};

function Navbar({ onSelect }: NavbarProps) {
  return (
    <div className="nav-container">
      {/* First clickable Ben10 image positioned at top left */}
      <img 
        src="/ben10right.png" // First Ben10 image
        alt="Ben 10 Classic" // Descriptive alt text for accessibility
        className="top-right-image" // CSS class for positioning and styling
        onClick={() => onSelect("classic")} // Click handler to select classic series
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        title="Ben 10" // Tooltip that appears on hover
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            onSelect("classic");
          }
        }}
      />

      {/* Second clickable Ben10 image positioned to the right of the first */}
      <img 
        src="/ben10alienforce.jpeg" // Second Ben10 image
        alt="Ben 10 Alien Force" // Descriptive alt text for accessibility
        className="second-ben10-image" // CSS class for positioning and styling
        onClick={() => onSelect("alien-force")} // Click handler to select alien-force series
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        title="Ben 10 Alien Force" // Tooltip that appears on hover
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            onSelect("alien-force");
          }
        }}
      />

      {/* Third clickable Ultimate Alien image positioned to the right of the second */}
      <img 
        src="/ultimate_alien.png" // Ultimate Alien image
        alt="Ben 10 Ultimate Alien" // Descriptive alt text for accessibility
        className="ultimate-alien-image" // CSS class for positioning and styling
        onClick={() => onSelect("ultimate-alien")} // Click handler to select ultimate-alien series
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        title="Ben 10 Ultimate Alien" // Tooltip that appears on hover
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            onSelect("ultimate-alien");
          }
        }}
      />

      {/* Fourth clickable Omniverse image positioned to the right of the Ultimate Alien image */}
      <img 
        src="/ben10omniverse.jpg" // Omniverse image
        alt="Ben 10 Omniverse" // Descriptive alt text for accessibility
        className="omniverse-image" // CSS class for positioning and styling
        onClick={() => onSelect("omniverse")} // Click handler to select omniverse series
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        title="Ben 10 Omniverse" // Tooltip that appears on hover
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            onSelect("omniverse");
          }
        }}
      />

      {/* Fifth clickable Reboot image positioned to the right of the Omniverse image */}
      <img 
        src="/reboot.jpeg" // Reboot image
        alt="Ben 10 Reboot" // Descriptive alt text for accessibility
        className="reboot-image" // CSS class for positioning and styling
        onClick={() => onSelect("reboot")} // Click handler to select reboot series
        role="button" // Semantic role indicating this acts as a button
        tabIndex={0} // Make image focusable for keyboard accessibility
        draggable="false" // Prevent image from being draggable
        title="Ben 10 Reboot" // Tooltip that appears on hover
        onKeyDown={(e) => {
          // Allow keyboard activation with Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            onSelect("reboot");
          }
        }}
      />
    </div>
  );
}

export default Navbar;