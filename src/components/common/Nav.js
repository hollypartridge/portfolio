import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <div id='nav-name'>
        <Link to='/'>Holly Partridge ☺</Link>
      </div>
      <div>
        <p>.｡.:*☆ Junior Software Engineer ☆.｡.:*</p>
      </div>
      <div id='nav-about'>
        <Link to='/about'>&#8594; About</Link>
      </div>
    </nav>
  )
}

export default Nav