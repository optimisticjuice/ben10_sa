import { useEffect, useState } from "react";
import buildApiUrl from "../../API/api";
import "./Episodes.css";

function Episodes() {
    
    const [loading, setLoading] = useState(true);
    const [episodes, setEpisodes] = useState<string[]>([]);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        // Categories for original series seasons
       const categories = [
        "Category:Ben 10 Reboot Season 1 Episodes",
        "Category:Ben 10 Reboot Season 2 Episodes", 
        "Category:Ben 10 Reboot Season 3 Episodes",
        "Category:Ben 10 Reboot Season 4 Episodes"
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
                            <td className="episode-title">{episodes[37]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[1]) + 1} </td> 
                            <td className="episode-title">{episodes[33]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[2]) + 1} </td> 
                            <td className="episode-title">{episodes[7]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[3]) + 1} </td> 
                            <td className="episode-title">{episodes[34]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[4]) + 1} </td> 
                            <td className="episode-title">{episodes[30]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[5]) + 1} </td> 
                            <td className="episode-title">{episodes[4]}</td>
                        </tr>
                            <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[6]) + 1} </td> 
                            <td className="episode-title">{episodes[13]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[7]) + 1} </td> 
                            <td className="episode-title">{episodes[24]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[8]) + 1} </td> 
                            <td className="episode-title">{episodes[32]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[9]) + 1} </td> 
                            <td className="episode-title">{episodes[14]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[10]) + 1} </td> 
                            <td className="episode-title">{episodes[36]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[11]) + 1} </td> 
                            <td className="episode-title">{episodes[27]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[12]) + 1} </td> 
                            <td className="episode-title">{episodes[10]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[13]) + 1} </td> 
                            <td className="episode-title">{episodes[8]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[14]) + 1} </td> 
                            <td className="episode-title">{episodes[2]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[15]) + 1} </td> 
                            <td className="episode-title">{episodes[23]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[16]) + 1} </td> 
                            <td className="episode-title">{episodes[17]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[17]) + 1} </td> 
                            <td className="episode-title">{episodes[5]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[18]) + 1} </td> 
                            <td className="episode-title">{episodes[12]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[19]) + 1} </td> 
                            <td className="episode-title">{episodes[17]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[20]) + 1} </td> 
                            <td className="episode-title">{episodes[26]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[21]) + 1} </td> 
                            <td className="episode-title">{episodes[6]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[22]) + 1} </td> 
                            <td className="episode-title">{episodes[0]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[23]) + 1} </td> 
                            <td className="episode-title">{episodes[28]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[24]) + 1} </td> 
                            <td className="episode-title">{episodes[22]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[25]) + 1} </td> 
                            <td className="episode-title">{episodes[1]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[26]) + 1} </td> 
                            <td className="episode-title">{episodes[38]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[27]) + 1} </td> 
                            <td className="episode-title">{episodes[11]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[28]) + 1} </td> 
                            <td className="episode-title">{episodes[25]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[29]) + 1} </td> 
                            <td className="episode-title">{episodes[15]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[30]) + 1} </td> 
                            <td className="episode-title">{episodes[31]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[31]) + 1} </td> 
                            <td className="episode-title">{episodes[35]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[32]) + 1} </td> 
                            <td className="episode-title">{episodes[3]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[33]) + 1} </td> 
                            <td className="episode-title">{episodes[16]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[34]) + 1} </td> 
                            <td className="episode-title">{episodes[39]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[35]) + 1} </td> 
                            <td className="episode-title">{episodes[9]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[36]) + 1} </td> 
                            <td className="episode-title">{episodes[18]}</td>
                        </tr>   
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[37]) + 1} </td> 
                            <td className="episode-title">{episodes[19]}</td>
                        </tr>
                        
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[38]) + 1} </td> 
                            <td className="episode-title">{episodes[20]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[39]) + 1} </td> 
                            <td className="episode-title">{episodes[21]}</td>
                        </tr>
                        </details>
                        <details>
                        <summary>Season 2</summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[40]) + 1} </td> 
                            <td className="episode-title">{episodes[64]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[41]) + 1} </td> 
                            <td className="episode-title">{episodes[48]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[42]) + 1} </td> 
                            <td className="episode-title">{episodes[43]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[43]) + 1} </td> 
                            <td className="episode-title">{episodes[46]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[44]) + 1} </td> 
                            <td className="episode-title">{episodes[71]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[45]) + 1} </td> 
                            <td className="episode-title">{episodes[72]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[46]) + 1} </td> 
                            <td className="episode-title">{episodes[63]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[47]) + 1} </td> 
                            <td className="episode-title">{episodes[68]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[48]) + 1} </td> 
                            <td className="episode-title">{episodes[77]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[49]) + 1} </td> 
                            <td className="episode-title">{episodes[41]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[50]) + 1} </td> 
                            <td className="episode-title">{episodes[56]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[51]) + 1} </td> 
                            <td className="episode-title">{episodes[50]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[52]) + 1} </td> 
                            <td className="episode-title">{episodes[53]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[53]) + 1} </td> 
                            <td className="episode-title">{episodes[67]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[54]) + 1} </td> 
                            <td className="episode-title">{episodes[75]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[55]) + 1} </td> 
                            <td className="episode-title">{episodes[42]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[56]) + 1} </td> 
                            <td className="episode-title">{episodes[45]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[57]) + 1} </td> 
                            <td className="episode-title">{episodes[76]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[58]) + 1} </td> 
                            <td className="episode-title">{episodes[62]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[59]) + 1} </td> 
                            <td className="episode-title">{episodes[66]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[60]) + 1} </td> 
                            <td className="episode-title">{episodes[70]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[61]) + 1} </td> 
                            <td className="episode-title">{episodes[55]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[62]) + 1} </td> 
                            <td className="episode-title">{episodes[78]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[63]) + 1} </td> 
                            <td className="episode-title">{episodes[47]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[64]) + 1} </td> 
                            <td className="episode-title">{episodes[54]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[65]) + 1} </td> 
                            <td className="episode-title">{episodes[73]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[66]) + 1} </td> 
                            <td className="episode-title">{episodes[69]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[67]) + 1} </td> 
                            <td className="episode-title">{episodes[74]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[68]) + 1} </td> 
                            <td className="episode-title">{episodes[49]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[69]) + 1} </td> 
                            <td className="episode-title">{episodes[65]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[70]) + 1} </td> 
                            <td className="episode-title">{episodes[51]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[71]) + 1} </td> 
                            <td className="episode-title">{episodes[79]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[72]) + 1} </td> 
                            <td className="episode-title">{episodes[44]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[73]) + 1} </td> 
                            <td className="episode-title">{episodes[40]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[74]) + 1} </td> 
                            <td className="episode-title">{episodes[52]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[75]) + 1} </td> 
                            <td className="episode-title">{episodes[57]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[76]) + 1} </td> 
                            <td className="episode-title">{episodes[58]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[77]) + 1} </td> 
                            <td className="episode-title">{episodes[59]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[78]) + 1} </td> 
                            <td className="episode-title">{episodes[60]}</td>
                        </tr>
                         <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[79]) + 1} </td> 
                            <td className="episode-title">{episodes[61]}</td>
                        </tr>
                        </details>
                        <details>
                            <summary>Season 3</summary>
                        <tr>
                            
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[80]) + 1} </td> 
                            <td className="episode-title">{episodes[110]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[81]) + 1} </td> 
                            <td className="episode-title">{episodes[124]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[82]) + 1} </td> 
                            <td className="episode-title">{episodes[107]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[83]) + 1} </td> 
                            <td className="episode-title">{episodes[113]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[84]) + 1} </td> 
                            <td className="episode-title">{episodes[104]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[85]) + 1} </td> 
                            <td className="episode-title">{episodes[117]}</td>
                        </tr>
                            <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[86]) + 1} </td> 
                            <td className="episode-title">{episodes[111]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[87]) + 1} </td> 
                            <td className="episode-title">{episodes[116]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[88]) + 1} </td> 
                            <td className="episode-title">{episodes[95]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[89]) + 1} </td> 
                            <td className="episode-title">{episodes[87]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[90]) + 1} </td> 
                            <td className="episode-title">{episodes[126]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[91]) + 1} </td> 
                            <td className="episode-title">{episodes[89]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[92]) + 1} </td> 
                            <td className="episode-title">{episodes[94]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[93]) + 1} </td> 
                            <td className="episode-title">{episodes[86]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[94]) + 1} </td> 
                            <td className="episode-title">{episodes[84]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[95]) + 1} </td> 
                            <td className="episode-title">{episodes[105]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[96]) + 1} </td> 
                            <td className="episode-title">{episodes[92]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[97]) + 1} </td> 
                            <td className="episode-title">{episodes[88]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[98]) + 1} </td> 
                            <td className="episode-title">{episodes[99]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[99]) + 1} </td> 
                            <td className="episode-title">{episodes[90]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[100]) + 1} </td> 
                            <td className="episode-title">{episodes[129]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[101]) + 1} </td> 
                            <td className="episode-title">{episodes[83]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[102]) + 1} </td> 
                            <td className="episode-title">{episodes[123]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[103]) + 1} </td> 
                            <td className="episode-title">{episodes[106]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[104]) + 1} </td> 
                            <td className="episode-title">{episodes[108]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[105]) + 1} </td> 
                            <td className="episode-title">{episodes[120]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[106]) + 1} </td> 
                            <td className="episode-title">{episodes[103]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[107]) + 1} </td> 
                            <td className="episode-title">{episodes[91]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[108]) + 1} </td> 
                            <td className="episode-title">{episodes[98]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[109]) + 1} </td> 
                            <td className="episode-title">{episodes[93]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[110]) + 1} </td> 
                            <td className="episode-title">{episodes[97]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[111]) + 1} </td> 
                            <td className="episode-title">{episodes[119]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[112]) + 1} </td> 
                            <td className="episode-title">{episodes[85]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[113]) + 1} </td> 
                            <td className="episode-title">{episodes[121]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[114]) + 1} </td> 
                            <td className="episode-title">{episodes[112]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[115]) + 1} </td> 
                            <td className="episode-title">{episodes[82]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[116]) + 1} </td> 
                            <td className="episode-title">{episodes[96]}</td>
                        </tr>   
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[117]) + 1} </td> 
                            <td className="episode-title">{episodes[130]}</td>
                        </tr>
                        
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[118]) + 1} </td> 
                            <td className="episode-title">{episodes[100]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[119]) + 1} </td> 
                            <td className="episode-title">{episodes[109]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[120]) + 1} </td> 
                            <td className="episode-title">{episodes[128]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[121]) + 1} </td> 
                            <td className="episode-title">{episodes[101]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[122]) + 1} </td> 
                            <td className="episode-title">{episodes[125]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[123]) + 1} </td> 
                            <td className="episode-title">{episodes[80]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[124]) + 1} </td> 
                            <td className="episode-title">{episodes[127]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[125]) + 1} </td> 
                            <td className="episode-title">{episodes[131]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[126]) + 1} </td> 
                            <td className="episode-title">{episodes[81]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[127]) + 1} </td> 
                            <td className="episode-title">{episodes[118]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[128]) + 1} </td> 
                            <td className="episode-title">{episodes[102]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[129]) + 1} </td> 
                            <td className="episode-title">{episodes[122]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[130]) + 1} </td> 
                            <td className="episode-title">{episodes[114]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[131]) + 1} </td> 
                            <td className="episode-title">{episodes[115]}</td>
                        </tr>
                        </details>
                        <details>
                        <summary>Season 4</summary>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[132]) + 1} </td> 
                            <td className="episode-title">{episodes[155]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[133]) + 1} </td> 
                            <td className="episode-title">{episodes[144]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[134]) + 1} </td> 
                            <td className="episode-title">{episodes[143]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[135]) + 1} </td> 
                            <td className="episode-title">{episodes[160]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[136]) + 1} </td> 
                            <td className="episode-title">{episodes[162]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[137]) + 1} </td> 
                            <td className="episode-title">{episodes[163]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[138]) + 1} </td> 
                            <td className="episode-title">{episodes[152]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[139]) + 1} </td> 
                            <td className="episode-title">{episodes[142]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[140]) + 1} </td> 
                            <td className="episode-title">{episodes[158]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[141]) + 1} </td> 
                            <td className="episode-title">{episodes[149]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[142]) + 1} </td> 
                            <td className="episode-title">{episodes[137]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[143]) + 1} </td> 
                            <td className="episode-title">{episodes[138]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[144]) + 1} </td> 
                            <td className="episode-title">{episodes[146]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[145]) + 1} </td> 
                            <td className="episode-title">{episodes[139]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[146]) + 1} </td> 
                            <td className="episode-title">{episodes[135]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[147]) + 1} </td> 
                            <td className="episode-title">{episodes[157]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[148]) + 1} </td> 
                            <td className="episode-title">{episodes[133]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[149]) + 1} </td> 
                            <td className="episode-title">{episodes[134]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[150]) + 1} </td> 
                            <td className="episode-title">{episodes[150]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[151]) + 1} </td> 
                            <td className="episode-title">{episodes[165]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[152]) + 1} </td> 
                            <td className="episode-title">{episodes[141]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[153]) + 1} </td> 
                            <td className="episode-title">{episodes[161]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[154]) + 1} </td> 
                            <td className="episode-title">{episodes[145]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[155]) + 1} </td> 
                            <td className="episode-title">{episodes[159]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[156]) + 1} </td> 
                            <td className="episode-title">{episodes[156]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[157]) + 1} </td> 
                            <td className="episode-title">{episodes[147]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[158]) + 1} </td> 
                            <td className="episode-title">{episodes[154]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[159]) + 1} </td> 
                            <td className="episode-title">{episodes[166]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[160]) + 1} </td> 
                            <td className="episode-title">{episodes[164]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[161]) + 1} </td> 
                            <td className="episode-title">{episodes[151]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[162]) + 1} </td> 
                            <td className="episode-title">{episodes[140]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[163]) + 1} </td> 
                            <td className="episode-title">{episodes[148]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[164]) + 1} </td> 
                            <td className="episode-title">{episodes[153]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[165]) + 1} </td> 
                            <td className="episode-title">{episodes[40]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[166]) + 1} </td> 
                            <td className="episode-title">{episodes[136]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[167]) + 1} </td> 
                            <td className="episode-title">{episodes[57]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[168]) + 1} </td> 
                            <td className="episode-title">{episodes[58]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[167]) + 1} </td> 
                            <td className="episode-title">{episodes[59]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[168]) + 1} </td> 
                            <td className="episode-title">{episodes[60]}</td>
                        </tr>
                         <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[169]) + 1} </td> 
                            <td className="episode-title">{episodes[61]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[170]) + 1} </td> 
                            <td className="episode-title">{episodes[61]}</td>
                        </tr>
                        <tr>
                            <td className="episode-number">Episode Number : {episodes.indexOf(episodes[171]) + 1} </td> 
                            <td className="episode-title">{episodes[62]}</td>
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