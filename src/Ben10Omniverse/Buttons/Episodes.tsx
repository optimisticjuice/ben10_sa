import { useEffect, useState } from "react";
import buildApiUrl from "../../API/api";
import "./Episodes.css";

function Episodes() {
    
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState<string[]>([]);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        // Categories for omniverse series seasons
      const categories = [
        "Category:Ben 10: Omniverse Season 1 Episodes",
        "Category:Ben 10: Omniverse Season 2 Episodes", 
        "Category:Ben 10: Omniverse Season 3 Episodes",
        "Category:Ben 10: Omniverse Season 4 Episodes",
        "Category:Ben 10: Omniverse Season 5 Episodes",
        "Category:Ben 10: Omniverse Season 6 Episodes",
        "Category:Ben 10: Omniverse Season 7 Episodes",
        "Category:Ben 10: Omniverse Season 8 Episodes",
];

        const allTitles: string[] = [];

        for (const cat of categories) {
          const url = buildApiUrl({
            action: "query",
            list: "categorymembers",
            // query the category you want
            cmtitle: cat,
            cmlimit: "max",       // fetch up to the max per request
          });

          const res = await fetch(url);
          const json = await res.json();

          if (json.query?.categorymembers) {
            const titles = json.query.categorymembers.map(
              (item: any) => item.title as string
            );

            // push all titles from that season
            allTitles.push(...titles);
          }
        }

        // You now have titles, likely in season grouping order
        setEpisodes(allTitles);
      } catch (err) {
        console.error("Error fetching episodes:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEpisodes();
  }, []);
   console.log(episodes);
  return (
    <div className="episodes-container">
        {
            loading ? (
                <div className="loading-state">Loading Ben 10 Episodes...</div>
            ) : (
                <table className="episodes-table">
                    <tbody>
                        {
                        <>
                        <details>
                            <summary>Season 1</summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[0]) + 1} </td> 
                            <td className="episode-title">{episodes[7]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[1]) + 1} </td> 
                            <td className="episode-title">{episodes[8]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[2]) + 1} </td> 
                            <td className="episode-title">{episodes[0]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[3]) + 1} </td> 
                            <td className="episode-title">{episodes[3]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[4]) + 1} </td> 
                            <td className="episode-title">{episodes[6]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[5]) + 1} </td> 
                            <td className="episode-title">{episodes[9]}</td>
                        </tr>
                            <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[6]) + 1} </td> 
                            <td className="episode-title">{episodes[2]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[7]) + 1} </td> 
                            <td className="episode-title">{episodes[1]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[8]) + 1} </td> 
                            <td className="episode-title">{episodes[4]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[9]) + 1} </td> 
                            <td className="episode-title">{episodes[5]}</td>
                        </tr>
                        </details>
                        <details>
                            <summary>Season 2</summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[10]) + 1} </td> 
                            <td className="episode-title">{episodes[15]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[11]) + 1} </td> 
                            <td className="episode-title">{episodes[13]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[12]) + 1} </td> 
                            <td className="episode-title">{episodes[16]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[13]) + 1} </td> 
                            <td className="episode-title">{episodes[11]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[14]) + 1} </td> 
                            <td className="episode-title">{episodes[14]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[15]) + 1} </td> 
                            <td className="episode-title">{episodes[12]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[16]) + 1} </td> 
                            <td className="episode-title">{episodes[10]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[17]) + 1} </td> 
                            <td className="episode-title">{episodes[17]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[18]) + 1} </td> 
                            <td className="episode-title">{episodes[18]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[19]) + 1} </td> 
                            <td className="episode-title">{episodes[19]}</td>
                        </tr>
                        </details>
                        <details>
                            <summary> Season 3</summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[20]) + 1} </td> 
                            <td className="episode-title">{episodes[24]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[21]) + 1} </td> 
                            <td className="episode-title">{episodes[27]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[22]) + 1} </td> 
                            <td className="episode-title">{episodes[23]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[23]) + 1} </td> 
                            <td className="episode-title">{episodes[28]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[24]) + 1} </td> 
                            <td className="episode-title">{episodes[20]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[25]) + 1} </td> 
                            <td className="episode-title">{episodes[22]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[26]) + 1} </td> 
                            <td className="episode-title">{episodes[21]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[27]) + 1} </td> 
                            <td className="episode-title">{episodes[29]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[28]) + 1} </td> 
                            <td className="episode-title">{episodes[25]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[29]) + 1} </td> 
                            <td className="episode-title">{episodes[26]}</td>
                        </tr>
                        </details>
                        <details>
                            <summary>Season 4 </summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[30]) + 1} </td> 
                            <td className="episode-title">{episodes[32]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[31]) + 1} </td> 
                            <td className="episode-title">{episodes[39]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[32]) + 1} </td> 
                            <td className="episode-title">{episodes[36]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[33]) + 1} </td> 
                            <td className="episode-title">{episodes[34]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[34]) + 1} </td> 
                            <td className="episode-title">{episodes[31]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[35]) + 1} </td> 
                            <td className="episode-title">{episodes[38]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[36]) + 1} </td> 
                            <td className="episode-title">{episodes[35]}</td>
                        </tr>   
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[37]) + 1} </td> 
                            <td className="episode-title">{episodes[37]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[38]) + 1} </td> 
                            <td className="episode-title">{episodes[30]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[39]) + 1} </td> 
                            <td className="episode-title">{episodes[33]}</td>
                        </tr>
                        </details>
                        <details>
                            <summary>Season 5</summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[40]) + 1} </td> 
                            <td className="episode-title">{episodes[7]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[41]) + 1} </td> 
                            <td className="episode-title">{episodes[45]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[42]) + 1} </td> 
                            <td className="episode-title">{episodes[43]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[43]) + 1} </td> 
                            <td className="episode-title">{episodes[42]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[44]) + 1} </td> 
                            <td className="episode-title">{episodes[49]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[45]) + 1} </td> 
                            <td className="episode-title">{episodes[47]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[46]) + 1} </td> 
                            <td className="episode-title">{episodes[39]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[47]) + 1} </td> 
                            <td className="episode-title">{episodes[40]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[48]) + 1} </td> 
                            <td className="episode-title">{episodes[46]}</td>
                        </tr>
                        </details>
                        </>
                        }
                    </tbody>
                </table>
            )
        }
        </div>
    )
}
export default Episodes;