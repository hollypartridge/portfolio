import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Nav from './components/common/Nav'
import About from './components/common/About'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
