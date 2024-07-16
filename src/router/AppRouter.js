import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home/Home"
import Project from "../pages/Project/Project"
import HowItWorks from "../pages/HowItWorks/HowItWorks"
import Platform from "../pages/Platform/Platform"
import Benefits from "../pages/Benefits/Benefits"

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
        </BrowserRouter>
    )
}

export default AppRouter
