import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/register" />;
  } else {
    return <Outlet />;
  }
}

export default ProtectedRoute;
