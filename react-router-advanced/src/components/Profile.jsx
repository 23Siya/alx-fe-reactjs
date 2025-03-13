import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
