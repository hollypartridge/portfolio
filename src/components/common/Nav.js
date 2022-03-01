import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div id='nav-name'>
        <Link to='/'>Holly Partridge <span id='smiley'>☺</span><span id='b-emoji'>🦋</span></Link>
      </div>
      <div>
        <p id='job-title'>.｡.:*☆ Junior Software Engineer ☆.｡.:*</p>
      </div>
      <div id='nav-about'>
        <Link to='/about'>&#8594; About</Link>
      </div>
    </nav>
  )
}

export default Nav