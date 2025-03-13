import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Function to fetch posts
const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 30000, // Cache data for 30 seconds
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
