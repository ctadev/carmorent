import Login from "./Login";
import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return user ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
