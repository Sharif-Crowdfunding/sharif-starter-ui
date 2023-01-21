import React from "react";
import { Navigate } from "react-router-dom";
import MainNavigation from "../../common/Navigation";
import { useAuth } from "../../providers/auth";


const DefaultLayout = ({ children }) => {
  const { user } = useAuth();
  if (user.isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div >
      <MainNavigation />
      {children}
    </div>
  );
};

export default DefaultLayout;
