import { useParams } from 'react-router-dom'

export default function StoryDetails() {
  const { id } = useParams()

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
  
  function filterById(stories, id) {
    return stories.filter(story => story.id === id);
  }

  const story = filterById(stories, id);

  
  return (
    <div className="story-details">
      <h2>Story Details for {id} </h2>
      <h3>{story.title}</h3>
      <p>Sport: {story.sport}</p>
      <p>By Author: {story.author} </p>
      <p>Location: {story.location}</p>
      <div className="details">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum metus, fermentum ac egestas ac, consectetur id dolor. Donec dictum nec purus vel aliquam. Sed vehicula lacus ultricies nunc tempor, ac rhoncus sem maximus. Sed malesuada arcu in nunc tempor, ac suscipit nunc aliquam. Nam elementum, risus id iaculis sollicitudin, arcu diam mollis libero, et ultrices ante sapien id urna. Pellentesque sit amet erat eu arcu consectetur sollicitudin. Nam placerat sem quis enim finibus ultricies.
          <br /> <br /> 

Phasellus facilisis, mi non faucibus maximus, ligula magna lacinia risus, vel ultrices neque eros vel magna. Curabitur tempus sollicitudin velit quis euismod. Nulla magna elit, finibus sed blandit id, condimentum nec lorem. Phasellus sit amet sapien in leo dictum interdum. Donec vel sollicitudin dui. Fusce tincidunt libero ornare iaculis viverra. Nulla eleifend, eros at molestie ultrices, tellus leo tincidunt mi, sit amet consequat orci mauris vel nisi. Integer velit quam, facilisis ac velit eget, sagittis pretium nisi. Fusce sodales orci ultricies elit iaculis vehicula. Donec volutpat ultricies neque ut accumsan. Aenean nec gravida arcu. Fusce eget tristique ex. Nulla imperdiet est quis metus dapibus, nec mattis nisi vehicula. Curabitur pellentesque metus risus, ac posuere nisl malesuada ac.
          <br /><br />
Curabitur condimentum magna sed ligula tincidunt, in scelerisque libero feugiat. Mauris vel sollicitudin mi. Vestibulum scelerisque purus ex, et accumsan dolor scelerisque vel. Nulla sit amet fringilla lectus. Curabitur gravida facilisis odio. Cras id mi molestie, pharetra enim ac, pretium nisi. Praesent dapibus dui ultrices felis lacinia, vitae scelerisque lectus aliquam. Duis congue fermentum euismod. In finibus orci in arcu feugiat, quis luctus ipsum laoreet. Donec aliquet congue tortor laoreet commodo. Ut congue nisi et ipsum feugiat, vitae sodales elit consectetur. In feugiat ultricies urna, ac venenatis dui suscipit vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nulla eros, lobortis non molestie.</p>
      </div>
    </div>
  )
}
