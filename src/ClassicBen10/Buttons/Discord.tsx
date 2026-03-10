import { useEffect } from 'react';

function Discord() {
  useEffect(() => {
    // Redirect to specific Ben 10 Discord channel
    window.location.href = 'https://discord.com/channels/1480968622343065610/1480968769219072192';
  }, []);

  return (
    <div>
      <h1>Redirecting to Ben 10 Discord...</h1>
      <p>If you're not redirected automatically, <a href="https://discord.com/channels/1480968622343065610/1480968769219072192">click here</a>.</p>
    </div>
  );
}

export default Discord;