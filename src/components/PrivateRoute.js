import { Navigate } from "react-router-dom";
import { getUser } from "../store/authSelectors";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const user = useSelector(getUser);
  return user ? children : <Navigate to="/" />;
};
