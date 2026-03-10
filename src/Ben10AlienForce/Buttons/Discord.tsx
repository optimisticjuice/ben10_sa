import { useEffect } from 'react';

function Discord() {
  useEffect(() => {
    // Redirect to specific Ben 10 Alien Force Discord channel
    window.location.href = 'https://discord.com/channels/1480968622343065610/1480968913914171724';
  }, []);

  return (
    <div>
      <h1>Redirecting to Ben 10 Alien Force Discord...</h1>
      <p>If you're not redirected automatically, <a href="https://discord.com/channels/1480968622343065610/1480968913914171724">click here</a>.</p>
    </div>
  );
}

export default Discord;