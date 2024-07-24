import { Navigate, Outlet, Route } from "react-router-dom";
import { useResult } from "../context/ResultContext";

const PrivateRoute = ({ element, ...rest }) =>
{
    const { simulatorDone } = useResult();
    // return simulatorDone ? <Outlet /> : <Navigate to='/' />;
    return <Outlet />;

    ;
};

export default PrivateRoute