import { useEffect } from 'react';

function Discord() {
  useEffect(() => {
    // Redirect to specific Ben 10 Reboot Discord channel
    window.location.href = 'https://discord.com/channels/1480968622343065610/1480969085742354532';
  }, []);

  return (
    <div>
      <h1>Redirecting to Ben 10 Reboot Discord...</h1>
      <p>If you're not redirected automatically, <a href="https://discord.com/channels/1480968622343065610/1480969085742354532">click here</a>.</p>
    </div>
  );
}

export default Discord;