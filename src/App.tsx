import NavBar from "./components/NavBar"
import About from "./components/About"
import Footer from "./components/Footer"
import "./styles/global.scss"
import Home from "./components/sectionsHome/Home"
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Restaurants from "./components/Restaurants"
import Chef from "./components/Chefs"
import './app.scss'
import { TransitionGroup, CSSTransition } from "react-transition-group"
//import { isMobile } from 'react-device-detect';
import User from "./components/User"
import { useEffect } from "react"


function App() {
  const location = useLocation()
  var desktop = false
  const routes = (
    < Routes location={location} >
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="Restaurants" element={<Restaurants />} />
      <Route path="Chef" element={<Chef />} />
      <Route path="User" element={<User />} />
    </Routes>
  )
  const checkSize = () => {
    desktop = window.innerWidth > 700 ? true : false
  }
  checkSize()
  return (
    <div className="App">
      <NavBar></NavBar>
      {desktop ? routes :
        <TransitionGroup >
          <CSSTransition classNames="node" timeout={{ enter: 3000 }} key={location.key}>
            {routes}
          </CSSTransition>
        </TransitionGroup>}
      <About></About>
      <Footer></Footer>
    </div>
  )
}

export default App
