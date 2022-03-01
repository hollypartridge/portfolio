import { Link } from 'react-router-dom'

function MobileLink({ link, name }) {
  return (
    <div className='link'>
      <Link to={link}>☆ {name} ☆</Link>
    </div>
  )
}

export default MobileLink