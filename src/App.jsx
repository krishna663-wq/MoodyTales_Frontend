import './App.css'
// import About from './Components/About/About'
// import Navbar from './Components/Navbar/Navbar'
// import Section from './Components/Section/Section'
// import Services from './Components/Services/Services'
// import Books from './Components/Books/Books'
import Home from './pages/Home'
import Login from './Components/Login/Login'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Getstarted from './Components/Getstarted/Getstarted';
import Learnmore from './Components/Learnmore/Learnmore';
// import Readnow from './Components/Readnow/Readnow';
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Signup" element={<Login/>}></Route>
      <Route path="/Getstarted" element={<Getstarted/>}></Route>
      <Route path='/Learnmore' element={<Learnmore/>}></Route>
      {/* <Route path='/Readnow' element={<Readnow/>}></Route> */}
    </Routes>

    </BrowserRouter>
    // <BrowserRouter>
    // <Navbar/>
    // <Section/>
    // <About/>
    // {/* <Services/> */}
    // <Books/>
    // <Login/>

    // </BrowserRouter>
  )
}

export default App
