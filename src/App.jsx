import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header.jsx"

import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Characters from "./components/Characters/Characters.jsx"
import Episodies from "./components/Episodies/Episodies.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<About/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/episodies" element={<Episodies/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App