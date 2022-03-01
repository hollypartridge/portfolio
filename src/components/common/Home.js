import { Link } from 'react-router-dom'

import WebsiteDisplay from './WebsiteDisplay'
import ProjectInfo from './ProjectInfo'
import Butterfly from './Butterfly'
import SpaceInvadersVideo from '../../assets/space-invaders-walkthrough.mp4'
import BflyVideo from '../../assets/b-fly-walkthrough.mp4'
import EpopVideo from '../../assets/e-pop-walkthrough.mp4'
import OnlineCuratedVideo from '../../assets/online-curated-walkthrough.mp4'
import MobileLink from './MobileLink'

function Home() {
  return (
    <>
      <section className='home'>
        <Butterfly emoji='🦋'/>
        <MobileLink 
          link='/projects/online-curated'
          name='Online Curated'
        />
        <Link to='/projects/online-curated'>
          <WebsiteDisplay 
            title='online-curated.netlify.app'
            video={OnlineCuratedVideo}
          />
        </Link>
        <ProjectInfo 
          link='/projects/online-curated' 
          name='Online Curated'
        />
      </section>
      <section className='home'>
        <ProjectInfo 
          link='/projects/e-pop' 
          name='E-Pop'
        />
        <MobileLink 
          link='/projects/e-pop' 
          name='E-Pop'
        />
        <Link to='/projects/e-pop'>
          <WebsiteDisplay 
            title='e-pop.netlify.app'
            video={EpopVideo}
          />
        </Link>
        <Butterfly emoji='🦋' />
      </section>
      <section className='home'>
        <Butterfly emoji='🦋' />
        <MobileLink 
          link='/projects/b-fly' 
          name='B-Fly'
        />
        <Link to='/projects/b-fly'>
          <WebsiteDisplay 
            title='tarot-reading-react.netlify.app'
            video={BflyVideo}
          />
        </Link>
        <ProjectInfo 
          link='/projects/b-fly' 
          name='B-Fly'
        />
      </section>
      <section className='home'>
        <ProjectInfo 
          link='/projects/space-invaders' 
          name='Space Invaders'
        />
        <MobileLink 
          link='/projects/space-invaders' 
          name='Space Invaders'
        />
        <Link to='/projects/space-invaders'>
          <WebsiteDisplay 
            title='hollypartridge.github.io/Space-Invaders-GA-Project-1'
            video={SpaceInvadersVideo}
          />
        </Link>
        <Butterfly emoji='🦋' />
      </section>
    </>
  )
}

export default Home