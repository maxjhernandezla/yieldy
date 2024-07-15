import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home/Home"
import Project from "../pages/Poject/Project"
import HowItWorks from "../pages/HowItWorks/HowItWorks"

const AppRouter = () =>
{
    return (
        <BrowserRouter>
            <Navbar />
            <Home />
            <Project />
            <HowItWorks />
        </BrowserRouter>
    )
}

export default AppRouter
