import axios from "axios";

export const fetchUsers = async (username, location, repos) => {
  let query = "";

  if (username) query += `user:${username} `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>${repos} `;

  const API_URL = `https://api.github.com/search/users?q=${query.trim()}`;

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching users.");
  }
};
