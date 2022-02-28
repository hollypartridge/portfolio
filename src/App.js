import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Nav from './components/common/Nav'
import About from './components/common/About'
import ProjectShow from './components/common/ProjectShow'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects/:projectId' element={<ProjectShow />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
