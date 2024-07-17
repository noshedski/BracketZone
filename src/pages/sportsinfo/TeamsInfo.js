import { useLoaderData,  useParams } from "react-router-dom"

import './TeamsInfo'

export default function TeamsInfo(){
    const leagues = useLoaderData();

    // Get the league name from the state passed via NavLink
    const { league } = useParams();
    
    const filteredTeams = leagues && leagues[league] ? leagues[league] : [];;
    const teams = filteredTeams["teams"];
    return(
        <div className="view-playoff-teams">
            <h1>Teams Info</h1>
            <h2>League: {league}</h2>
            <div>
                {teams.map(team => (
                    <div className="team">
                        <h1>{team.name}</h1>
                        <p>Wins: {team.stats.wins}</p>
                        <p>Losses: {team.stats.losses}</p>
                    </div>
                 ))}


            </div>
                
            
        </div>
    );
}

export const teamsLoader = async () => {
    const res = await fetch('http://localhost:5000/leagues')
  
    if (!res.ok) {
      throw Error('Could not fetch the list of teams')
    }
  
    return res.json()
  }