import { Link,  Outlet} from "react-router-dom";

export default function SportsLeagues(){

    const handleClick = (event ) =>{
        alert("In Construction..")

    }

    return (
        
        <div className="leagues">
            <h2>Sports Leagues</h2>
            <h3>Scroll through the sports leagues offered on BracketZone! *Editor's Note* Not all the data was created yet for view playoff teams, so some may redirect to an empty page.</h3>
            <div className="card-container">
                <div className="card-row">
                    <div className="card">
                        <img src="//upload.wikimedia.org/wikipedia/en/thumb/3/3a/05_NHL_Shield.svg/190px-05_NHL_Shield.svg.png" alt="Card" className="card-image" />
                        <h2 className="card-title">NHL</h2>

                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="NHL" key="NHL">
                            <button >View Playoff Teams</button>
                        </Link>
                        
                    </div>
                    <div className="card">
                        <img src="https://www.sportsnet.ca/wp-content/uploads/2023/10/PWHL_Logo_Primary-1040x572.jpg" alt="Card" className="card-image" />
                        <h2 className="card-title">PWHL</h2>
                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="PWHL" key="WNHL">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card">
                        <img src="https://1000logos.net/wp-content/uploads/2017/04/nba-big-logo.png" alt="Card" className="card-image" />
                        <h2 className="card-title">NBA</h2>

                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="NBA" key="NBA">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                    <div className="card">
                        <img src="//upload.wikimedia.org/wikipedia/en/thumb/9/97/WNBA_logo.svg/220px-WNBA_logo.svg.png" alt="Card" className="card-image" />
                        <h2 className="card-title">WNBA</h2>

                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="WNBA" key="WNBA">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card">
                        <img src="//upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/200px-National_Football_League_logo.svg.png" alt="Card" className="card-image" />
                        <h2 className="card-title">NFL</h2>

                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="NFL" key="NFL">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                    <div className="card">
                        <img src="https://1000logos.net/wp-content/uploads/2019/02/Canadian-Football-League-logo-500x333.jpg" alt="Card" className="card-image" />
                        <h2 className="card-title">CFL</h2>
                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="CFL" key="CFL">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card">
                        <img src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/275px-Major_League_Baseball_logo.svg.png" alt="Card" className="card-image" />
                        <h2 className="card-title">MLB</h2>
                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="MLB" key="MLB">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                    <div className="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/1200px-MLS_crest_logo_RGB_gradient.svg.png" alt="Card" className="card-image" />
                        <h2 className="card-title">MLS</h2>
                        <button onClick={handleClick}>Make Bracket</button>
                        <Link to="MLS" key="MLS">
                            <button>View Playoff Teams</button>
                        </Link>
                    </div>
                </div>
                
                </div>
            
            <Outlet />
        </div>
    )
}
