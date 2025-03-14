import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ Ensuring useAuth is included

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ Using useAuth to check authentication

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect if not authenticated
  }

  return children; // Render protected content if authenticated
}

export default ProtectedRoute;
