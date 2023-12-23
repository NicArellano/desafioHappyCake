import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/views/Home"
import Contacto from "./components/views/Contacto"



function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home />}/>
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
