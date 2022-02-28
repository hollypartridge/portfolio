import { Link } from 'react-router-dom'

function ProjectInfo({ link, name }) {
  return (
    <div className='project-info'>
      <Link to={link}>.｡.:*☆ {name} ☆.｡.:*</Link>
    </div>
  )
}

export default ProjectInfo