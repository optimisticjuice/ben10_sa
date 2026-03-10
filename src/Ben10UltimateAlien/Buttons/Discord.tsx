import { useEffect } from 'react';

function Discord() {
  useEffect(() => {
    // Redirect to specific Ben 10 Ultimate Alien Discord channel
    window.location.href = 'https://discord.com/channels/1480968622343065610/1480968980192821479';
  }, []);

  return (
    <div>
      <h1>Redirecting to Ben 10 Ultimate Alien Discord...</h1>
      <p>If you're not redirected automatically, <a href="https://discord.com/channels/1480968622343065610/1480968980192821479">click here</a>.</p>
    </div>
  );
}

export default Discord;