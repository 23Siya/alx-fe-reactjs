
import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication check function
const isAuthenticated = () => {
  return localStorage.getItem("userToken") !== null; // Replace with real authentication logic
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />; // Redirect to home if not authenticated
  }

  return children; // Render protected content if authenticated
}

export default ProtectedRoute;
