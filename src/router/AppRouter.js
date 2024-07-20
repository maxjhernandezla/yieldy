import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingRouter from "./LandingRouter"
import SimulatorRouter from "./SimulatorRouter"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar"
import { ModalProvider } from '../context/ModalContext';
const AppRouter = () =>
{
    return (
        <ModalProvider>
            <BrowserRouter>
                <ResponsiveNavbar />
                <Routes>
                    <Route path='/' element={<LandingRouter />} />
                    <Route path='/simulator' element={<SimulatorRouter />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ModalProvider>
    )
}

export default AppRouter
