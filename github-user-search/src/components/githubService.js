import axios from "axios";

export const fetchUserData = async (username) => {
  const API_URL = `https://api.github.com/users/${username}`;

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};