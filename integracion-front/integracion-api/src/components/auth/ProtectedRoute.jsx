import PropTypes from "prop-types";
import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthProvider"


const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, userRole } = useAuth()

    if(!isAuthenticated){
        return <Navigate to="/" replace />
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/home" replace />;
      }

    return children;

}

export default ProtectedRoute;


ProtectedRoute.propTypes = {
    children: PropTypes.element ,
    allowedRoles: PropTypes.array,
};