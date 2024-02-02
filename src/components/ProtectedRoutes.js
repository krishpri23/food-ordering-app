import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default ProtectedRoutes = ({ children }) => {
  const auth = useSelector((store) => store.login.state);
  let location = useLocation();
  console.log("auth", auth);
  return auth ? (
    <Route>{children}</Route>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
