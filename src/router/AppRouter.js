import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home/Home"
import Project from "../pages/Project/Project"
import HowItWorks from "../pages/HowItWorks/HowItWorks"
import Platform from "../pages/Platform/Platform"
import Benefits from "../pages/Benefits/Benefits"
import Contact from "../pages/Contact/Contact"
import Suscribe from "../pages/Suscribe/Suscribe"
import Footer from "../components/Footer/Footer"

const AppRouter = () =>
{
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <Project />
            <HowItWorks />
            <Platform />
            <Benefits />
            <Contact />
            <Suscribe />
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
