import React from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from './useAuth.hook';

export const RequireAuth = () => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth || !auth.loggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
