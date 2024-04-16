import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import FooterComponent from "./Components/FooterComponent"
import Project from "./pages/Project"


function App() {
  return <BrowserRouter>

    <Header />
    

    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
      <Route path ="/contact" element={<Contact />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/project" element={<Project />}/>

    </Routes>

    <FooterComponent />
  </BrowserRouter>
}

export default App
