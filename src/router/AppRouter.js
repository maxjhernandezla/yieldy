// import React, { useRef } from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LandingRouter from "./LandingRouter";
// import SimulatorRouter from "./SimulatorRouter";
// import Footer from "../components/Footer/Footer";
// import ResponsiveNavbar from "../components/ResponsiveNavbar/ResponsiveNavbar";
// import { ResultProvider } from '../context/ResultContext';
// import SurveyRouter from "./SurveyRouter";
// import PrivateRoute from './PrivateRoute';

// const AppRouter = () =>
// {
//     const projectRef = useRef(null);
//     const howItWorksRef = useRef(null);
//     const platformRef = useRef(null);
//     const benefitsRef = useRef(null);
//     const contactRef = useRef(null);
//     const suscribeRef = useRef(null);
//     const handleScrollTo = (ref) =>
//     {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//     };
//     return (
//         <ResultProvider>
//             <BrowserRouter>
//                 <ResponsiveNavbar refs={{
//                     projectRef,
//                     howItWorksRef,
//                     platformRef,
//                     benefitsRef,
//                     contactRef,
//                     suscribeRef
//                 }}
//                     handleScrollTo={handleScrollTo} />
//                 <Routes>
//                     <Route path='/' element={<LandingRouter refs={{
//                         projectRef,
//                         howItWorksRef,
//                         platformRef,
//                         benefitsRef,
//                         contactRef,
//                         suscribeRef
//                     }} />} />
//                     <Route path='/simulator' element={<SimulatorRouter />} />
//                     <Route element={<PrivateRoute />} >
//                         <Route path='/survey' element={<SurveyRouter />} />
//                     </Route>
//                     <Route path='*' element={<LandingRouter />} />
//                 </Routes>
//                 <Footer />
//             </BrowserRouter>
//         </ResultProvider>
//     );
// };

// export default AppRouter

import React, { useRef } from 'react';
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
    const projectRef = useRef(null);
    const howItWorksRef = useRef(null);
    const platformRef = useRef(null);
    const benefitsRef = useRef(null);
    const contactRef = useRef(null);
    const suscribeRef = useRef(null);

    const handleScrollTo = (ref) =>
    {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ResultProvider>
            <BrowserRouter>
                <ResponsiveNavbar
                    refs={{
                        projectRef,
                        howItWorksRef,
                        platformRef,
                        benefitsRef,
                        contactRef,
                        suscribeRef
                    }}
                    handleScrollTo={handleScrollTo}
                />
                <Routes>
                    <Route path='/' element={<LandingRouter refs={{
                        projectRef,
                        howItWorksRef,
                        platformRef,
                        benefitsRef,
                        contactRef,
                        suscribeRef
                    }} />} />
                    <Route path='/simulator' element={<SimulatorRouter />} />
                    <Route element={<PrivateRoute />} >
                        <Route path='/survey' element={<SurveyRouter />} />
                    </Route>
                    <Route path='*' element={<LandingRouter />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ResultProvider>
    );
};

export default AppRouter;

