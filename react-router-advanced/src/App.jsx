// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>        
        {/* Protected Route for Profile */}
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route for blog post with 'id' parameter */}
        <Route path="blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
