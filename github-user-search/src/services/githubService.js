import axios from "axios";

export const fetchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos} `;

  const API_URL = `https://api.github.com/search/users?q=${query.trim()}`;

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch GitHub users.");
  }
};
