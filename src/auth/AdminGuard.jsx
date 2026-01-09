import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminGuard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.isAdmin) {
    return <Navigate to="/homepage" replace />;
  }

  return <Outlet />;
};

export default AdminGuard;
