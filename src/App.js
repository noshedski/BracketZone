import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Stories from './pages/stories/Stories'
import StoryDetails from "./pages/stories/StoryDetails"
import StoryError from './pages/stories/StoryError'
import SportsLeagues from './pages/SportsLeagues'
import Groups from './pages/Groups'
import ViewGroup from './pages/groups/ViewGroup'
import MakeGroup from './pages/groups/MakeGroup'
import SignUp from './pages/SignUp'
import Standings from './pages/Standings'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import SportsLayout from './layouts/SportsLayout'
import StoriesLayout from './layouts/StoriesLayout'
import GroupLayout from './layouts/GroupLayout'
import TeamsInfo from './pages/sportsinfo/TeamsInfo'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact/>} />
      </Route>
      <Route path="stories" element={<StoriesLayout />} errorElement={<StoryError />}>
        <Route 
          index 
          element={<Stories />} 
          
          // errorElement={<CareersError />}
        />
        <Route 
          path=":id" 
          element={<StoryDetails />}
        />
      </Route>

      <Route path="standings" element={<Standings/>}/>

      <Route path="leagues" element={<SportsLayout/>}> 
        <Route index element= {<SportsLeagues/>} />
        <Route
          path=":league"
          element={<TeamsInfo/>}
        />
      </Route>


      <Route path="groups" element={<GroupLayout/>}>
        <Route
          index
          element={<Groups/>}
          /> 


        <Route path="makegroup" element={<MakeGroup/>} />
        <Route path="viewgroup" element={<ViewGroup/>} />

      </Route>
     
      <Route path="signup" element={<SignUp/>} />
      
     


      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App