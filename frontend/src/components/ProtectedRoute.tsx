import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ComponentType<any>; // Type for the component prop
  isLoggedIn: boolean | undefined; // Type for the isLoggedIn prop
}
//stores component as Component
const ProtectedRoute = ({
  component: Component,
  isLoggedIn,
}: ProtectedRouteProps) => {
  return isLoggedIn == true ? <Component /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
