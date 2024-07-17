import { Outlet } from "react-router-dom"

export default function StoriesLayout() {
  return (
    <div className="stories-layout">
      <h2>Stories</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      
      <Outlet />
    </div>
  )
}