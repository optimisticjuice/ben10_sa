// Import React library for JSX and React utilities like Children.map and cloneElement
import React from 'react';
// Import individual Ben10 series components for rendering different content based on selection
import ClassicBen10 from "../ben10s/ben10";
import Ben10AlienForce from "../ben10s/ben10_alienforce";
import Ben10UltimateAlien from "../ben10s/ben10_ultimatealien";
import Ben10Omniverse from "../ben10s/ben10_omniverse";
import Ben10Reboot from "../ben10s/ben10_reboot";   
import "./Selection.css";
// Define a union type for all possible Ben10 series options
// This ensures type safety - only these specific string values are allowed
type Ben10Series = "classic" | "alien-force" | "ultimate-alien" | "omniverse" | "reboot";

// Define the props interface for Ben10Thumbnails component
// children: Optional React nodes passed to this component (will be Navbar images)
// onSelect: Required callback function that takes a Ben10Series parameter
type ThumbnailProps = {
  children?: React.ReactNode;   
  onSelect: (series: Ben10Series) => void;
};

// Ben10Thumbnails component - handles image selection and series switching
// Takes children (Navbar images) and enhances them with click handlers
export function Ben10Thumbnails({ children, onSelect }: ThumbnailProps) {
  // Extract images from children and add onClick handlers
  // React.Children.map iterates over all child elements passed to this component
  const imagesWithHandlers = React.Children.map(children, (child, index) => {
    // Check if the child is a valid React element AND specifically an img element
    // This ensures we only process actual image elements, not text or other nodes
    if (React.isValidElement(child) && child.type === 'img') {
      // Define the mapping between image index and Ben10 series
      // Index 0 (first image) maps to "classic", index 1 to "alien-force", etc.
      const seriesMapping: Ben10Series[] = ["classic", "alien-force", "ultimate-alien", "omniverse", "reboot"];
      // Get the specific series for this image based on its position
      const series = seriesMapping[index];
      
      // Clone the image element and add new props to it
      // This preserves all original props (src, alt, className, etc.) while adding functionality
      return React.cloneElement(child as React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>, {
        // Add onClick handler that calls the onSelect callback with the correct series
        onClick: () => onSelect(series),
        // Add semantic role for accessibility - indicates this image acts like a button
        role: "button" as const,
        // Make the image focusable for keyboard navigation
        tabIndex: 0,
        // Add keyboard event handler for accessibility (Enter and Space keys)
        onKeyDown: (e: React.KeyboardEvent<HTMLImageElement>) => {
          // Check if user pressed Enter or Space key
          if (e.key === 'Enter' || e.key === ' ') {
            // Call the onSelect callback with the series when key is pressed
            onSelect(series);
          }
        }
      });
    }
    // If child is not an img element, return it unchanged
    return child;
  });

  // Render the enhanced images within a container div
  return (
    <div className="thumbnail-row">
      {/* Render all the images with their new click handlers */}
      {imagesWithHandlers}
    </div>
  );
}

// Define the props interface for Ben10Layout component
// series: Optional Ben10Series that determines which content to display
export type LayoutProps = {
  series: Ben10Series | null;
};

// Ben10Layout component - renders content based on selected Ben10 series
// Uses conditional rendering to show the appropriate series component
export function Ben10Layout({ series }: LayoutProps) {
  // If no series is selected, return nothing (empty render)
  // This prevents showing content when user hasn't made a selection yet
  if (!series) {
    return;
  }

  // Switch statement to determine which component to render based on series
  // This is more efficient than multiple if-else statements and ensures all cases are handled
  switch (series) {
    // If series is "classic", render the Classic Ben10 component
    case "classic":
      return <ClassicBen10 />;

    // If series is "alien-force", render the Alien Force component
    case "alien-force":
      return <Ben10AlienForce />;

    // If series is "ultimate-alien", render the Ultimate Alien component
    case "ultimate-alien":
      return <Ben10UltimateAlien/>;

    // If series is "omniverse", render the Omniverse component
    case "omniverse":
      return <Ben10Omniverse />;

    // If series is "reboot", render the Reboot component
    case "reboot":
      return <Ben10Reboot />;
  }
}

