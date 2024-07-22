import { Link } from "react-router-dom"
import ComboBox from "./StoryCombo";
import { useState } from 'react';

export default function Stories() {
  
  
  const stories = [
    {
      id: 1,
      title: "Are the Oilers going to complete the comeback agaisnt the Panthers?",
      sport: "hockey",
      author: "John Doe",
      location: "Ottawa, Canada",
      date: "June 22nd, 2024"
    },
    {
      id: 2,
      title: "Second-Round Pick Mogbo Agrees to Three-Year Deal with Raptors",
      sport: "basketball",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 4th, 2024"
    },
    {
      id: 3,
      title: "Tour de France 2024 Stage 6 Preview: Sprinters Ready",
      sport: "biking",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 3rd, 2024"
    },
    {
     id: 4,
      title: "5 Questions as the Dust Settles on 2024 NBA Free Agency",
      sport: "basketball",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 3rd, 2024"
    },
    {
      id: 5,
      title: "Capitals acquire Jakob Chychrun in deal with Senators",
      sport: "hockey",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 1st, 2024"
    },
    {
      id: 6,
      title: "Shane Pinto breathing sigh of relief after signing",
      sport: "hockey",
      author: "John Doe",
      location: "Ottawa, Canada",
      date :"July 3rd, 2024"
    },
    {
     id: 7,
      title: "Vikings WR Jordan Addison believs he's taken his 'game to the next level' after stellar rookie year",
      sport: "football",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "June 29th, 2024"
    }
  ];

  const stories_french = [
    {
      id: 1,
      title: "Les Oilers vont-ils réussir le retour contre les Panthers ?",
      sport: "hockey",
      author: "John Doe",
      location: "Ottawa, Canada",
      date: "June 22nd, 2024"
    },
    {
      id: 2,
      title: "Le choix de deuxième tour Mogbo accepte un contrat de trois ans avec les Raptors",
      sport: "basketball",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 4th, 2024"
    },
    {
      id: 3,
      title: "Aperçu de l'étape 6 du Tour de France 2024 : les sprinteurs prêts",
      sport: "biking",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 3rd, 2024"
    },
    {
     id: 4,
      title: "5 questions alors que la poussière se dissipe après la free agency NBA 2024",
      sport: "basketball",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 3rd, 2024"
    },
    {
      id: 5,
      title: "Les Capitals acquièrent Jakob Chychrun dans un échange avec les Sénateurs",
      sport: "hockey",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "July 1st, 2024"
    },
    {
      id: 6,
      title: "Shane Pinto pousse un soupir de soulagement après la signature",
      sport: "hockey",
      author: "John Doe",
      location: "Ottawa, Canada",
      date :"July 3rd, 2024"
    },
    {
     id: 7,
      title: "Le receveur des Vikings Jordan Addison croit qu'il a 'porté son jeu à un niveau supérieur' après une année recrue spectaculaire",
      sport: "football",
      author: "John Doe",
      location: "Ottawa, Canada",
      date : "June 29th, 2024"
    }
  ];


  const[stories_forpage, setLanguage] = useState(stories)

  const handleFrenchClick = (event ) =>{
    setLanguage(stories_french)

  }

  const handleEnglishClick = (event ) =>{
    setLanguage(stories)

  }

  const [selectedSport, setSelectedSport] = useState('');

  const handleSelect = (sport) => {
    setSelectedSport(sport)
  }

  const filteredStories = selectedSport
    ? stories_forpage.filter((story) => story.sport=== selectedSport)
    : stories_forpage;

  return (
    <div className="stories">
      <div className="combo"><ComboBox onSelect={handleSelect}  /> </div>
      <button onClick={handleEnglishClick}>English</button>
      <button onClick={handleFrenchClick}>French</button> 
      {filteredStories.map(story => (
        <Link to={story.id.toString()} key={story.id}>
          <p>{story.title}</p>
          <p>Date: {story.date}</p>
          <p>Based in / Dans: {story.location}, written by / écrit par: {story.author}</p>
        </Link>
      ))}
    </div>
  );
}