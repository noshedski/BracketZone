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
    const jsonfile = {
        leagues: {
          NBA: {
            teams: [
            {
              name: "Oklahoma City Thunder",
              stats: {
                games_played: 20,
                wins: 12,
                losses: 8,
                points_per_game: 108.7,
                rebounds_per_game: 43.1,
                assists_per_game: 22.3
              }
            },
            {
              name: "New Orleans Pelicans",
              stats: {
                games_played: 20,
                wins: 10,
                losses: 10,
                points_per_game: 110.5,
                rebounds_per_game: 45.0,
                assists_per_game: 24.0
              }
            },
            {
              name: "Los Angeles Clippers",
              stats: {
                games_played: 20,
                wins: 14,
                losses: 6,
                points_per_game: 113.2,
                rebounds_per_game: 44.2,
                assists_per_game: 25.5
              }
            },
            {
              name: "Dallas Mavericks",
              stats: {
                games_played: 20,
                wins: 13,
                losses: 7,
                points_per_game: 112.0,
                rebounds_per_game: 42.5,
                assists_per_game: 23.1
              }
            },
            {
              name: "Minnesota Timberwolves",
              stats: {
                games_played: 20,
                wins: 11,
                losses: 9,
                points_per_game: 109.8,
                rebounds_per_game: 44.7,
                assists_per_game: 22.9
              }
            },
            {
              name: "Phoenix Suns",
              stats: {
                games_played: 20,
                wins: 16,
                losses: 4,
                points_per_game: 114.9,
                rebounds_per_game: 44.0,
                assists_per_game: 26.3
              }
            },
            {
              name: "Denver Nuggets",
              stats: {
                games_played: 20,
                wins: 15,
                losses: 5,
                points_per_game: 113.0,
                rebounds_per_game: 46.1,
                assists_per_game: 25.0
              }
            },
            {
              name: "Los Angeles Lakers",
              stats: {
                games_played: 20,
                wins: 15,
                losses: 5,
                points_per_game: 112.4,
                rebounds_per_game: 45.3,
                assists_per_game: 24.6
              }
            },
            {
              name: "Boston Celtics",
              stats: {
                games_played: 20,
                wins: 14,
                losses: 6,
                points_per_game: 111.7,
                rebounds_per_game: 44.8,
                assists_per_game: 24.9
              }
            },
            {
              name: "Miami Heat",
              stats: {
                games_played: 20,
                wins: 13,
                losses: 7,
                points_per_game: 109.5,
                rebounds_per_game: 42.6,
                assists_per_game: 23.8
              }
            },
            {
              name: "Cleveland Cavaliers",
              stats: {
                games_played: 20,
                wins: 12,
                losses: 8,
                points_per_game: 110.1,
                rebounds_per_game: 43.4,
                assists_per_game: 23.4
              }
            },
            {
              name: "Orlando Magic",
              stats: {
                games_played: 20,
                wins: 9,
                losses: 11,
                points_per_game: 106.8,
                rebounds_per_game: 44.1,
                assists_per_game: 22.0
              }
            },
            {
              name: "Milwaukee Bucks",
              stats: {
                games_played: 20,
                wins: 16,
                losses: 4,
                points_per_game: 116.1,
                rebounds_per_game: 48.5,
                assists_per_game: 25.7
              }
            },
            {
              name: "Indiana Pacers",
              stats: {
                games_played: 20,
                wins: 11,
                losses: 9,
                points_per_game: 108.9,
                rebounds_per_game: 43.0,
                assists_per_game: 23.1
              }
            },
            {
              name: "New York Knicks",
              stats: {
                games_played: 20,
                wins: 10,
                losses: 10,
                points_per_game: 107.5,
                rebounds_per_game: 44.3,
                assists_per_game: 21.9
              }
            },
            {
              name: "Philadelphia 76ers",
              stats: {
                games_played: 20,
                wins: 14,
                losses: 6,
                points_per_game: 112.8,
                rebounds_per_game: 45.2,
                assists_per_game: 24.5
              }
            }
          ]
          },
          NFL: {
            teams: [
            {
              name: "Houston Texans",
              stats: {
                games_played: 17,
                wins: 7,
                losses: 10,
                points_per_game: 21.4,
                yards_per_game: 350.1,
                turnover: 15
              }
            },
            {
              name: "Cleveland Browns",
              stats: {
                games_played: 17,
                wins: 11,
                losses: 6,
                points_per_game: 26.3,
                yards_per_game: 375.2,
                turnover: 12
              }
            },
            {
              name: "Kansas City Chiefs",
              stats: {
                games_played: 17,
                wins: 14,
                losses: 3,
                points_per_game: 29.5,
                yards_per_game: 415.3,
                turnover: 10
              }
            },
            {
              name: "Miami Dolphins",
              stats: {
                games_played: 17,
                wins: 9,
                losses: 8,
                points_per_game: 24.5,
                yards_per_game: 365.4,
                turnover: 14
              }
            },
            {
              name: "Buffalo Bills",
              stats: {
                games_played: 17,
                wins: 13,
                losses: 4,
                points_per_game: 28.4,
                yards_per_game: 397.6,
                turnover: 11
              }
            },
            {
              name: "Baltimore Ravens",
              stats: {
                games_played: 17,
                wins: 10,
                losses: 7,
                points_per_game: 25.6,
                yards_per_game: 378.3,
                turnover: 13
              }
            },
            {
              name: "Pittsburgh Steelers",
              stats: {
                games_played: 17,
                wins: 9,
                losses: 8,
                points_per_game: 22.1,
                yards_per_game: 340.7,
                turnover: 15
              }
            },
            {
              name: "San Francisco 49ers",
              stats: {
                games_played: 17,
                wins: 12,
                losses: 5,
                points_per_game: 27.1,
                yards_per_game: 390.5,
                turnover: 9
              }
            },
            {
              name: "Green Bay Packers",
              stats: {
                games_played: 17,
                wins: 11,
                losses: 6,
                points_per_game: 25.3,
                yards_per_game: 360.8,
                turnover: 12
              }
            },
            {
              name: "Detroit Lions",
              stats: {
                games_played: 17,
                wins: 8,
                losses: 9,
                points_per_game: 23.5,
                yards_per_game: 355.2,
                turnover: 14
              }
            },
            {
              name: "Los Angeles Rams",
              stats: {
                games_played: 17,
                wins: 10,
                losses: 7,
                points_per_game: 26.8,
                yards_per_game: 375.9,
                turnover: 11
              }
            },
            {
              name: "Dallas Cowboys",
              stats: {
                games_played: 17,
                wins: 12,
                losses: 5,
                points_per_game: 27.3,
                yards_per_game: 385.6,
                turnover: 10
              }
            },
            {
              name: "Philadelphia Eagles",
              stats: {
                games_played: 17,
                wins: 14,
                losses: 3,
                points_per_game: 28.9,
                yards_per_game: 402.1,
                turnover: 9
              }
            }
          ]
          },
          MLB: {
            teams: [
              {
                name: "Los Angeles Dodgers",
                stats: {
                  games_played: 16,
                  wins: 11,
                  losses: 5,
                  runs_per_game: 5.2,
                  home_runs: 22,
                  batting_average: 0.258
                }
              },
              {
                name: "Tampa Bay Rays",
                stats: {
                  games_played: 15,
                  wins: 9,
                  losses: 6,
                  runs_per_game: 4.9,
                  home_runs: 18,
                  batting_average: 0.245
                }
              }
            ]
          },
          NHL: {
            teams: [
            {
              name: "Dallas Stars",
              stats: {
                games_played: 82,
                wins: 46,
                losses: 30,
                overtime_losses: 6,
                goals_per_game: 3.3,
                goals_against_average: 2.7,
                power_play_percentage: 23.5,
                penalty_kill_percentage: 81.2
              }
            },
            {
              name: "Vegas Golden Knights",
              stats: {
                games_played: 82,
                wins: 51,
                losses: 24,
                overtime_losses: 7,
                goals_per_game: 3.4,
                goals_against_average: 2.5,
                power_play_percentage: 21.7,
                penalty_kill_percentage: 83.1
              }
            },
            {
              name: "Winnipeg Jets",
              stats: {
                games_played: 82,
                wins: 45,
                losses: 32,
                overtime_losses: 5,
                goals_per_game: 3.1,
                goals_against_average: 2.8,
                power_play_percentage: 19.9,
                penalty_kill_percentage: 80.5
              }
            },
            {
              name: "Colorado Avalanche",
              stats: {
                games_played: 82,
                wins: 50,
                losses: 24,
                overtime_losses: 8,
                goals_per_game: 3.6,
                goals_against_average: 2.7,
                power_play_percentage: 24.6,
                penalty_kill_percentage: 82.3
              }
            },
            {
              name: "Vancouver Canucks",
              stats: {
                games_played: 82,
                wins: 38,
                losses: 34,
                overtime_losses: 10,
                goals_per_game: 3.2,
                goals_against_average: 3.1,
                power_play_percentage: 22.4,
                penalty_kill_percentage: 77.6
              }
            },
            {
              name: "Nashville Predators",
              stats: {
                games_played: 82,
                wins: 42,
                losses: 31,
                overtime_losses: 9,
                goals_per_game: 2.9,
                goals_against_average: 2.8,
                power_play_percentage: 18.8,
                penalty_kill_percentage: 79.4
              }
            },
            {
              name: "Edmonton Oilers",
              stats: {
                games_played: 82,
                wins: 48,
                losses: 27,
                overtime_losses: 7,
                goals_per_game: 3.7,
                goals_against_average: 3.0,
                power_play_percentage: 26.7,
                penalty_kill_percentage: 80.1
              }
            },
            {
              name: "Los Angeles Kings",
              stats: {
                games_played: 82,
                wins: 45,
                losses: 29,
                overtime_losses: 8,
                goals_per_game: 3.1,
                goals_against_average: 2.9,
                power_play_percentage: 22.2,
                penalty_kill_percentage: 80.9
              }
            },
            {
              name: "Florida Panthers",
              stats: {
                games_played: 82,
                wins: 47,
                losses: 28,
                overtime_losses: 7,
                goals_per_game: 3.5,
                goals_against_average: 2.8,
                power_play_percentage: 24.3,
                penalty_kill_percentage: 81.6
              }
            },
            {
              name: "Tampa Bay Lightning",
              stats: {
                games_played: 82,
                wins: 50,
                losses: 24,
                overtime_losses: 8,
                goals_per_game: 3.6,
                goals_against_average: 2.6,
                power_play_percentage: 25.1,
                penalty_kill_percentage: 82.5
              }
            },
            {
              name: "Boston Bruins",
              stats: {
                games_played: 82,
                wins: 53,
                losses: 20,
                overtime_losses: 9,
                goals_per_game: 3.3,
                goals_against_average: 2.4,
                power_play_percentage: 23.9,
                penalty_kill_percentage: 84.2
              }
            },
            {
              name: "Toronto Maple Leafs",
              stats: {
                games_played: 82,
                wins: 50,
                losses: 21,
                overtime_losses: 11,
                goals_per_game: 3.5,
                goals_against_average: 2.8,
                power_play_percentage: 25.4,
                penalty_kill_percentage: 81.9
              }
            },
            {
              name: "New York Rangers",
              stats: {
                games_played: 82,
                wins: 47,
                losses: 26,
                overtime_losses: 9,
                goals_per_game: 3.2,
                goals_against_average: 2.7,
                power_play_percentage: 23.5,
                penalty_kill_percentage: 82.8
              }
            },
            {
              name: "Washington Capitals",
              stats: {
                games_played: 82,
                wins: 44,
                losses: 30,
                overtime_losses: 8,
                goals_per_game: 3.1,
                goals_against_average: 2.9,
                power_play_percentage: 20.9,
                penalty_kill_percentage: 81.5
              }
            },
            {
              name: "Carolina Hurricanes",
              stats: {
                games_played: 82,
                wins: 52,
                losses: 22,
                overtime_losses: 8,
                goals_per_game: 3.3,
                goals_against_average: 2.4,
                power_play_percentage: 24.0,
                penalty_kill_percentage: 84.0
              }
            },
            {
              name: "New York Islanders",
              stats: {
                games_played: 82,
                wins: 39,
                losses: 32,
                overtime_losses: 11,
                goals_per_game: 2.9,
                goals_against_average: 2.7,
                power_play_percentage: 18.9,
                penalty_kill_percentage: 81.3
              }
            }
          ]
          },
          CFL:{
            teams: []
    
          },
          WNBA:{
            teams: []
          },
          MLS:{
            teams: []
          },
          WNHL:{
            teams: []
          }
        }
      }

    return jsonfile;
  }