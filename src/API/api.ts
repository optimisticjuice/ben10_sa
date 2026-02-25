export const API_BASE = "https://ben10.fandom.com/api.php";
export default function buildApiUrl(params: Record<string, string>): string {
  const query = new URLSearchParams({
    format: "json",
    origin: "*", // required for CORS when calling from browser
    ...params,
  });

  return `${API_BASE}?${query.toString()}`;
}    
