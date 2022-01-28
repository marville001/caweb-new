import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const token = localStorage.adminToken;

  return <>{token ? children : <Navigate to="/admin/login" />}</>;
};

export default AdminPrivateRoute;
