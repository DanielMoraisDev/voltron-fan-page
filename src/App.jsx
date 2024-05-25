import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Characters from "./components/Characters/Characters.jsx"
import Episodies from "./components/Episodies/Episodies.jsx"
import Planets from "./components/Planets/Planets.jsx"

import ErrorPage from "./components/ErrorPage/ErrorPage.jsx"

import Login from "./components/Login/Login.jsx"
import Register from "./components/Register/Register.jsx"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/sobre" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />
        <Route path="/personagens" element={
          <>
            <Header />
            <Characters />
            <Footer />
          </>
        } />
        <Route path="/episodios" element={
          <>
            <Header />
            <Episodies />
            <Footer />
          </>
        } />
        <Route path="/planetas" element={
          <>
            <Header />
            <Planets />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App