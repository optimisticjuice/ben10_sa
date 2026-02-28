import episodes from "./episodeapi.json";

interface Episode {
  id: string
  title: string
  season: string
  series: string
}

// Type the JSON structure correctly
interface EpisodeData {
  "Ben 10": Episode[];
  "Ben 10: Alien Force": Episode[];
  "Ben 10: Ultimate Alien": Episode[];
  "Ben 10: Omniverse": Episode[];
  "Ben 10: Reboot": Episode[];
}

const typedEpisodes = episodes as EpisodeData;

// Export individual series or all episodes
export const ben10Episodes = typedEpisodes["Ben 10"];
export const alienForceEpisodes = typedEpisodes["Ben 10: Alien Force"];
export const ultimateAlienEpisodes = typedEpisodes["Ben 10: Ultimate Alien"];
export const omniverseEpisodes = typedEpisodes["Ben 10: Omniverse"];
export const rebootEpisodes = typedEpisodes["Ben 10: Reboot"];

// Export all episodes as a flat array if needed
export const allEpisodes = [
  ...ben10Episodes,
  ...alienForceEpisodes,
  ...ultimateAlienEpisodes,
  ...omniverseEpisodes,
  ...rebootEpisodes
];

export default typedEpisodes;