function ProjectInfo({ link, name }) {
  return (
    <div className='project-info'>
      <a 
        href={link}
        target='_blank'
        rel='noreferrer'
      >.｡.:*☆ {name} ☆.｡.:*</a>
    </div>
  )
}

export default ProjectInfo