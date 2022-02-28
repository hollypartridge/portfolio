import WebsiteDisplay from './WebsiteDisplay'
import ProjectInfo from './ProjectInfo'
import Butterfly from './Butterfly'

function Home() {
  return (
    <>
      <section className='home'>
        <Butterfly emoji='🦋' />
        <WebsiteDisplay 
          title='marcd.co'
          video='https://vod-progressive.akamaized.net/exp=1646220000~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3635%2F26%2F668177216%2F3075517360.mp4~hmac=763d0733c5a48bd2bd46ab8515052b0ae1ec410c4907f512f63bbfbb19715ac0/vimeo-prod-skyfire-std-us/01/3635/26/668177216/3075517360.mp4?filename=540p.mp4'
        />
        <ProjectInfo 
          link='https://online-curated.netlify.app/' 
          name='Online Curated'
        />
      </section>
      <section className='home'>
        <ProjectInfo 
          link='https://online-curated.netlify.app/' 
          name='E-Pop'
        />
        <WebsiteDisplay 
          title='mitchellbarton.com'
          video='https://player.vimeo.com/external/664664332.sd.mp4?s=1588885464511681ae6e544e86b1f1240d28f975&profile_id=165&oauth_token_id=1150485861'
        />
        <Butterfly emoji='🦋' />
      </section>
    </>
  )
}

export default Home