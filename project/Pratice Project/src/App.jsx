import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import FooterComponent from "./Components/FooterComponent"
import Project from "./pages/Project"
import UseStatePage from "./pages/UseStatePage"
import HookPage from "./pages/HookPage"


function App() {
  return <BrowserRouter>

    <Header />
    

    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
      <Route path ="/contact" element={<Contact />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/project" element={<Project />}/>
      <Route path ="/usestate" element={<UseStatePage />}/>
      <Route path ="/usehook" element={<HookPage />}/>

    </Routes>

    <FooterComponent />
  </BrowserRouter>
}

export default App
