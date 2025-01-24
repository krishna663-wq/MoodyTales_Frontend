import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Section from '../Components/Section/Section'
import Services from '../Components/Services/Services'
import Books from '../Components/Books/Books'
// import Readnow from '../Components/Readnow/Readnow'
// import Getstarted from '../Components/Getstarted/Getstarted'
// import Login from '../Components/Login/Login'
// import { BrowserRouter , Routes, Route} from "react-router-dom";



function Home() {


    return (
        <>
            {/* <Getstarted/> */}
            <Navbar />
            <Section />
            <About />
            <Services />
            <Books />
            
        </>

    )
}

export default Home