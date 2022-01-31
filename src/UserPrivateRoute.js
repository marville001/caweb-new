import {  Navigate } from "react-router-dom";

const UserPrivateRoute = ({ children }) => {
  const token = localStorage.token;

  return <>{token ? children : <Navigate to="/admin/login" />}</>;
};

export default UserPrivateRoute;
