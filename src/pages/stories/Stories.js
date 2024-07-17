import { Link, useLoaderData } from "react-router-dom"
import ComboBox from "./StoryCombo";
import { useState } from 'react';

export default function Stories() {
  const stories = useLoaderData()

  const [selectedSport, setSelectedSport] = useState('');

  const handleSelect = (sport) => {
    setSelectedSport(sport)
  }

  const filteredStories = selectedSport
    ? stories.filter((story) => story.sport=== selectedSport)
    : stories;

  return (
    <div className="stories">
      <ComboBox onSelect={handleSelect} />  
      {filteredStories.map(story => (
        <Link to={story.id.toString()} key={story.id}>
          <p>{story.title}</p>
          <p>Date: {story.date}</p>
          <p>Based in {story.location}, written by: {story.author}</p>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const storiesLoader = async () => {
  const res = await fetch('http://localhost:4000/stories')

  if (!res.ok) {
    throw Error('Could not fetch the list of stories')
  }

  return res.json()
}