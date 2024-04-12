import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"


function App() {
  return <BrowserRouter>

    <Header />
    

    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/about" element={<About />}/>
      <Route path ="/contact" element={<Contact />}/>
      <Route path ="/login" element={<Login />}/>

    </Routes>
  </BrowserRouter>
}

export default App