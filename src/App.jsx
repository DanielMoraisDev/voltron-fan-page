import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./Header.jsx"

import Home from "./Home.jsx"
import About from "./About.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App