import { useLoaderData, useParams } from 'react-router-dom'

export default function StoryDetails() {
  const { id } = useParams()
  const story = useLoaderData()

  
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

// data loader
export const storyDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:4000/stories/' + id)

  if (!res.ok) {
    throw Error('Could not find that story.')
  }

  return res.json()
}