import { Route, Navigate } from "react-router-dom";

const UserPrivateRoute = ({ component: Component, ...rest }) => {
  if (!localStorage.token) return <Navigate to="/login" />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default UserPrivateRoute;
