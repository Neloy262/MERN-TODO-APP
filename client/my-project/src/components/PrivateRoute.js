import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children, loggedin }) {
  return loggedin ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
