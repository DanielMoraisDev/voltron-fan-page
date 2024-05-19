import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Characters from "./components/Characters/Characters.jsx"
import Episodies from "./components/Episodies/Episodies.jsx"
import Planets from "./components/Planets/Planets.jsx"
import Wallpapers from "./components/Wallpapers/Wallpapers.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<About/>}/>
        <Route path="/personagens" element={<Characters/>}/>
        <Route path="/wallpapers" element={<Wallpapers/>}/>
        <Route path="/episodios" element={<Episodies/>}/>
        <Route path="/planetas" element={<Planets/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App