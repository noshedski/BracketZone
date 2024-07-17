import {closestCorners, DndContext} from "@dnd-kit/core"
import { Column } from "../components/Column";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

export default function Standings(){
    const[tasks, setTasks] = useState([
        { id: 1, title: "Arizona Cardinals", URL : "https://content.sportslogos.net/logos/7/177/full/arizona_cardinals_logo_primary_20058304.png"},
        { id: 2, title: "Atlanta Falcons", URL : "https://content.sportslogos.net/logos/7/173/full/299.png"},
        { id: 3, title: "Baltimore Ravens", URL : "https://content.sportslogos.net/logos/7/153/full/318.png"},
        { id: 4, title: "Buffalo Bills", URL :  "https://content.sportslogos.net/logos/7/149/full/n0fd1z6xmhigb0eej3323ebwq.png"},
        { id: 5, title: "Carolina Panthers", URL : "https://content.sportslogos.net/logos/7/174/full/f1wggq2k8ql88fe33jzhw641u.png"},
        { id: 6, title: "Chicago Bears", URL: "https://content.sportslogos.net/logos/7/169/full/chicago_bears_logo_primary_2023_sportslogosnet-7594.png" },
        { id: 7, title: "Cincinnati Bengals", URL: "https://content.sportslogos.net/logos/7/154/full/cincinnati_bengals_logo_primary_2021_sportslogosnet-2049.png" },
        { id: 8, title: "Cleveland Browns", URL: "https://content.sportslogos.net/logos/7/155/full/cleveland_browns_logo_primary_2024_sportslogosnet-6696.png"},
        { id: 9, title: "Dallas Cowboys", URL: "https://content.sportslogos.net/logos/7/165/full/406.png"},
        { id: 10, title: "Denver Broncos", URL: "https://content.sportslogos.net/logos/7/161/full/denver_broncos_logo_primary_19973076.png"},
        { id: 11, title: "Detroit Lions", URL:  "https://content.sportslogos.net/logos/7/170/full/detroit_lions_logo_primary_20172565.png"},
        { id: 12, title: "Green Bay Packers", URL: "https://content.sportslogos.net/logos/7/171/full/dcy03myfhffbki5d7il3.png"},
        { id: 13, title: "Houston Texans", URL: "https://content.sportslogos.net/logos/7/157/full/houston_texans_logo_primary_2024_sportslogosnet-5890.png" },
        { id: 14, title: "Indianapolis Colts", URL: "https://content.sportslogos.net/logos/7/158/full/indianapolis_colts_logo_primary_20043652.png" },
        { id: 15, title: "Jacksonville Jaguars" , URL: "https://content.sportslogos.net/logos/7/159/full/jacksonville_jaguars_logo_primary_20132171.png"},
        { id: 16, title: "Kansas City Chiefs", URL : "https://content.sportslogos.net/logos/7/162/full/857.png"},
        { id: 17, title: "Las Vegas Raiders" , URL : "https://content.sportslogos.net/logos/7/6708/full/8521_las_vegas_raiders-primary-20201.png"},
        { id: 18, title: "Los Angeles Chargers", URL: "https://content.sportslogos.net/logos/7/6446/full/1660_los_angeles__chargers-primary-20201.png" },
        { id: 19, title: "Los Angeles Rams" , URL: "https://content.sportslogos.net/logos/7/5941/full/8334_los_angeles_rams-primary-20201.png"},
        { id: 20, title: "Miami Dolphins" , URL: "https://content.sportslogos.net/logos/7/150/full/7306_miami_dolphins-primary-2018.png" },
        { id: 21, title: "Minnesota Vikings", URL: "https://content.sportslogos.net/logos/7/172/full/2704_minnesota_vikings-primary-20131.png" },
        { id: 22, title: "New England Patriots", URL: "https://content.sportslogos.net/logos/7/151/full/new_england_patriots_logo_primary_20005480.png" },
        { id: 23, title: "New Orleans Saints", URL : "https://content.sportslogos.net/logos/7/175/full/907.png"},
        { id: 24, title: "New York Giants" , URL: "https://content.sportslogos.net/logos/7/166/full/new_york_giants_logo_primary_20005208.png"},
        { id: 25, title: "New York Jets" , URL: "https://content.sportslogos.net/logos/7/152/full/new_york_jets_logo_primary_2024_sportslogosnet-7417.png"},
        { id: 26, title: "Philadelphia Eagles", URL: "https://content.sportslogos.net/logos/7/167/full/philadelphia_eagles_logo_primary_19964867.png" },
        { id: 27, title: "Pittsburgh Steelers" , URL: "https://content.sportslogos.net/logos/7/156/full/970.png"},
        { id: 28, title: "San Francisco 49ers", URL: "https://content.sportslogos.net/logos/7/179/full/9455_san_francisco_49ers-primary-2009.png"},
        { id: 29, title: "Seattle Seahawks", URL: "https://content.sportslogos.net/logos/7/180/full/pfiobtreaq7j0pzvadktsc6jv.png" },
        { id: 30, title: "Tampa Bay Buccaneers", URL: "https://content.sportslogos.net/logos/7/176/full/8363_tampa_bay_buccaneers-primary-2020.png" },
        { id: 31, title: "Tennessee Titans", URL: "https://content.sportslogos.net/logos/7/160/full/1053.png" },
        { id: 32, title: "Washington Commanders", URL: "https://content.sportslogos.net/logos/7/6832/full/washington_commanders_logo_primary_20228587.png" }
        
    ])

    const nhl_tasks = [
        { id: 1, title: "Anaheim Ducks", URL : "https://content.sportslogos.net/logos/1/1736/full/anaheim_ducks_logo_primary_20253347.png" },
        { id: 2, title: "Boston Bruins", URL : "https://content.sportslogos.net/logos/1/3/full/boston_bruins_logo_primary_2025_sportslogosnet-7260.png" },
        { id: 3, title: "Buffalo Sabres", URL : "https://content.sportslogos.net/logos/1/4/full/buffalo_sabres_logo_primary_20212495.png" },
        { id: 4, title: "Calgary Flames", URL : "https://content.sportslogos.net/logos/1/5/full/calgary_flames_logo_primary_20212695.png" },
        { id: 5, title: "Carolina Hurricanes", URL : "https://content.sportslogos.net/logos/1/6/full/carolina_hurricanes_logo_primary_20004386.png" },
        { id: 6, title: "Chicago Blackhawks", URL : "https://content.sportslogos.net/logos/1/7/full/56.png" },
        { id: 7, title: "Colorado Avalanche", URL : "https://content.sportslogos.net/logos/1/8/full/64.png" },
        { id: 8, title: "Columbus Blue Jackets", URL : "https://content.sportslogos.net/logos/1/9/full/jhepegs329pc7ugyypebl28wg.png" },
        { id: 9, title: "Dallas Stars", URL : "https://content.sportslogos.net/logos/1/10/full/dallas_stars_logo_primary_2022_sportslogosnet-4332.png" },
        { id: 10, title: "Detroit Red Wings", URL : "https://content.sportslogos.net/logos/1/11/full/yo3wysbjtagzmwj37tb11u0fh.png" },
        { id: 11, title: "Edmonton Oilers", URL : "https://content.sportslogos.net/logos/1/12/full/edmonton_oilers_logo_primary_2023_sportslogosnet-2985.png" },
        { id: 12, title: "Florida Panthers", URL : "https://content.sportslogos.net/logos/1/13/full/florida_panthers_logo_primary_20174924.png" },
        { id: 13, title: "Los Angeles Kings", URL : "https://content.sportslogos.net/logos/1/14/full/los_angeles_kings_logo_primary_2025_sportslogosnet-7860.png" },
        { id: 14, title: "Minnesota Wild", URL : "https://content.sportslogos.net/logos/1/15/full/8810_minnesota_wild-primary-2014.png" },
        { id: 15, title: "Montreal Canadiens", URL : "https://content.sportslogos.net/logos/1/16/full/montreal_canadiens_logo_primary_20001687.png" },
        { id: 16, title: "Nashville Predators", URL : "https://content.sportslogos.net/logos/1/17/full/lvchw3qfsun2e7oc02kh2zxb6.png" },
        { id: 17, title: "New Jersey Devils", URL : "https://content.sportslogos.net/logos/1/18/full/32tfs723a3bes0p0hb4hgcy1u.png" },
        { id: 18, title: "New York Islanders", URL : "https://content.sportslogos.net/logos/1/19/full/3911_new_york_islanders-primary-2018.png" },
        { id: 19, title: "New York Rangers", URL : "https://content.sportslogos.net/logos/1/20/full/new_york_rangers-primary_20006777.png" },
        { id: 20, title: "Ottawa Senators", URL : "https://content.sportslogos.net/logos/1/21/full/1129_ottawa_senators-primary-2021.png" },
        { id: 21, title: "Philadelphia Flyers", URL : "https://content.sportslogos.net/logos/1/22/full/philadelphia_flyers_logo_primary_2024_sportslogosnet-3145.png" },
        { id: 22, title: "Pittsburgh Penguins", URL : "https://content.sportslogos.net/logos/1/24/full/pittsburgh_penguins_logo_primary_20177954.png" },
        { id: 23, title: "San Jose Sharks", URL : "https://content.sportslogos.net/logos/1/26/full/san_jose_sharks-primary_20099429.png" },
        { id: 24, title: "Seattle Kraken", URL : "https://content.sportslogos.net/logos/1/6740/full/seattle_kraken_logo_primary_20226314.png" },
        { id: 25, title: "St. Louis Blues", URL : "https://content.sportslogos.net/logos/1/25/full/187.png" },
        { id: 26, title: "Tampa Bay Lightning", URL : "https://content.sportslogos.net/logos/1/27/full/tampa_bay_lightning_logo_primary_20124022.png" },
        { id: 27, title: "Toronto Maple Leafs", URL : "https://content.sportslogos.net/logos/1/28/full/8761_toronto_maple_leafs-primary-2017.png" },
        { id: 28, title: "Utah Hockey Club", URL : "https://content.sportslogos.net/logos/1/6902/full/utah_hockey_club_logo_primary_2025_sportslogosnet-8095.png"},
        { id: 29, title: "Vancouver Canucks", URL : "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png" },
        { id: 30, title: "Vegas Golden Knights", URL : "https://content.sportslogos.net/logos/1/6114/full/vegas_golden_knights_logo_primary_20185183.png" },
        { id: 31, title: "Washington Capitals", URL : "https://content.sportslogos.net/logos/1/30/full/llrs2zxi127vkqgcsvfb.png" },
        { id: 32, title: "Winnipeg Jets", URL : "https://content.sportslogos.net/logos/1/3050/full/z9qyy9xqoxfjn0njxgzoy2rwk.png" }

    ];



    const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;
    
        if (active.id === over.id) return;
    
        setTasks((tasks) => {
          const originalPos = getTaskPos(active.id);
          const newPos = getTaskPos(over.id);
    
          return arrayMove(tasks, originalPos, newPos);
        });

    };

    const handleClick = (event ) =>{
        alert("Standings Submitted!")

    }

    return(
       <div className="standings">
        <h1>Standings</h1>
        <h3>Below is an example of picking and choosing sports teams standings before the season begins. Users can move drag and drop and click submit to submit!</h3>
        <button onClick={handleClick}>Submit!</button>
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>

            <Column tasks={tasks}/> 
        </DndContext>
        
       </div> 
    );

}