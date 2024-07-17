import { Outlet, NavLink } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>BracketZone</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="stories">Sports Feed</NavLink>
          <NavLink to="standings">Standings</NavLink>
          <NavLink to="leagues">Sports Leagues</NavLink>
          <NavLink to="groups">Groups</NavLink>
          <NavLink to="signup">Sign Up</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}