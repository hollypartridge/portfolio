import { useParams } from 'react-router-dom'

import SpaceInvadersVideo from '../../assets/space-invaders-walkthrough.mp4'
import BflyVideo from '../../assets/b-fly-walkthrough.mp4'
import EpopVideo from '../../assets/e-pop-walkthrough.mp4'
import OnlineCuratedVideo from '../../assets/online-curated-walkthrough.mp4'
import WebsiteDisplay from './WebsiteDisplay'

function ProjectShow() {
  const projects = [
    {
      name: 'Online Curated',
      hyperlink: 'https://online-curated.netlify.app/',
      website: 'online-curated.netlify.app',
      description: 'A full-stack app built in 1 week using Python, Django, PostgreSQL, React and SCSS. My app, Online Curated, is a womenswear shop. Its features included a shopping bag, wishlist and a wardrobe where users could create outfits from the products, using drag and drop functionality. Building a full stack app on my own helped me develop my knowledge of the back-end, using Python, Django and PostgreSQL for the first time, while pushing myself further on the front-end to creating an app with more diverse functionality.',
      video: OnlineCuratedVideo,
      github: 'https://github.com/hollypartridge/Online-Curated-GA-Project-4-FE',
      id: 'online-curated',
    },
    {
      name: 'E-Pop',
      hyperlink: 'https://e-pop.netlify.app/',
      website: 'e-pop.netlify.app',
      description: 'A full-stack MERN App built using React, Node.js, Express and MongoDB in 1 week. Our app was an online community and platform for creatives and developers to share their work and connect with others. For this project, I focused primarily on the front-end, building the main pages of the site using React. This included conditional rendering of the pages depending on authorisation.',
      video: EpopVideo,
      github: 'https://github.com/hollypartridge/Epop-GA-Project-3-FE',
      id: 'e-pop',
    },
    {
      name: 'B-Fly',
      hyperlink: 'https://tarot-reading-react.netlify.app/',
      website: 'tarot-reading-react.netlify.app',
      description: 'A React app built using an external API in 48 hours. Our app provided the user with a Tarot Card reading. This project was crucial in developing my knowledge of React, as well as learning to pair program and problem solving as a team.',
      video: BflyVideo,
      github: 'https://github.com/hollypartridge/B-Fly-GA-Project-2',
      id: 'b-fly',
    },
    {
      name: 'Space Invaders',
      hyperlink: 'https://hollypartridge.github.io/Space-Invaders-GA-Project-1/',
      website: 'hollypartridge.github.io/Space-Invaders-GA-Project-1',
      description: 'A grid based video-game built using HTML, CSS and JavaScript in 1 week. My game was a classic version of Space Invaders. Building this game helped me cement and further evolve my knowledge of JavaScript, while increasing my confidence in developing on my own.',
      video: SpaceInvadersVideo,
      github: 'https://github.com/hollypartridge/Space-Invaders-GA-Project-1',
      id: 'space-invaders',
    }
  ]

  const { projectId } = useParams()
  
  const filteredProject = projects.filter(project => {
    return project.id === projectId
  })

  console.log(filteredProject)

  return (
    filteredProject.map(project => (
      <div key={project.id} className='show'>
        <WebsiteDisplay 
          title={project.website}
          video={project.video}
          alt={project.name}
        />
        <div className='project-show-info'>
          <p>☆ {project.name} ☆</p>
          <a href={project.hyperlink} target='_blank' rel='noreferrer'><p>Deployed Website</p></a>
          <a href={project.github} target='_blank' rel='noreferrer'><p>Github</p></a>
          <p id='primary-description'>{project.description}</p>
        </div>
      </div>
    ))
  )
}

export default ProjectShow