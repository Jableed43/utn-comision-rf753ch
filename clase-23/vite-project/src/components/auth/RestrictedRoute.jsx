import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function RestrictedRoute() {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}

export default RestrictedRoute;
