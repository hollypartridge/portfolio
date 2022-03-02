import Butterfly from './Butterfly'

function About() {
  return (
    <div className='about-page'>
      <div className='about-para'>
        <p>&#8594; About Me</p>
        <p className='about'>I am a bright, hardworking and enthusiastic Junior Software Engineer with great attention to detail. I graduated from Chelsea College of Art this summer with a 1st class honours degree in Graphic Design Communication. After graduation, I enrolled in a Software Engineering Full-Stack Immersive course, which felt like a natural progression in my career having always had a natural curiosity with different computer softwares. My favourite aspects of Software Engineering are that it allows me to combine both my creative and analytical sides, while problem solving and challenging myself daily.</p>
        <p  className='about'>I am positive, efficient and able to listen and learn quickly, before delivering what is asked of me at a high standard. I am now looking to work as a Junior Software Engineer within a fast paced and energetic environment, alongside a diverse team, to further develop my skills and continue to learn as much as possible in the initial stages of my career.</p><br/>
        <p id='skills'>&#8594; Skills</p>
        <div className='skills'>
          <div className='skills-div'>
            <p>Front-End</p>
            <p>☆ HTML</p>
            <p>☆ CSS</p>
            <p>☆ JavaScript</p>
            <p>☆ React</p>
          </div>
          <div className='skills-div'>
            <p>Back-End</p>
            <p>☆ Python</p>
            <p>☆ Django</p>
            <p>☆ PostgreSQL</p>
            <p>☆ Node.js</p>
            <p>☆ MongoDB</p>
            <p>☆ Mongoose</p>
            <p>☆ Express</p>
            <p>☆ Insomnia</p>
          </div>
          <div className='skills-div'>
            <p>Other</p>
            <p>☆ Git</p>
            <p>☆ GitHub</p>
            <p>☆ REST APIs</p>
          </div>
          <div className='skills-div'>
            <p>Design</p>
            <p>☆ Adobe CC</p>
            <p>☆ Adobe Photoshop</p>
            <p>☆ Adobe Illustrator</p>
            <p>☆ Adobe InDesign</p>
            <p>☆ Adobe XD</p>
            <p>☆ Adobe Premiere Pro</p>
            <p>☆ Adobe After Effects</p>
          </div>
        </div><br/>
        <p id='contact'>&#8594; Contact</p>
        <div className='skills-div'>
          <a href='mailto:holly.partridge@icloud.com' target='_blank' rel='noreferrer'><p>☆ Email</p></a>
          <a href='https://www.linkedin.com/in/holly-partridge2022/' target='_blank' rel='noreferrer'><p>☆ LinkedIn</p></a>
          <a href='https://github.com/hollypartridge' target='_blank' rel='noreferrer'><p>☆ GitHub</p></a>
        </div>
      </div>
      <Butterfly emoji='🦋' />
    </div>
  )
}

export default About