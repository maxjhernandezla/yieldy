import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingRouter from "./LandingRouter";
import SimulatorRouter from "./SimulatorRouter";
import Footer from "../components/Footer/Footer";
import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
import { ResultProvider } from '../context/ResultContext';
import SurveyRouter from "./SurveyRouter";
import PrivateRoute from './PrivateRoute';

const AppRouter = () =>
{
    return (
        <ResultProvider>
            <BrowserRouter>
                <ResponsiveNavbar />
                <Routes>
                    <Route path='/' element={<LandingRouter />} />
                    {/* <Route path='/simulator' element={<SimulatorRouter />} />
                    <Route element={<PrivateRoute />} >
                        <Route path='/survey' element={<SurveyRouter />} />
                    </Route>
                    <Route path='*' element={<LandingRouter />} /> */}
                </Routes>
                {/* <Footer /> */}
            </BrowserRouter>
        </ResultProvider>
    );
};

export default AppRouter
