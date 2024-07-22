import {closestCorners, DndContext} from "@dnd-kit/core"
import { Column } from "../components/Column";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import ComboBox from "./StandingCombo";

export default function Standings(){
    const nfl_tasks = [
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
        
    ];
    

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

    const nba_tasks = [
        {id: 1, title: "Atlanta Hawks", URL: "https://content.sportslogos.net/logos/6/220/full/8190_atlanta_hawks-primary-2021.png"},
        {id: 2, title: "Boston Celtics", URL: "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19977628.png"},
        {id: 3, title: "Brooklyn Nets", URL: "https://content.sportslogos.net/logos/6/3786/full/brooklyn_nets_logo_primary_2025_sportslogosnet-1501.png"},
        {id: 4, title: "Charlotte Hornets", URL: "https://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png"},
        {id: 5, title: "Chicago Bulls", URL: "https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png"},
        {id: 6, title: "Cleveland Cavaliers", URL: "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_2023_sportslogosnet-5369.png"},
        {id: 7, title: "Dallas Mavericks", URL: "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png"},
        {id: 8, title: "Denver Nuggets", URL: "https://content.sportslogos.net/logos/6/229/full/8926_denver_nuggets-primary-2019.png"},
        {id: 9, title: "Detroit Pistons", URL: "https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20185710.png"},
        {id: 10, title: "Golden State Warriors", URL: "https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png"},
        {id: 11, title: "Houston Rockets", URL: "https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png"},
        {id: 12, title: "Indiana Pacers", URL: "https://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png"},
        {id: 13, title: "Los Angeles Clippers", URL: "https://content.sportslogos.net/logos/6/236/full/los_angeles_clippers_logo_primary_2025_sportslogosnet-5542.png"},
        {id: 14, title: "Los Angeles Lakers", URL: "https://content.sportslogos.net/logos/6/237/full/los_angeles_lakers_logo_primary_2024_sportslogosnet-7324.png"},
        {id: 15, title: "Memphis Grizzlies", URL: "https://content.sportslogos.net/logos/6/231/full/4373_memphis_grizzlies-primary-2019.png"},
        {id: 16, title: "Miami Heat", URL: "https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif"},
        {id: 17, title: "Milwaukee Bucks", URL: "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_20165763.png"},
        {id: 18, title: "Minnesota Timberwolves", URL: "https://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png"},
        {id: 19, title: "New Orleans Pelicans", URL: "https://content.sportslogos.net/logos/6/4962/full/new_orleans_pelicans_logo_primary_2024_sportslogosnet-9292.png"},
        {id: 20, title: "New York Knicks", URL: "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_2024_sportslogosnet-7170.png"},
        {id: 21, title: "Oklahoma City Thunder", URL: "https://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png"},
        {id: 22, title: "Orlando Magic", URL: "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png"},
        {id: 23, title: "Philadelphia 76ers", URL: "https://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png"},
        {id: 24, title: "Phoenix Suns", URL: "https://content.sportslogos.net/logos/6/238/full/phoenix_suns_logo_primary_20143696.png"},
        {id: 25, title: "Portland Trail Blazers", URL: "https://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png"},
        {id: 26, title: "Sacramento Kings", URL: "https://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png"},
        {id: 27, title: "San Antonio Spurs", URL: "https://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png"},
        {id: 28, title: "Toronto Raptors", URL: "https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png"},
        {id: 29, title: "Utah Jazz", URL: "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_2023_sportslogosnet-8513.png"},
        {id: 30, title: "Washington Wizards", URL: "https://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png"}
    ];

    const mlb_tasks = [

        {id: 1, title: "Arizona Diamondbacks", URL: "https://content.sportslogos.net/logos/54/50/full/arizona_diamondbacks_logo_primary_20123733.png"},
        {id: 2, title: "Atlanta Braves", URL: "https://content.sportslogos.net/logos/54/51/full/atlanta_braves_logo_primary_20221869.png"},
        {id: 3, title: "Baltimore Orioles", URL: "https://content.sportslogos.net/logos/53/52/full/baltimore_orioles_logo_primary_20195398.png"},
        {id: 4, title: "Boston Red Sox", URL: "https://content.sportslogos.net/logos/53/53/full/boston_red_sox_logo_primary_20097510.png"},
        {id: 5, title: "Chicago White Sox", URL: "https://content.sportslogos.net/logos/53/55/full/chicago_white_sox_logo_primary_19911413.png"},
        {id: 6, title: "Chicago Cubs", URL: "https://content.sportslogos.net/logos/54/54/full/chicago_cubs_logo_primary_19792956.pn"},
        {id: 7, title: "Cincinnati Reds", URL: "https://content.sportslogos.net/logos/53/55/full/chicago_white_sox_logo_primary_19911413.png"},
        {id: 8, title: "Cleveland Guardians", URL: "https://content.sportslogos.net/logos/53/6804/full/cleveland_guardians_logo_primary_20227577.png"},
        {id: 9, title: "Colorado Rockies", URL: "https://content.sportslogos.net/logos/54/58/full/colorado_rockies_logo_primary_20171892.png"},
        {id: 10, title: "Detroit Tigers", URL: "https://content.sportslogos.net/logos/53/59/full/detroit_tigers_logo_primary_20162109.png"},
        {id: 11, title: "Houston Astros", URL: "https://content.sportslogos.net/logos/53/4929/full/houston_astros_logo_primary_20137038.png"},
        {id: 12, title: "Kansas City Royals", URL: "https://content.sportslogos.net/logos/53/62/full/kansas_city_royals_logo_primary_20198736.png"},
        {id: 13, title: "Los Angeles Angels", URL: "https://content.sportslogos.net/logos/53/6521/full/4389_los_angeles_angels-primary-2016.png"},
        {id: 14, title: "Los Angeles Dodgers", URL: "https://content.sportslogos.net/logos/54/63/full/los_angeles_dodgers_logo_primary_20127886.png"},
        {id: 15, title: "Miami Marlins", URL: "https://content.sportslogos.net/logos/54/3637/full/miami_marlins_logo_primary_20194007.png"},
        {id: 16, title: "Milwaukee Brewers", URL: "https://content.sportslogos.net/logos/54/64/full/6474_milwaukee_brewers-primary-2020.png"},
        {id: 17, title: "Minnesota Twins", URL: "https://content.sportslogos.net/logos/53/65/full/minnesota_twins_logo_primary_2023_sportslogosnet-3953.png"},
        {id: 18, title: "New York Yankees", URL: "https://content.sportslogos.net/logos/53/68/full/new_york_yankees_logo_primary_19685115.png"},
        {id: 19, title: "New York Mets", URL: "https://content.sportslogos.net/logos/54/67/full/m01gfgeorgvbfw15fy04alujm.png"},
        {id: 20, title: "Oakland Athletics", URL: "https://content.sportslogos.net/logos/53/69/full/6xk2lpc36146pbg2kydf13e50.png"},
        {id: 21, title: "Philadelphia Phillies", URL: "https://content.sportslogos.net/logos/54/70/full/philadelphia_phillies_logo_primary_20193931.png"},
        {id: 22, title: "Pittsburgh Pirates", URL: "https://content.sportslogos.net/logos/54/71/full/1250_pittsburgh_pirates-primary-2014.png"},
        {id: 23, title: "San Diego Padres", URL: "https://content.sportslogos.net/logos/54/73/full/7517_san_diego_padres-primary-2020.png"},
        {id: 24, title: "San Francisco Giants", URL: "https://content.sportslogos.net/logos/54/74/full/san_francisco_giants_logo_primary_20002208.png"},
        {id: 25, title: "Seattle Mariners", URL: "https://content.sportslogos.net/logos/53/75/full/seattle_mariners_logo_primary_19933809.png"},
        {id: 26, title: "St. Louis Cardinals", URL: "https://content.sportslogos.net/logos/54/72/full/3zhma0aeq17tktge1huh7yok5.png"},
        {id: 27, title: "Tampa Bay Rays", URL: "https://content.sportslogos.net/logos/54/72/full/3zhma0aeq17tktge1huh7yok5.png"},
        {id: 28, title: "Texas Rangers", URL: "https://content.sportslogos.net/logos/53/77/full/ajfeh4oqeealq37er15r3673h.png"},
        {id: 29, title: "Toronto Blue Jays", URL: "https://content.sportslogos.net/logos/53/78/full/toronto_blue_jays_logo_primary_20208446.png"},
        {id: 30, title: "Washington Nationals", URL: "https://content.sportslogos.net/logos/54/578/full/washington_nationals_logo_primary_20117280.png"}

    ];

    const[tasks, setTasks] = useState(nfl_tasks)

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

    const handleSelect =(leagueChosen) => {
        if (leagueChosen === "nba"){
            setTasks(nba_tasks)
        }else if (leagueChosen === "mlb"){
            setTasks(mlb_tasks)
        }else if (leagueChosen === "nfl"){
            setTasks(nfl_tasks)
        }else if (leagueChosen === "nhl"){
            setTasks(nhl_tasks)
        }
    }

    return(
       <div className="standings">
        <h1>Standings</h1>
        <h3>Below is an example of picking and choosing sports teams standings before the season begins. Users can move drag and drop and click submit to submit! The drop down is for the league you want to choose.</h3>
        <button onClick={handleClick}>Submit!</button>
        <ComboBox onSelect={handleSelect} /> 
        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>

            <Column tasks={tasks}/> 
        </DndContext>
        
       </div> 
    );

}