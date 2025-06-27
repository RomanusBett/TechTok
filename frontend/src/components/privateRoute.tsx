import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    isAuthenticated:boolean;
    children:React.ReactNode;
}

const PrivateRoute = ({isAuthenticated, children}: PrivateRouteProps) =>{
    return isAuthenticated ? <>{children}</> : <Navigate to='/login' replace />;
};

export default PrivateRoute;