import './App.css'
import NavbarSawa from './Components/NavbarSawa/NavbarSawa'
import {Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Services from './pages/Services/Services'
function App() {
  return (
    <div className='app'>
      <div className="overlay">
          <Routes  >
            <Route path='/' element={ <> <NavbarSawa /> <Home /> </>}  />
            <Route path='/SawaGroup' element={ <> <NavbarSawa /> <Home /> </>}  />
            <Route path='/services'  element={<> <NavbarSawa /> <Services /> </>} />
            <Route path='/contact'  element={<> <NavbarSawa /> <Contact /></>} />
            <Route path='/about'  element={<> <NavbarSawa /> <About /></>} />
          </Routes>
        
      </div>
    </div>
  )
}

export default App
