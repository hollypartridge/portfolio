import WebsiteDisplay from './WebsiteDisplay'
import ProjectInfo from './ProjectInfo'
import Butterfly from './Butterfly'
import SpaceInvadersVideo from '../../assets/space-invaders-walkthrough.mp4'
import BflyVideo from '../../assets/b-fly-walkthrough.mp4'
import EpopVideo from '../../assets/e-pop-walkthrough.mp4'
import OnlineCuratedVideo from '../../assets/online-curated-walkthrough.mp4'

function Home() {
  return (
    <>
      <section className='home'>
        <Butterfly emoji='🦋'/>
        <WebsiteDisplay 
          title='online-curated.netlify.app'
          video={OnlineCuratedVideo}
        />
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
        <WebsiteDisplay 
          title='e-pop.netlify.app'
          video={EpopVideo}
        />
        <Butterfly emoji='🦋' />
      </section>
      <section className='home'>
        <Butterfly emoji='🦋' />
        <WebsiteDisplay 
          title='tarot-reading-react.netlify.app'
          video={BflyVideo}
        />
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
        <WebsiteDisplay 
          title='hollypartridge.github.io/Space-Invaders-GA-Project-1'
          video={SpaceInvadersVideo}
        />
        <Butterfly emoji='🦋' />
      </section>
    </>
  )
}

export default Home