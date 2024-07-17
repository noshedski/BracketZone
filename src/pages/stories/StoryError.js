import { Link, useRouteError } from "react-router-dom"

export default function StoryError() {
  const error = useRouteError()

  return (
    <div className="story-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
    </div>
  )
}